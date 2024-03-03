import { defineNuxtPlugin } from '#imports'
import { shallowRef } from 'vue'
import { slidOverInjectionKey } from '../composables/useSlideover'
import type { SlideoverState } from '../types/slideover'

export default defineNuxtPlugin((nuxtApp) => {
  const modalState = shallowRef<SlideoverState>({
    component: 'div',
    props: {}
  })

  nuxtApp.vueApp.provide(slidOverInjectionKey, modalState)
})
