import { ref, inject } from 'vue'
import type { ShallowRef, Component, InjectionKey } from 'vue'
import { createSharedComposable } from '@vueuse/core'
import { mergeConfig } from '../utils'
import type { ComponentProps, Strategy } from '../types'
// @ts-expect-error
import appConfig from '#build/app.config'
import { modal } from '#ui/ui.config'

export interface ModalState {
  component: Component | string
  props: ModalProps
}

export const modalInjectionKey: InjectionKey<ShallowRef<ModalState>> = Symbol('nuxt-ui.modal')

const config = mergeConfig<typeof modal>(appConfig.ui.strategy, appConfig.ui.modal, modal)

interface ModalProps {
  appear?: boolean,
  overlay?: boolean,
  transition?: boolean,
  preventClose?: boolean,
  fullscreen?: boolean,
  class?: string | Object | string[]
  ui?: Partial<typeof config> & { strategy?: Strategy }
  onClose?: () => void
  onClosePrevented?: () => void
  'onUpdate:modelValue'?: (value: boolean) => void
}

function _useModal () {
  const modalState = inject(modalInjectionKey)
  
  const isOpen = ref(false)

  function reveal<T extends Component> (component: T, props?: ModalProps & ComponentProps<T>) {
    modalState.value = {
      component,
      props: props ?? {}
    }
    isOpen.value = true
  }

  function close () {
    isOpen.value = false
    modalState.value = {
      component: 'div',
      props: {}
    }
  }

  /**
   * Allows updating the modal props
   */
  function patch <T extends Component = {}> (props: Partial<ModalProps & ComponentProps<T>>) {
    modalState.value = {
      ...modalState.value,
      props: {
        ...modalState.value.props,
        ...props
      }
    }
  }

  return {
    isOpen,
    reveal,
    close,
    patch
  }
}

export const useModal = createSharedComposable(_useModal)