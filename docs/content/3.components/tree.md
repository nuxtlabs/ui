---
description: A tree view component to display and interact with hierarchical data structures.
links:
  - label: Tree
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/components/tree.html
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Tree.vue
navigation.badge: New
---

## Usage

### Items
Use the `items` prop as an array of objects with the following properties:
- `value?: string`{lang="ts-type"} - Unique identifier for the item
- `label?: string`{lang="ts-type"} - Display text for the item
- `icon?: string`{lang="ts-type"} - Icon to display before the label
- `leadingIcon?: string`{lang="ts-type"} - Alternative icon before the label
- `trailingIcon?: string`{lang="ts-type"} - Icon to display after the label
- `disabled?: boolean`{lang="ts-type"} - Whether the item is disabled
- `defaultOpen?: boolean`{lang="ts-type"} - Whether the item is expanded by default
- `children?: TreeItem[]`{lang="ts-type"} - Nested items
- [`slot?: string`{lang="ts-type"}](#with-custom-slot) - Custom slot name for item content

::note
A unique identifier is required for each item. The component will use the `value` prop as identifier, falling back to `label` if `value` is not provided. One of these must be provided for the component to work properly.
::

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
props:
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultOpen: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'vscode-icons:file-type-typescript'
            - label: 'useUser.ts'
              icon: 'vscode-icons:file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'vscode-icons:file-type-vue'
                - label: 'Button.vue'
                  icon: 'vscode-icons:file-type-vue'
    - label: 'app.vue'
      icon: 'vscode-icons:file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'vscode-icons:file-type-nuxt'
---
::

### Color
Use the `color` prop to change the color of the Tree.

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
props:
  color: info
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultOpen: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'vscode-icons:file-type-typescript'
            - label: 'useUser.ts'
              icon: 'vscode-icons:file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'vscode-icons:file-type-vue'
                - label: 'Button.vue'
                  icon: 'vscode-icons:file-type-vue'
    - label: 'app.vue'
      icon: 'vscode-icons:file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'vscode-icons:file-type-nuxt'
---
::

### Variant
Use the `variant` prop to change the variant of the Tree.

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
props:
  variant: link
  color: info
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultOpen: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'vscode-icons:file-type-typescript'
            - label: 'useUser.ts'
              icon: 'vscode-icons:file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'vscode-icons:file-type-vue'
                - label: 'Button.vue'
                  icon: 'vscode-icons:file-type-vue'
    - label: 'app.vue'
      icon: 'vscode-icons:file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'vscode-icons:file-type-nuxt'
---
::

### Size
Use the `size` prop to change the size of the Tree.

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
props:
  size: md
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultOpen: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'vscode-icons:file-type-typescript'
            - label: 'useUser.ts'
              icon: 'vscode-icons:file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'vscode-icons:file-type-vue'
                - label: 'Button.vue'
                  icon: 'vscode-icons:file-type-vue'
    - label: 'app.vue'
      icon: 'vscode-icons:file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'vscode-icons:file-type-nuxt'
---
::


### Multiple
Use the `multiple` prop to allow multiple item selections.

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
props:
  multiple: true
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultOpen: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'vscode-icons:file-type-typescript'
            - label: 'useUser.ts'
              icon: 'vscode-icons:file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'vscode-icons:file-type-vue'
                - label: 'Button.vue'
                  icon: 'vscode-icons:file-type-vue'
    - label: 'app.vue'
      icon: 'vscode-icons:file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'vscode-icons:file-type-nuxt'
---
::

### Disabled
Use the `disabled` prop to disable the entire tree component. This will prevent any user interaction with the tree.

::note
You can also disable individual items using `item.disabled`.
::

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
props:
  disabled: true
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultOpen: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'vscode-icons:file-type-typescript'
            - label: 'useUser.ts'
              icon: 'vscode-icons:file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'vscode-icons:file-type-vue'
                - label: 'Button.vue'
                  icon: 'vscode-icons:file-type-vue'
    - label: 'app.vue'
      icon: 'vscode-icons:file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'vscode-icons:file-type-nuxt'
---
::

### Icon
Use `icon`, `leadingIcon` or `trailingIcon` to set the default icons for nodes. For parent nodes, use `parentIcon`, `parentLeadingIcon` or `parentTrailingIcon`.

::note
If an icon is specified for an item, it will always take precedence over these props.
::

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
props:
  icon: i-lucide-dot
  trailingIcon: ''
  parentIcon: i-lucide-folder
  parentTrailingIcon: ''
  items:
    - label: 'app'
      defaultOpen: true
      children:
        - label: 'composables'
          children:
            - label: 'useAuth.ts'
            - label: 'useUser.ts'
        - label: 'components'
          children:
            - label: 'Home'
              children:
                - label: 'Card.vue'
                - label: 'Button.vue'
    - label: 'app.vue'
    - label: 'nuxt.config.ts'
---
::

## Examples

### With rotating icon
You can animate the parent icon using the `ui` prop.

::component-example
---
name: 'tree-example-rotate'
collapse: true
---
::

### With expand icon
You can change the icon based on the item state using slots.

::component-example
---
name: 'tree-example-expand'
collapse: true
---
::

### With custom slot

Use the `item.slot` property to customize a specific item.

::component-example
---
name: 'tree-example-custom-slot'
collapse: true
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme
