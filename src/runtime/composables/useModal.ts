import type { Component } from 'vue'
import type { ModalProps } from '../types'
import type { ManagedOverlayOptions } from './useOverlayManager'
import { useManagedOverlay } from './useOverlayManager'

export interface ModalState {
  component: Component | string
  props: ModalProps
}

export const useModal = <T extends Component>(_options: ManagedOverlayOptions<T, ModalProps>) => {
  const managedOverlay = useManagedOverlay()

  const modalId: symbol = managedOverlay.create(_options)

  const open = (attrs?: ManagedOverlayOptions<T>['attrs']) => {
    managedOverlay.open(modalId, attrs)
  }

  const destroy = () => {
    managedOverlay.destroy(modalId)
  }

  return {
    open,
    destroy
  }
}
