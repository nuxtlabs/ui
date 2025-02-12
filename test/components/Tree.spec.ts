import { describe, it, expect } from 'vitest'
import Tree, { type TreeProps, type TreeSlots, type TreeItem } from '../../src/runtime/components/Tree.vue'
import ComponentRender from '../component-render'
import theme from '#build/ui/tree'

describe('Tree', () => {
  const items: TreeItem[] = [
    {
      value: 'root',
      label: 'app',
      slot: 'app',
      children: [{
        label: 'composables',
        icon: 'i-lucide-folder',
        children: [
          { label: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
          { label: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' }
        ]
      }]
    },
    { value: 'app-vue', label: 'app.vue' },
    { value: 'nuxt-config-ts', label: 'nuxt.config.ts' }
  ]

  const sizes = Object.keys(theme.variants.size) as any
  const variants = Object.keys(theme.variants.variant) as any

  it.each([
    // Props
    ['with items', { props: { items } }],
    ['with modelValue', { props: { items, modelValue: items[0] } }],
    ['with defaultValue', { props: { items, defaultValue: items[0] } }],
    // Key mapping
    ['with valueKey', { props: { items, valueKey: 'label' } }],
    ['with labelKey', { props: { items, labelKey: 'value' } }],
    // Multiple
    ['with multiple', { props: { items, multiple: true } }],
    ['with multiple and modelValue', { props: { items, multiple: true, modelValue: [items[0], items[1]] } }],
    ['with multiple and defaultValue', { props: { items, multiple: true, defaultValue: [items[0], items[1]] } }],
    // Disabled
    ['with disabled', { props: { items, disabled: true } }],
    // Parent icon
    ['with parentIcon', { props: { items, parentIcon: 'i-lucide-folder' } }],
    ['with parentLeadingIcon', { props: { items, parentLeadingIcon: 'i-lucide-folder' } }],
    ['with parentTrailingIcon', { props: { items, parentTrailingIcon: 'i-lucide-folder' } }],
    // Icons
    ['with icon', { props: { items, icon: 'i-lucide-dot' } }],
    ['with leadingIcon', { props: { items, leadingIcon: 'i-lucide-dot' } }],
    ['with trailingIcon', { props: { items, trailingIcon: 'i-lucide-dot' } }],
    // Item properties
    ['with defaultOpen item', { props: { items: [{ label: 'Default Opened', defaultOpen: true, children: items }] } }],
    ['with disabled item', { props: { items: [{ label: 'Disabled item', disabled: true, children: items }] } }],
    ['with item icon', { props: { items: [{ label: 'Icon item', icon: 'i-lucide-folder', children: items }] } }],
    ['with item leadingIcon', { props: { items: [{ label: 'Leading item', leadingIcon: 'i-lucide-folder', children: items }] } }],
    ['with item trailingIcon', { props: { items: [{ label: 'Trailing item', trailingIcon: 'i-lucide-folder', children: items }] } }],
    // Style variants
    ...sizes.map((size: string) => [`with size ${size}`, { props: { items, size } }]),
    ...variants.map((variant: string) => [`with primary variant ${variant}`, { props: { items, variant } }]),
    ...variants.map((variant: string) => [`with neutral variant ${variant}`, { props: { items, variant, color: 'neutral' } }]),

    ['with as', { props: { items, as: 'div' } }],
    ['with class', { props: { items, class: 'some-class' } }],
    ['with ui', { props: { items, ui: { item: 'font-bold' } } }],
    // Slots
    ['with default slot', { slots: { default: () => 'default slot' } }],
    ['with item slot', { slots: { item: () => 'item slot' } }],
    ['with item-leading slot', { slots: { 'item-leading': () => 'leading slot' } }],
    ['with item-trailing slot', { slots: { 'item-trailing': () => 'trailing slot' } }],
    ['with dynamic slot', { slots: { app: () => 'dynamic slot' } }]
  ])('renders %s correctly', async (nameOrHtml: string, options: { props?: Partial<TreeProps<any>>, slots?: Partial<TreeSlots<any>> }) => {
    const html = await ComponentRender(nameOrHtml, options, Tree)
    expect(html).toMatchSnapshot()
  })
})
