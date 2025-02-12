<script setup lang="ts">
import theme from '#build/ui/button'
import type { TreeItem } from '#ui/types'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>

const items: TreeItem[] = [{
  label: 'Settings',
  defaultOpen: true,
  children: [{
    label: 'Organization',
    defaultOpen: true,
    children: [
      { label: 'Members' },
      { label: 'Profile' }
    ]
  }]
}]

const devItems: TreeItem[] = [
  {
    label: 'app',
    icon: 'i-lucide-folder',
    defaultOpen: true,
    disabled: false,
    children: [{
      label: 'composables',
      icon: 'i-lucide-folder',
      defaultOpen: true,
      children: [
        { label: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
        { label: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' }
      ]
    },
    {
      label: 'components',
      icon: 'i-lucide-folder',
      children: [
        {
          label: 'Home',
          icon: 'i-lucide-folder',
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
    <div class="flex justify-center gap-4">
      <UTree :items="items" parent-icon="i-lucide-chevron-right" icon="i-lucide-dot" :ui="{ itemLeadingIcon: 'group-data-[expanded]:rotate-90 transition-transform duration-200' }" />
      <UTree :items="items" parent-trailing-icon="i-lucide-chevron-left" trailing-icon="i-lucide-dot" :ui="{ itemTrailingIcon: 'group-data-[expanded]:-rotate-90 transition-transform duration-200' }" />

      <UTree :items="items">
        <template #item-leading="{ hasChildren, expanded }">
          <UIcon v-if="hasChildren && expanded" name="i-lucide-folder-open" />
          <UIcon v-else-if="hasChildren" name="i-lucide-folder" />
        </template>
      </UTree>
    </div>

    <div class="flex gap-4">
      <UTree v-model="modelValue" :default-value="modelValue" :items="devItems" />
      <UTree v-model="modelValues" :items="devItems" multiple @update:model-value="(payload: TreeItem[]) => payload" />
      <UTree :items="devItems" variant="link" />
      <UTree v-model="modelValue" :items="devItems" variant="link" disabled />
      <UTree :items="devItems" color="error" />
      <UTree :items="devItems" color="neutral" />
    </div>

    <div class="flex gap-4 justify-center w-full">
      <UTree v-for="size in sizes" :key="size" :items="devItems" :size="size" />
    </div>

    <!-- Typescript tests -->
    <template v-if="false">
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
    </template>
  </div>
</template>
