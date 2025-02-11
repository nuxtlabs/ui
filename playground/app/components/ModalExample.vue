<script setup lang="ts">
import ModalExample2 from './ModalExample2.vue'

const props = defineProps<{
  count: number
}>()

const modalexample2 = useModal(ModalExample2, {
  attrs: {
    count: props.count
  }
})

const onOpenNested = () => {
  modalexample2.open()
}
const isOpen = ref(true)
</script>

<template>
  <UModal
    v-model:open="isOpen"
    :title="`This modal was opened programmatically ${count} times `"
  >
    <template #body>
      <UButton label="Open Modal" @click="onOpenNested" />
    </template>
    <template #footer>
      <UButton color="neutral" label="Close" />
    </template>
  </UModal>
</template>
