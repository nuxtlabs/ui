import type { Component } from 'vue'
import type { ManagedOverlayOptions } from './useOverlayManager'
import { useManagedOverlay } from './useOverlayManager'
import type { ComponentProps } from 'vue-component-type-helpers'

// Allows for additional props to be passed to the overlay
type ExtendedProps<T, Additional = Record<string, any>> = Partial<ComponentProps<T> | Additional>

export const useOverlayInstance = <T extends Component>(component: T, _options?: ManagedOverlayOptions<ExtendedProps<T>>) => {
  const managedOverlay = useManagedOverlay()

  const instanceId: symbol = managedOverlay.create(component, _options)

  const open = (attrs?: ExtendedProps<T>) => {
    managedOverlay.open(instanceId, attrs)
  }

  const close = () => {
    managedOverlay.close(instanceId)
  }

  const patch = (attrs: ExtendedProps<T>) => {
    managedOverlay.patch(instanceId, attrs)
  }

  return {
    open,
    close,
    patch
  }
}
