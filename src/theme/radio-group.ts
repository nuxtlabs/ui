import type { ModuleOptions } from '../module'

export default (options: Required<ModuleOptions>) => ({
  slots: {
    root: 'relative',
    fieldset: '',
    legend: 'mb-1 block font-medium text-[var(--ui-text)]',
    item: 'flex items-start',
    itemWrapper: 'flex',
    base: 'rounded-full ring ring-inset ring-[var(--ui-border-accented)] focus-visible:outline-2 focus-visible:outline-offset-2',
    indicator: 'flex items-center justify-center size-full rounded-full after:bg-[var(--ui-bg)] after:rounded-full',
    container: 'flex items-center',
    wrapper: 'ms-2',
    label: 'block font-medium text-[var(--ui-text)]',
    description: 'text-[var(--ui-text-muted)]'
  },
  variants: {
    color: {
      ...Object.fromEntries((options.theme.colors || []).map((color: string) => [color, {
        base: `focus-visible:outline-[var(--ui-${color})]`,
        indicator: `bg-[var(--ui-${color})]`
      }])),
      neutral: {
        base: 'focus-visible:outline-[var(--ui-border-inverted)]',
        indicator: 'bg-[var(--ui-bg-inverted)]'
      }
    },
    variant: {
      radio: {},
      card: {
        base: 'ml-4',
        item: 'flex-row-reverse items-center justify-between border-2 border-[var(--ui-border-muted)] rounded-lg'
      },
      table: {
        item: 'border-[var(--ui-border-muted)]'
      }
    },
    orientation: {
      horizontal: {
        itemWrapper: 'flex-row',
        wrapper: 'me-2'
      },
      vertical: {
        itemWrapper: 'flex-col'
      }
    },
    size: {
      xs: {
        fieldset: 'gap-0.5',
        legend: 'text-xs',
        base: 'size-3',
        item: 'text-xs',
        container: 'h-4',
        indicator: 'after:size-1'
      },
      sm: {
        fieldset: 'gap-0.5',
        legend: 'text-xs',
        base: 'size-3.5',
        item: 'text-xs',
        container: 'h-4',
        indicator: 'after:size-1'
      },
      md: {
        fieldset: 'gap-1',
        legend: 'text-sm',
        base: 'size-4',
        item: 'text-sm',
        container: 'h-5',
        indicator: 'after:size-1.5'
      },
      lg: {
        fieldset: 'gap-1',
        legend: 'text-sm',
        base: 'size-4.5',
        item: 'text-sm',
        container: 'h-5',
        indicator: 'after:size-1.5'
      },
      xl: {
        fieldset: 'gap-1.5',
        legend: 'text-base',
        base: 'size-5',
        item: 'text-base',
        container: 'h-6',
        indicator: 'after:size-2'
      }
    },
    disabled: {
      true: {
        base: 'cursor-not-allowed opacity-75',
        label: 'cursor-not-allowed opacity-75'
      }
    },
    required: {
      true: {
        legend: 'after:content-[\'*\'] after:ms-0.5 after:text-[var(--ui-error)]'
      }
    }
  },
  compoundVariants: [
    { size: 'xs', variant: 'card', class: { item: 'p-2.5', itemWrapper: 'gap-2' } },
    { size: 'sm', variant: 'card', class: { item: 'p-3', itemWrapper: 'gap-2.5' } },
    { size: 'md', variant: 'card', class: { item: 'p-3.5', itemWrapper: 'gap-2.5' } },
    { size: 'lg', variant: 'card', class: { item: 'p-4', itemWrapper: 'gap-3.5' } },
    { size: 'xl', variant: 'card', class: { item: 'p-4.5', itemWrapper: 'gap-3.5' } },

    { size: 'xs', variant: 'table', class: { item: 'p-2.5', itemWrapper: 'gap-0' } },
    { size: 'sm', variant: 'table', class: { item: 'p-3', itemWrapper: 'gap-0' } },
    { size: 'md', variant: 'table', class: { item: 'p-3.5', itemWrapper: 'gap-0' } },
    { size: 'lg', variant: 'table', class: { item: 'p-4', itemWrapper: 'gap-0' } },
    { size: 'xl', variant: 'table', class: { item: 'p-4.5', itemWrapper: 'gap-0' } },

    { orientation: 'horizontal', variant: 'table', class: { item: 'first:rounded-l-lg last:rounded-r-lg not-first:not-last:border-x-2 first:border-l-2 border-y-2 last:border-r-2' } },
    { orientation: 'vertical', variant: 'table', class: { item: 'first:rounded-t-lg last:rounded-b-lg not-first:not-last:border-y-2 first:border-t-2 border-x-2 last:border-b-2' } },

    ...(options.theme.colors || []).map((color: string) => ({
      color,
      variant: 'card',
      class: {
        item: `data-[checked=true]:border-[var(--ui-${color})]`
      }
    })),

    {
      color: 'neutral',
      variant: 'card',
      class: {
        item: 'data-[checked=true]:border-[var(--ui-border-elevated)]'
      }
    },

    ...(options.theme.colors || []).map((color: string) => ({
      color,
      variant: 'table',
      class: {
        item: `data-[checked=true]:bg-[var(--ui-${color})]/20 data-[checked=true]:border-[var(--ui-${color})]/20`
      }
    }))
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    variant: 'radio'
  }
})
