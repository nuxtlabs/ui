<script setup lang="ts">
const instance = useOverlayInstance()

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
        <UButton color="neutral" label="Close" @click="instance.close" />
        <UButton label="Success" @click="onSuccess" />
      </div>
    </template>
  </UModal>
</template>
