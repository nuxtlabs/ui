<script lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import type { TreeRootProps, TreeRootEmits } from 'radix-vue'
import type { AppConfig } from '@nuxt/schema'
import _appConfig from '#build/app.config'
import theme from '#build/ui/tree'
import type { AvatarProps, ChipProps } from '../types'
import type { DynamicSlots } from '../types/utils'

const appConfig = _appConfig as AppConfig & { ui: { tree: Partial<typeof theme> } }

const tree = tv({ extend: tv(theme), ...(appConfig.ui?.tree || {}) })

type TreeVariants = VariantProps<typeof tree>

export interface TreeItem {
  value?: string
  label?: string
  icon?: string
  trailingIcon?: string
  avatar?: AvatarProps
  chip?: ChipProps
  defaultOpen?: boolean
  disabled?: boolean
  slot?: string
  children?: TreeItem[]
}

export interface TreeProps<T> extends Omit<TreeRootProps<T>, 'dir' | 'getKey'> {
  color?: TreeVariants['color']
  size?: TreeVariants['size']
  variant?: TreeVariants['variant']
  /**
   * The key used to get the value from the item.
   * @defaultValue 'value'
   */
  valueKey?: string
  /**
   * The key used to get the label from the item.
   * @defaultValue 'label'
   */
  labelKey?: string
  /**
   * The icon displayed when an item is selected.
   * @defaultValue appConfig.ui.icons.check
   */
  selectedIcon?: string
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
  ui?: Partial<typeof tree.slots>
}

export interface TreeEmits extends TreeRootEmits {}

type SlotProps<T> = (props: { item: T, index: number, level: number, hasChildren: boolean }) => any

export type TreeSlots<T extends { slot?: string }> = {
  'item': SlotProps<T>
  'item-leading': SlotProps<T>
  'item-label': SlotProps<T>
  'item-trailing': SlotProps<T>
} & DynamicSlots<T, SlotProps<T>>
</script>

<script setup lang="ts" generic="T extends TreeItem">
import { computed } from 'vue'
import { TreeRoot, TreeItem as TreeItemComponent, useForwardPropsEmits } from 'radix-vue'
import { reactiveOmit } from '@vueuse/core'
import { get } from '../utils'
import UIcon from './Icon.vue'
import UAvatar from './Avatar.vue'

const props = withDefaults(defineProps<TreeProps<T>>(), {
  labelKey: 'label',
  valueKey: 'value'
})
const emits = defineEmits<TreeEmits>()
const slots = defineSlots<TreeSlots<T>>()

const rootProps = useForwardPropsEmits(reactiveOmit(props, 'class', 'ui', 'modelValue'), emits)

const modelValue = defineModel<T | undefined>()

const ui = computed(() => tree({
  variant: props.variant,
  color: props.color,
  size: props.size
}))

function getItemLabel(item: TreeItem) {
  return get(item, props.labelKey)
}

function getItemKey(item: TreeItem) {
  return get(item, props.valueKey) ?? get(item, props.labelKey)
}

function getDefaultOpenedItems(item: TreeItem): string[] {
  const currentItem = item.defaultOpen ? item.value ?? item.label : null
  const childItems = item.children?.flatMap(getDefaultOpenedItems) ?? []
  return [currentItem, ...childItems].filter(Boolean) as string[]
}

const defaultOpenedItems = computed(() =>
  props.items?.flatMap(getDefaultOpenedItems)
)

function onUpdate(value?: Record<string, any>) {
  if (value?.disabled || props.disabled) return
  modelValue.value = value as T
}

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
    :model-value="modelValue"
    @update:model-value="onUpdate"
  >
    <TreeItemComponent
      v-for="item in flattenItems"
      v-bind="item.bind"
      :key="item._id"
      :class="ui.item({ class: [props.ui?.item] })"
      :style="{ 'padding-left': `${item.level - 0.5}em` }"
      :data-disabled="item.value.disabled || disabled ? '' : undefined"
      @toggle="onItemToggle(item.value, $event)"
    >
      <slot :name="item.value.slot || 'item'" v-bind="{ item: item.value as T, index: item.index, level: item.level, hasChildren: item.hasChildren }">
        <slot :name="item.value.slot ? `${item.value.slot}-leading`: 'item-leading'" v-bind="{ item: item.value, index: item.index, level: item.level, hasChildren: item.hasChildren }">
          <UIcon v-if="item.value.icon" :name="item.value.icon" :class="ui.itemLeadingIcon({ class: props.ui?.itemLeadingIcon })" />
          <UAvatar
            v-else-if="item.value.avatar"
            v-bind="item.value.avatar"
            :size="((props.ui?.itemLeadingAvatarSize || ui.itemLeadingAvatarSize()) as AvatarProps['size'])"
            :class="ui.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })"
          />
        </slot>

        <span v-if="getItemLabel(item.value) || !!slots[item.value.slot ? `${item.value.slot}-label`: 'item-label']" :class="ui.itemLabel({ class: props.ui?.itemLabel })">
          <slot :name="item.value.slot ? `${item.value.slot}-label`: 'item-label'" v-bind="{ item: item.value, index: item.index, level: item.level, hasChildren: item.hasChildren }">
            {{ getItemLabel(item.value) }}
          </slot>
        </span>

        <span v-if="item.value.trailingIcon" :class="ui.itemTrailing({ class: props.ui?.itemTrailing })">
          <slot :name="item.value.slot ? `${item.value.slot}-trailing`: 'item-trailing'" v-bind="{ item: item.value, index: item.index, level: item.level, hasChildren: item.hasChildren }" />
          <UIcon :name="item.value.trailingIcon" :class="ui.itemTrailingIcon({ class: props.ui?.itemTrailingIcon })" />
        </span>
      </slot>
    </TreeItemComponent>
  </TreeRoot>
</template>
