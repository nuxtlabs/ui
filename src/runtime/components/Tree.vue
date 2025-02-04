<script lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import type { TreeRootProps, TreeRootEmits } from 'radix-vue'
import type { AppConfig } from '@nuxt/schema'
import _appConfig from '#build/app.config'
import theme from '#build/ui/tree'
import type { DynamicSlots, MaybeMultipleModelValue, MaybeMultipleModelValueEmit } from '../types/utils'

const appConfig = _appConfig as AppConfig & { ui: { tree: Partial<typeof theme> } }

const tree = tv({ extend: tv(theme), ...(appConfig.ui?.tree || {}) })

type TreeVariants = VariantProps<typeof tree>

export type TreeItem<ValueKey extends string = 'value', LabelKey extends string = 'label'> =
  { [K in ValueKey]?: string } &
  { [L in LabelKey]?: string } &
  {
    icon?: string
    trailingIcon?: string
    defaultOpen?: boolean
    disabled?: boolean
    slot?: string
    children?: TreeItem[]
  }

export interface TreeProps<T extends TreeItem<V, L>, M extends boolean = false, V extends string = 'value', L extends string = 'label'> extends Omit<TreeRootProps<T>, 'dir' | 'getKey' | 'multiple' | 'modelValue' | 'defaultValue' | 'items'> {
  color?: TreeVariants['color']
  size?: TreeVariants['size']
  variant?: TreeVariants['variant']
  /**
   * The key used to get the value from the item.
   * @defaultValue 'value'
   */
  valueKey?: V
  /**
   * The key used to get the label from the item.
   * @defaultValue 'label'
   */
  labelKey?: L

  parentIcon?: string
  parentTrailingIcon?: string

  childIcon?: string
  childTrailingIcon?: string

  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any

  items?: T[]
  modelValue?: Partial<MaybeMultipleModelValue<T, M>>
  defaultValue?: MaybeMultipleModelValue<T, M>
  multiple?: M & boolean

  class?: any
  ui?: Partial<typeof tree.slots>
}

export type TreeEmits<T, M extends boolean = false> = MaybeMultipleModelValueEmit<T, M> & Omit<TreeRootEmits, 'update:modelValue'>

type SlotProps<T> = (props: { item: T, index: number, level: number, hasChildren: boolean, expanded: boolean, selected: boolean }) => any

export type TreeSlots<T extends { slot?: string }> = {
  'item': SlotProps<T>
  'item-leading': SlotProps<T>
  'item-label': SlotProps<T>
  'item-trailing': SlotProps<T>
} & DynamicSlots<T, SlotProps<T>>
</script>

<script setup lang="ts" generic="T extends Record<string, any>, M extends boolean = false, V extends string = 'value', L extends string = 'label'">
import { computed } from 'vue'
import { TreeRoot, TreeItem as TreeItemComponent, useForwardPropsEmits } from 'radix-vue'
import { reactiveOmit } from '@vueuse/core'
import { get } from '../utils'
import UIcon from './Icon.vue'

const props = withDefaults(defineProps<TreeProps<T, M, V, L>>(), {
  labelKey: 'label' as never,
  valueKey: 'value' as never
})

const emits = defineEmits<TreeEmits<T, M>>()
const slots = defineSlots<TreeSlots<T>>()

const rootProps = useForwardPropsEmits(reactiveOmit(props, 'class', 'ui'), emits)
const selectedKeys = computed<Set<string>>(() => {
  return Array.isArray(props.modelValue)
    ? new Set(props.modelValue.map((value: TreeItem<V, L>) => getItemKey(value)))
    : new Set([getItemKey(props.modelValue as TreeItem<V, L>)])
})

const ui = computed(() => tree({
  variant: props.variant,
  color: props.color,
  size: props.size
}))

function getItemLabel(item: TreeItem) {
  return get(item, props.labelKey as string)
}

function getItemKey(item?: TreeItem) {
  return get(item, props.valueKey as string) ?? get(item, props.labelKey as string)
}

function getDefaultOpenedItems(item: TreeItem): string[] {
  const currentItem = item.defaultOpen ? item.value ?? item.label : null
  const childItems = item.children?.flatMap(getDefaultOpenedItems) ?? []
  return [currentItem, ...childItems].filter(Boolean) as string[]
}

const defaultOpenedItems = computed(() =>
  props.items?.flatMap(getDefaultOpenedItems)
)

function onItemToggle(item: T, event: Event) {
  if (item.disabled || props.disabled) event.preventDefault()
}
</script>

<template>
  <TreeRoot
    v-slot="{ flattenItems }"
    v-bind="rootProps"
    :class="ui.root({ class: [props.class, props.ui?.root] })"
    :get-key="getItemKey"
    :default-expanded="defaultOpenedItems"
  >
    <TreeItemComponent
      v-for="item in flattenItems"
      v-bind="item.bind"
      :key="item._id"
      #="{ isExpanded, isSelected }"
      :class="ui.item({ class: [props.ui?.item] })"
      :style="{ 'padding-left': `${item.level - 0.5}em` }"
      :data-disabled="item.value.disabled || disabled ? '' : undefined"
      :data-selected="selectedKeys.has(getItemKey(item.value))"
      :aria-label="item.value.label"
      @toggle="onItemToggle(item.value, $event)"
    >
      <slot :name="item.value.slot || 'item'" v-bind="{ item: item.value as T, index: item.index, level: item.level, hasChildren: item.hasChildren, expanded: isExpanded, selected: isSelected }">
        <slot :name="item.value.slot ? `${item.value.slot}-leading`: 'item-leading'" v-bind="{ item: item.value, index: item.index, level: item.level, hasChildren: item.hasChildren, expanded: isExpanded, selected: isSelected }">
          <UIcon v-if="item.value.icon" :name="item.value.icon" :class="ui.itemLeadingIcon({ class: props.ui?.itemLeadingIcon })" />
          <UIcon v-else-if="item.hasChildren && parentIcon" :name="parentIcon" :class="ui.itemLeadingIcon({ class: props.ui?.itemLeadingIcon })" />
          <UIcon v-else-if="!item.hasChildren && childIcon" :name="childIcon" :class="ui.itemLeadingIcon({ class: props.ui?.itemLeadingIcon })" />
        </slot>

        <span v-if="getItemLabel(item.value) || !!slots[item.value.slot ? `${item.value.slot}-label`: 'item-label']" :class="ui.itemLabel({ class: props.ui?.itemLabel })">
          <slot :name="item.value.slot ? `${item.value.slot}-label`: 'item-label'" v-bind="{ item: item.value, index: item.index, level: item.level, hasChildren: item.hasChildren, expanded: isExpanded, selected: isSelected }">
            {{ getItemLabel(item.value) }}
          </slot>
        </span>

        <slot :name="item.value.slot ? `${item.value.slot}-trailing`: 'item-trailing'" v-bind="{ item: item.value, index: item.index, level: item.level, hasChildren: item.hasChildren, expanded: isExpanded, selected: isSelected }">
          <UIcon v-if="item.value.trailingIcon" :name="item.value.trailingIcon" :class="ui.itemTrailingIcon({ class: props.ui?.itemTrailingIcon })" />
          <UIcon v-else-if="item.hasChildren && parentTrailingIcon" :name="parentTrailingIcon" :class="ui.itemTrailingIcon({ class: props.ui?.itemTrailingIcon })" />
          <UIcon v-else-if="!item.hasChildren && childTrailingIcon" :name="childTrailingIcon" :class="ui.itemTrailingIcon({ class: props.ui?.itemTrailingIcon })" />
        </slot>
      </slot>
    </TreeItemComponent>
  </TreeRoot>
</template>
