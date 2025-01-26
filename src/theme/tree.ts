import type { ModuleOptions } from '../module'

export default (options: Required<ModuleOptions>) => ({
  slots: {
    root: 'relative',
    item: [
      'group relative w-full flex items-center select-none rounded-[calc(var(--ui-radius)*1.5)] data-disabled:cursor-not-allowed data-disabled:opacity-75 text-[var(--ui-text)] data-disabled:bg-transparent data-disabled:text-[var(--ui-text-elevated)] outline-none',
      options.theme.transitions && 'transition-colors before:transition-colors'
    ],
    itemLeadingIcon: 'shrink-0',
    itemLeadingAvatar: 'shrink-0',
    itemLeadingAvatarSize: '',
    itemTrailing: 'ms-auto inline-flex',
    itemTrailingIcon: 'shrink-0',
    itemLabel: 'truncate'
  },
  variants: {
    color: {
      ...Object.fromEntries((options.theme.colors || []).map((color: string) => [color, `focus-visible:ring-2 focus-visible:ring-[var(--ui-${color})]`])),
      neutral: ''
    },

    variant: {
      ghost: '',
      link: ''
    },
    size: {
      xs: {
        label: 'p-1 text-xs gap-1',
        item: 'p-1 text-xs gap-1',
        itemLeadingIcon: 'size-4',
        itemLeadingAvatarSize: '3xs',
        itemTrailingIcon: 'size-4'
      },
      sm: {
        label: 'p-1.5 text-xs gap-1.5',
        item: 'p-1.5 text-xs gap-1.5',
        itemLeadingIcon: 'size-4',
        itemLeadingAvatarSize: '3xs',
        itemTrailingIcon: 'size-4'
      },
      md: {
        label: 'p-1.5 text-sm gap-1.5',
        item: 'p-1.5 text-sm gap-1.5',
        itemLeadingIcon: 'size-5',
        itemLeadingAvatarSize: '2xs',
        itemTrailingIcon: 'size-5'
      },
      lg: {
        label: 'p-2 text-sm gap-2',
        item: 'p-2 text-sm gap-2',
        itemLeadingIcon: 'size-5',
        itemLeadingAvatarSize: '2xs',
        itemTrailingIcon: 'size-5'
      },
      xl: {
        item: 'p-2 text-base gap-2',
        itemLeadingIcon: 'size-6',
        itemLeadingAvatarSize: 'xs',
        itemTrailingIcon: 'size-6'
      }
    }
  },
  compoundVariants: [
    ...(options.theme.colors || []).map((color: string) => ({
      color,
      variant: 'ghost',
      class: {
        item: `hover:bg-[var(--ui-${color})]/10 focus:bg-[var(--ui-${color})]/10 focus:text-[var(--ui-${color})] hover:text-[var(--ui-text-highlighted)]`
      }
    })),
    {
      color: 'neutral', variant: 'ghost',
      class: {
        item: 'hover:bg-[var(--ui-bg-elevated)]/50 focus:bg-[var(--ui-bg-elevated)]/50 hover:text-[var(--ui-text-highlighted)] focus:text-[var(--ui-text-highlighted)]'
      }
    },
    ...(options.theme.colors || []).map((color: string) => ({
      color,
      variant: 'link',
      class: {
        item: `focus:text-[var(--ui-${color})] hover:text-[var(--ui-text-highlighted)]`
      }
    })),
    {
      color: 'neutral', variant: 'link',
      class: {
        item: 'hover:text-[var(--ui-text-highlighted)] focus:text-[var(--ui-text-highlighted)]'
      }
    }

  ],
  defaultVariants: {
    color: 'primary',
    variant: 'link',
    size: 'md'
  }
})
