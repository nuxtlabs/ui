<script setup lang="ts">
const managedOverlay = useManagedOverlay()

defineProps<{
  count: number
}>()
</script>

<template>
  <UModal :title="`This modal was opened programmatically ${count} times`">
    <template #footer>
      <UButton color="neutral" label="Close" @click="managedOverlay.pop()" />
    </template>
  </UModal>
</template>
