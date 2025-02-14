<script setup lang="ts">
import { LazySlideoverExample } from '#components'

const count = ref(0)

const toast = useToast()
const slideover = useOverlay().create(LazySlideoverExample, {
  attrs: {
    title: 'Slideover',
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

  slideover.open({
    count: count.value

  })
}
</script>

<template>
  <UButton label="Open" color="neutral" variant="subtle" @click="open" />
</template>
