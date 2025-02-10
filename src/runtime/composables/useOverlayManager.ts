import { createSharedComposable } from '@vueuse/core'
import type { ComponentProps } from 'vue-component-type-helpers'

export type ManagedOverlayOptions<T extends Component, OverlayAttrs = Record<string, any>> = {
  component?: T
  defaultOpen?: boolean
  attrs?: ComponentProps<T> & OverlayAttrs
}
type ManagedOverlayOptionsPrivate = {
  id: symbol
  modelValue: boolean

}
export type Overlay = ManagedOverlayOptions<Component> & ManagedOverlayOptionsPrivate

function _useManagedOverlay() {
  const overlays: Overlay[] = shallowReactive([])

  const create = <T extends Component>(_options: ManagedOverlayOptions<T>) => {
    const options = reactive<Overlay>({
      id: Symbol(import.meta.dev ? 'useOverlayManager' : ''),
      modelValue: !!_options.defaultOpen,
      component: markRaw(_options.component!),
      isMounted: !!_options.defaultOpen,
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
      overlay.attrs[key as keyof T] = value as any
    })

    return attrs
  }

  return {
    overlays,
    open,
    create,
    patch,
    destroy,
    unMount
  }
}

export const useManagedOverlay = createSharedComposable(_useManagedOverlay)
