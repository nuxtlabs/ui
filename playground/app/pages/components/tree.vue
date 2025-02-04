<script setup lang="ts">
import theme from '#build/ui/button'
import type { TreeItem } from '#ui/types'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>

const items: TreeItem[] = [
  {
    label: 'app',
    icon: 'lucide:folder',
    defaultOpen: true,
    children: [{
      label: 'composables',
      icon: 'lucide:folder',
      defaultOpen: true,
      children: [
        { label: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
        { label: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' }
      ]
    },
    {
      label: 'components',
      icon: 'lucide:folder',
      children: [
        {
          label: 'Home',
          icon: 'lucide:folder',
          children: [
            { label: 'Card.vue', icon: 'vscode-icons:file-type-vue' },
            { label: 'Button.vue', icon: 'vscode-icons:file-type-vue' }
          ]
        }
      ]
    }]
  },
  { label: 'app.vue', icon: 'vscode-icons:file-type-vue' },
  { label: 'nuxt.config.ts', icon: 'vscode-icons:file-type-nuxt' }
]

const itemsWithMappedId = [
  { id: 'id', title: 'hello' },
  { id: 'id2', title: 'there' },
  { id: 'id3', title: 'obiwan kenobi' }
]

const modelValue = ref<TreeItem>()
const modelValues = ref<TreeItem[]>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <UTree :model-value="modelValue" :default-value="modelValue" :items="items" />
      <UTree v-model="modelValues" :items="items" multiple @update:model-value="(payload: TreeItem[]) => payload" />
      <UTree :items="items" variant="ghost" />
      <UTree v-model="modelValue" :items="items" disabled />
      <UTree :items="items" color="error" />
      <UTree :items="items" color="neutral" />
    </div>

    <div class="flex gap-4 justify-center items-center">
      <UTree v-for="size in sizes" :key="size" :items="items" :size="size" />
    </div>
    <!-- Typescript tests -->
    <div class="hidden">
      <!-- @vue-expect-error - multiple props should type modelValue to array.  -->
      <UTree :model-value="modelValue" :items="items" multiple />
      <!-- @vue-expect-error - multiple props should type defaultValue to array.  -->
      <UTree :default-value="modelValue" :items="items" multiple />
      <!-- @vue-expect-error - multiple props should type @update:modelValue to array.  -->
      <UTree :items="items" multiple @update:model-value="(payload: TreeItem) => payload" />
      <!-- @vue-expect-error - default should type modelValue to single item.  -->
      <UTree :model-value="modelValues" :items="items" />
      <!-- @vue-expect-error - default should type defaultValue to single item.  -->
      <UTree :default-value="modelValues" :items="items" />
      <!-- @vue-expect-error - default should type @update:modelValue to single item.  -->
      <UTree :items="items" @update:model-value="(payload: TreeItem[]) => payload" />

      <!-- @vue-expect-error - value key should type v-model.  -->
      <UTree v-model="modelValue" :items="itemsWithMappedId" value-key="id" />
      <!-- @vue-expect-error - label key should type v-model.  -->
      <UTree v-model="modelValue" :items="itemsWithMappedId" label-key="title" />
    </div>
  </div>
</template>
