<script setup lang="ts">
const instance = useOverlayInstance()

defineProps<{
  count: number
}>()
</script>

<template>
  <UModal :title="`This modal was opened programmatically ${count} times`">
    <template #footer>
      <UButton color="neutral" label="Close" @click="instance.close" />
    </template>
  </UModal>
</template>
