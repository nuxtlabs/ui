<script lang="ts" setup>
import ModelExample2 from './ModalExample2.vue'

const modal = useModal()

const onOpenNested = () => {
  modal.open(ModelExample2, {
    description: 'Nested',

    dismissible: false
  })
}
</script>

<template>
  <div>
    asdf
  </div>
</template>
