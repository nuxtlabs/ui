<script setup lang="ts">
import OverlayInstanceProvider from './OverlayInstanceProvider.vue'

const { overlays, ...overlayManager } = useManagedOverlay()

const mountedOverlays = computed(() => overlays.filter(overlay => overlay.isMounted))

const onAfterLeave = (id: symbol) => {
  overlayManager.unMount(id)
}
</script>

<template>
  <OverlayInstanceProvider v-for="overlay in mountedOverlays" :id="overlay.id" :key="overlay.id">
    <component
      :is="overlay.component"
      v-bind="overlay.attrs"
      v-model:open="overlay.modelValue"
      @after:leave="onAfterLeave(overlay.id)"
    />
  </OverlayInstanceProvider>
</template>
