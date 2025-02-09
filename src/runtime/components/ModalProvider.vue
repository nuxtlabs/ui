<script setup lang="ts">
import { useManagedOverlay } from '../composables/useOverlayManager'

const { overlays } = useManagedOverlay()
</script>

<template>
  <component
    :is="(overlay).component"
    v-for="(overlay,) in overlays"
    :key="overlay.id"
    v-bind="overlay.attrs"
    v-model:open="overlay.modelValue"
  />
</template>
