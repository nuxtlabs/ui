<script setup lang="ts">
import theme from '#build/ui/button'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>

const items = [
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

const modelValue = ref()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      {{ modelValue }}
      <UTree v-model="modelValue" :items="items" />
      <UTree :items="items" multiple />
      <UTree :items="items" variant="ghost" />
      <UTree v-model="modelValue" :items="items" disabled />
      <UTree :items="items" color="error" />
      <UTree :items="items" color="neutral" />
    </div>

    <div class="flex gap-4 justify-center items-center">
      <UTree v-for="size in sizes" :key="size" :items="items" :size="size" />
    </div>
  </div>
</template>
