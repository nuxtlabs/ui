import type { Component } from 'vue'
import { createSharedComposable } from '@vueuse/core'

export type ManagedOverlayOptions<OverlayAttrs = Record<string, any>> = {
  defaultOpen?: boolean
  attrs?: OverlayAttrs
}

type ManagedOverlayOptionsPrivate<T extends Component> = {
  component?: T
  id: symbol
  isMounted: boolean
  modelValue: boolean

}
export type Overlay = ManagedOverlayOptions<Component> & ManagedOverlayOptionsPrivate<Component>

function _useManagedOverlay() {
  const overlays: Overlay[] = shallowReactive([])

  const create = <T extends Component>(component: T, _options?: ManagedOverlayOptions<T>) => {
    const options = reactive<Overlay>({
      id: Symbol(import.meta.dev ? 'useOverlayManager' : ''),
      modelValue: !!_options?.defaultOpen,
      component: markRaw(component!),
      isMounted: !!_options?.defaultOpen,
      attrs: {},
      ..._options
    })

    overlays.push(options)

    return options.id
  }

  const open = <T extends Component>(id: symbol, attrs?: ManagedOverlayOptions<T>['attrs']) => {
    const overlay = overlays.find(overlay => overlay.id === id)

    if (!overlay) {
      throw new Error('Overlay not found')
    }

    // If attrs are provided, update the overlay's attrs
    if (attrs) {
      patch(overlay.id, attrs)
    }

    overlay.modelValue = true
    overlay.isMounted = true
  }

  const close = (id: symbol) => {
    const overlay = overlays.find(overlay => overlay.id === id)

    if (!overlay) {
      throw new Error('Overlay not found')
    }

    overlay.modelValue = false
  }

  const unMount = (id: symbol) => {
    const overlay = overlays.find(overlay => overlay.id === id)

    if (!overlay) {
      throw new Error('Overlay not found')
    }

    overlay.isMounted = false
  }

  const destroy = (id: symbol) => {
    const index = overlays.findIndex(overlay => overlay.id === id)

    if (index === -1) {
      throw new Error('Overlay not found')
    }

    overlays.splice(index, 1)
  }

  const patch = <T extends Component>(id: symbol, attrs: ManagedOverlayOptions<T>['attrs']) => {
    const overlay = overlays.find(overlay => overlay.id === id)

    if (!overlay) {
      throw new Error('Overlay not found')
    }

    Object.entries(attrs!).forEach(([key, value]) => {
      (overlay.attrs as any)[key] = value
    })

    return attrs
  }

  // Close the top most overlay
  const pop = () => {
    const overlay = overlays[overlays.length - 1]

    if (!overlay) {
      throw new Error('Overlay not found')
    }

    overlay.modelValue = false
  }

  return {
    overlays,
    open,
    close,
    create,
    patch,
    destroy,
    unMount,
    pop
  }
}

export const useManagedOverlay = createSharedComposable(_useManagedOverlay)
