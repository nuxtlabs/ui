<script lang="ts" setup>
const overlay = useOverlay()

const { id } = defineProps<{ id: symbol }>()

provide(`nuxt-ui.overlay-instance`, {
  close: () => overlay.close(id)
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
