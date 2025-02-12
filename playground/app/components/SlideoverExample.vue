<script setup lang="ts">
const managedOverlay = useManagedOverlay()

defineProps<{
  count: number
}>()
</script>

<template>
  <USlideover :description="`This slideover was opened programmatically ${count} times`">
    <template #body>
      <Placeholder class="h-full" />
    </template>

    <template #footer>
      <UButton color="neutral" label="Close" @click="managedOverlay.pop()" />
    </template>
  </USlideover>
</template>
