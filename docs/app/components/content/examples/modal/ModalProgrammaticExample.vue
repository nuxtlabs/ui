<script setup lang="ts">
import { LazyModalExample } from '#components'

const count = ref(0)

const toast = useToast()
const modal = useOverlayInstance(LazyModalExample, {
  attrs: {
    description: 'And you can even provide a description!',
    onSuccess() {
      toast.add({
        title: 'Success !',
        id: 'modal-success'
      })
    }
  }
})

function open() {
  count.value++

  modal.open({
    count: count.value
  })
}
</script>

<template>
  <UButton label="Open" color="neutral" variant="subtle" @click="open" />
</template>
