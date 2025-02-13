<script setup lang="ts">
const LazyModalExample = defineAsyncComponent(() => import('./ModalExample2.vue'))

const modalexample2Instance = useOverlay().create(LazyModalExample)
const instance = useOverlayInstance()

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
      <UButton color="neutral" label="Close" @click="instance.close" />
    </template>
  </UModal>
</template>
