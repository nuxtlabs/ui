<script setup lang="ts">
import { useManagedOverlay } from '../composables/useOverlayManager'

const { overlays, ...overlayManager } = useManagedOverlay()

const mountedOverlays = computed(() => overlays.filter(overlay => overlay.isMounted))

const onAfterLeave = (id: symbol) => {
  overlayManager.unMount(id)
}
</script>

<template>
  <component
    :is="overlay.component"
    v-for="overlay in mountedOverlays"
    v-bind="overlay.attrs"
    :key="overlay.id"
    v-model:open="overlay.modelValue"
    @after:leave="onAfterLeave(overlay.id)"
  />
</template>
