<script setup lang="ts">
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
  <div class="flex gap-4">
    <UTree v-model="modelValue" :items="items" />
    <UTree :items="items" variant="ghost" />
    <UTree :items="items" disabled />
    <UTree :items="items" color="error" />
    <UTree :items="items" color="neutral" />
  </div>
</template>
