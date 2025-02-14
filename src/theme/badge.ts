import type { ModuleOptions } from '../module'
import { buttonGroupVariant } from './button-group'

export default (options: Required<ModuleOptions>) => ({
  slots: {
    base: 'font-medium inline-flex items-center',
    label: 'truncate',
    leadingIcon: 'shrink-0',
    leadingAvatar: 'shrink-0',
    leadingAvatarSize: '',
    trailingIcon: 'shrink-0'
  },
  variants: {
    ...buttonGroupVariant,
    color: {
      ...Object.fromEntries((options.theme.colors || []).map((color: string) => [color, ''])),
      neutral: ''
    },
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: ''
    },
    size: {
      xs: {
        base: 'text-[8px]/3 px-1 py-0.5 gap-1 rounded-[calc(var(--ui-radius))]',
        leadingIcon: 'size-3',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-3'
      },
      sm: {
        base: 'text-[10px]/3 px-1.5 py-1 gap-1 rounded-[calc(var(--ui-radius))]',
        leadingIcon: 'size-3',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-3'
      },
      md: {
        base: 'text-xs px-2 py-1 gap-1 rounded-[calc(var(--ui-radius)*1.5)]',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-4'
      },
      lg: {
        base: 'text-sm px-2 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-5'
      },
      xl: {
        base: 'text-base px-2.5 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]',
        leadingIcon: 'size-6',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-6'
      }
    }
  },
  compoundVariants: [...(options.theme.colors || []).map((color: string) => ({
    color,
    variant: 'solid',
    class: `bg-(--ui-${color}) text-(--ui-bg)`
  })), ...(options.theme.colors || []).map((color: string) => ({
    color,
    variant: 'outline',
    class: `text-(--ui-${color}) ring ring-inset ring-(--ui-${color})/50`
  })), ...(options.theme.colors || []).map((color: string) => ({
    color,
    variant: 'soft',
    class: `bg-(--ui-${color})/10 text-(--ui-${color})`
  })), ...(options.theme.colors || []).map((color: string) => ({
    color,
    variant: 'subtle',
    class: `bg-(--ui-${color})/10 text-(--ui-${color}) ring ring-inset ring-(--ui-${color})/25`
  })), {
    color: 'neutral',
    variant: 'solid',
    class: 'text-(--ui-bg) bg-(--ui-bg-inverted)'
  }, {
    color: 'neutral',
    variant: 'outline',
    class: 'ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg)'
  }, {
    color: 'neutral',
    variant: 'soft',
    class: 'text-(--ui-text) bg-(--ui-bg-elevated)'
  }, {
    color: 'neutral',
    variant: 'subtle',
    class: 'ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg-elevated)'
  }],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    size: 'md'
  }
})
