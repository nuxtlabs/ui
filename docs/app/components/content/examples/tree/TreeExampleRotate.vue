<script setup lang="ts">
const items = [
  {
    label: 'app',
    defaultOpen: true,
    children: [{
      label: 'composables',
      children: [
        { label: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
        { label: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' }
      ]
    },
    {
      label: 'components',
      children: [
        {
          label: 'Home',
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
  <UTree :items="items" parent-icon="lucide:chevron-right" :ui="{ itemLeadingIcon: 'group-data-[expanded]:rotate-90 transition-transform duration-200' }" />
</template>
