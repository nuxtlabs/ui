import type { Component } from 'vue'
import type { SlideoverProps } from '../types'
import type { ManagedOverlayOptions } from './useOverlayManager'
import { useManagedOverlay } from './useOverlayManager'

export const useSlideover = <T extends Component>(component: T, _options?: ManagedOverlayOptions<T, SlideoverProps>) => {
  const managedOverlay = useManagedOverlay()

  const modalId: symbol = managedOverlay.create(component, _options)

  const open = (attrs?: ManagedOverlayOptions<T>['attrs']) => {
    managedOverlay.open(modalId, attrs)
  }

  const destroy = () => {
    managedOverlay.destroy(modalId)
  }

  const close = () => {
    managedOverlay.close(modalId)
  }

  const patch = (attrs: Partial<ManagedOverlayOptions<T>['attrs']>) => {
    managedOverlay.patch(modalId, attrs)
  }

  return {
    open,
    destroy,
    close,
    patch
  }
}
