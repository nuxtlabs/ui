<script setup lang="ts">
const items = [
  {
    label: 'app',
    icon: 'lucide:folder',
    defaultOpen: true,
    children: [{
      label: 'composables',
      icon: 'lucide:folder',
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
</script>

<template>
  <UTree :items="items">
    <template #item-leading="{ hasChildren, expanded }">
      <UIcon v-if="hasChildren && expanded" name="lucide:folder-open" />
      <UIcon v-else-if="hasChildren" name="lucide:folder" />
    </template>
  </UTree>
</template>
