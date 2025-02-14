<script setup lang="ts">
const items = [
  {
    label: 'app',
    slot: 'app',
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
  <UTree :items="items">
    <template #app="{ item }">
      <p class="italic font-bold">
        {{ item.label }}
      </p>
    </template>
  </UTree>
</template>
