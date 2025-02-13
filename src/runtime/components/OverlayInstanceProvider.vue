<script lang="ts" setup>
const overlayManager = useManagedOverlay()

const { id } = defineProps<{ id: symbol }>()

provide(`nuxt-ui.overlay-instance`, {
  close: () => overlayManager.close(id)
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
