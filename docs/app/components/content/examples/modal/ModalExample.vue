<script setup lang="ts">
const modal = useManagedOverlay()

defineProps<{
  count: number
}>()

const emit = defineEmits(['success'])

function onSuccess() {
  emit('success')
}
</script>

<template>
  <UModal :title="`This modal was opened programmatically ${count} times`">
    <template #footer>
      <div class="flex gap-2">
        <UButton color="neutral" label="Close" @click="modal.pop()" />
        <UButton label="Success" @click="onSuccess" />
      </div>
    </template>
  </UModal>
</template>
