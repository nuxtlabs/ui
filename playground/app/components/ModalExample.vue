<script setup lang="ts">
const LazyModalExample = defineAsyncComponent(() => import('./ModalExample2.vue'))

const managedOverlay = useManagedOverlay()
const modalexample2Instance = useOverlayInstance(LazyModalExample)

const nestedCount = ref(0)

defineProps<{
  count: number
}>()

function openModal() {
  modalexample2Instance.open({ count: nestedCount.value })
  nestedCount.value++
}
</script>

<template>
  <UModal :title="`This modal was opened programmatically ${count} times`">
    <template #body>
      <UButton @click="openModal">
        Open another Modal
      </UButton>
    </template>
    <template #footer>
      <UButton color="neutral" label="Close" @click="managedOverlay.pop()" />
    </template>
  </UModal>
</template>
