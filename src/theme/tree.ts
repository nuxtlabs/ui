import type { ModuleOptions } from '../module'

export default (options: Required<ModuleOptions>) => ({
  slots: {
    root: 'relative',
    item: [
      'group relative w-full flex items-center select-none rounded-[calc(var(--ui-radius)*1.5)] data-disabled:cursor-not-allowed data-disabled:opacity-75 text-[var(--ui-text)] data-disabled:bg-transparent data-disabled:text-[var(--ui-text-elevated)] outline-none',
      options.theme.transitions && 'transition-colors before:transition-colors'
    ],
    itemLeadingIcon: 'shrink-0',
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
      ghost: {
        item: 'hover:bg-[var(--ui-bg-elevated)] hover:text-[var(--ui-text-highlighted)]'
      },
      link: {
        item: 'hover:text-[var(--ui-text-highlighted)]'
      }
    },
    size: {
      xs: {
        root: 'text-xs',
        item: 'p-0.75 gap-1',
        itemLeadingIcon: 'size-3',
        itemTrailingIcon: 'size-3'
      },
      sm: {
        root: 'text-xs',
        item: 'p-0.75 gap-1.5',
        itemLeadingIcon: 'size-4.5',
        itemTrailingIcon: 'size-4.5'
      },
      md: {
        root: 'text-sm',
        item: 'p-1 gap-1.5',
        itemLeadingIcon: 'size-4',
        itemTrailingIcon: 'size-4'
      },
      lg: {
        root: 'text-sm',
        item: 'p-1.25 gap-1.5',
        itemLeadingIcon: 'size-4.5',
        itemTrailingIcon: 'size-4.5'
      },
      xl: {
        root: 'text-base',
        item: 'p-1.25 gap-1.5',
        itemLeadingIcon: 'size-5',
        itemTrailingIcon: 'size-5'
      }
    }
  },
  compoundVariants: [
    ...(options.theme.colors || []).map((color: string) => ({
      color,
      variant: 'ghost',
      class: {
        item: `data-[selected]:bg-[var(--ui-${color})]/10 data-[selected]:text-[var(--ui-${color})]`
      }
    })),
    {
      color: 'neutral', variant: 'ghost',
      class: {
        item: 'data-[selected]:bg-[var(--ui-bg-elevated)]/50 data-[selected]:text-[var(--ui-text-highlighted)]'
      }
    },
    ...(options.theme.colors || []).map((color: string) => ({
      color,
      variant: 'link',
      class: {
        item: `data-[selected]:text-[var(--ui-${color})]`
      }
    })),
    {
      color: 'neutral', variant: 'link',
      class: {
        item: 'data-[selected]:text-[var(--ui-text-highlighted)]'
      }
    }

  ],
  defaultVariants: {
    color: 'primary',
    variant: 'link',
    size: 'md'
  }
})
