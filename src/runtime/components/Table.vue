<!-- eslint-disable vue/block-tag-newline -->
<script lang="ts">
import type { Ref } from 'vue'
import type { VariantProps } from 'tailwind-variants'
import type { AppConfig } from '@nuxt/schema'
import type { RowData } from '@tanstack/table-core'
import type {
  Row,
  ColumnDef,
  ColumnFiltersState,
  ColumnPinningState,
  RowSelectionState,
  SortingState,
  ExpandedState,
  VisibilityState,
  Updater,
  CellContext,
  HeaderContext,
  TableOptionsWithReactiveData
} from '@tanstack/vue-table'
import _appConfig from '#build/app.config'
import theme from '#build/ui/table'
import { tv } from '../utils/tv'

declare module '@tanstack/table-core' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    class?: {
      th?: string
      td?: string
    }
  }
}

const appConfigTable = _appConfig as AppConfig & { ui: { table: Partial<typeof theme> } }

const table = tv({ extend: tv(theme), ...(appConfigTable.ui?.table || {}) })

type TableVariants = VariantProps<typeof table>

export type TableColumn<T> = ColumnDef<T>

export type TableTanstackOptions<T> = Omit<TableOptionsWithReactiveData<T>, 'data' | 'columns' | 'getCoreRowModel'>

export interface TableData {
  [key: string]: any
}

export interface TableProps<T> {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  data?: T[]
  columns?: TableColumn<T>[]
  tanstackOptions?: TableTanstackOptions<T>
  caption?: string
  /**
   * Whether the table should have a sticky header.
   * @defaultValue false
   */
  sticky?: boolean
  /** Whether the table should be in loading state. */
  loading?: boolean
  loadingColor?: TableVariants['loadingColor']
  loadingAnimation?: TableVariants['loadingAnimation']
  class?: any
  ui?: Partial<typeof table.slots>
}

type DynamicHeaderSlots<T, K = keyof T> = Record<string, (props: HeaderContext<T, unknown>) => any> & Record<`${K extends string ? K : never}-header`, (props: HeaderContext<T, unknown>) => any>
type DynamicCellSlots<T, K = keyof T> = Record<string, (props: CellContext<T, unknown>) => any> & Record<`${K extends string ? K : never}-cell`, (props: CellContext<T, unknown>) => any>

export type TableSlots<T> = {
  expanded: (props: { row: Row<T> }) => any
  empty: (props?: {}) => any
  caption: (props?: {}) => any
} & DynamicHeaderSlots<T> & DynamicCellSlots<T>

</script>

<script setup lang="ts" generic="T extends TableData">
import { computed } from 'vue'
import { defu } from 'defu'
import { Primitive } from 'reka-ui'
import { FlexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, getExpandedRowModel, getPaginationRowModel, useVueTable } from '@tanstack/vue-table'
import { upperFirst } from 'scule'
import { useLocale } from '../composables/useLocale'

const props = defineProps<TableProps<T>>()
defineSlots<TableSlots<T>>()

const { t } = useLocale()

const data = computed(() => props.data ?? [])
const columns = computed<TableColumn<T>[]>(() => props.columns ?? Object.keys(data.value[0] ?? {}).map((accessorKey: string) => ({ accessorKey, header: upperFirst(accessorKey) })))

const ui = computed(() => table({
  sticky: props.sticky,
  loading: props.loading,
  loadingColor: props.loadingColor,
  loadingAnimation: props.loadingAnimation
}))

const globalFilterState = defineModel<string>('globalFilter', { default: undefined })
const columnFiltersState = defineModel<ColumnFiltersState>('columnFilters', { default: [] })
const columnVisibilityState = defineModel<VisibilityState>('columnVisibility', { default: {} })
const columnPinningState = defineModel<ColumnPinningState>('columnPinning', { default: {} })
const rowSelectionState = defineModel<RowSelectionState>('rowSelection', { default: {} })
const sortingState = defineModel<SortingState>('sorting', { default: [] })
const expandedState = defineModel<ExpandedState>('expanded', { default: {} })

const tableApi = useVueTable(defu(props.tanstackOptions, {
  data,
  columns: columns.value,
  getCoreRowModel: getCoreRowModel(),
  onGlobalFilterChange: (updaterOrValue: any) => valueUpdater(updaterOrValue, globalFilterState),
  getFilteredRowModel: getFilteredRowModel(),
  onColumnFiltersChange: (updaterOrValue: Updater<ColumnFiltersState>) => valueUpdater(updaterOrValue, columnFiltersState),
  onColumnVisibilityChange: (updaterOrValue: Updater<VisibilityState>) => valueUpdater(updaterOrValue, columnVisibilityState),
  onColumnPinningChange: (updaterOrValue: Updater<ColumnPinningState>) => valueUpdater(updaterOrValue, columnPinningState),
  onRowSelectionChange: (updaterOrValue: Updater<RowSelectionState>) => valueUpdater(updaterOrValue, rowSelectionState),
  getSortedRowModel: getSortedRowModel(),
  onSortingChange: (updaterOrValue: Updater<SortingState>) => valueUpdater(updaterOrValue, sortingState),
  getExpandedRowModel: getExpandedRowModel(),
  onExpandedChange: (updaterOrValue: Updater<ExpandedState>) => valueUpdater(updaterOrValue, expandedState),
  getPaginationRowModel: getPaginationRowModel(),
  state: {
    get globalFilter() {
      return globalFilterState.value
    },
    get columnFilters() {
      return columnFiltersState.value
    },
    get columnVisibility() {
      return columnVisibilityState.value
    },
    get columnPinning() {
      return columnPinningState.value
    },
    get expanded() {
      return expandedState.value
    },
    get rowSelection() {
      return rowSelectionState.value
    },
    get sorting() {
      return sortingState.value
    }
  }
}))

function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value = typeof updaterOrValue === 'function' ? updaterOrValue(ref.value) : updaterOrValue
}

defineExpose({
  tableApi
})
</script>

<template>
  <Primitive :as="as" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <table :class="ui.base({ class: [props.ui?.base] })">
      <caption v-if="caption" :class="ui.caption({ class: [props.ui?.caption] })">
        <slot name="caption">
          {{ caption }}
        </slot>
      </caption>

      <thead :class="ui.thead({ class: [props.ui?.thead] })">
        <tr v-for="headerGroup in tableApi.getHeaderGroups()" :key="headerGroup.id" :class="ui.tr({ class: [props.ui?.tr] })">
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :data-pinned="header.column.getIsPinned()"
            :class="ui.th({ class: [props.ui?.th, header.column.columnDef.meta?.class?.th], pinned: !!header.column.getIsPinned() })"
          >
            <slot :name="`${header.id}-header`" v-bind="header.getContext()">
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
            </slot>
          </th>
        </tr>
      </thead>

      <tbody :class="ui.tbody({ class: [props.ui?.tbody] })">
        <template v-if="tableApi.getRowModel().rows?.length">
          <template v-for="row in tableApi.getRowModel().rows" :key="row.id">
            <tr :data-selected="row.getIsSelected()" :data-expanded="row.getIsExpanded()" :class="ui.tr({ class: [props.ui?.tr] })">
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                :data-pinned="cell.column.getIsPinned()"
                :class="ui.td({ class: [props.ui?.td, cell.column.columnDef.meta?.class?.td], pinned: !!cell.column.getIsPinned() })"
              >
                <slot :name="`${cell.column.id}-cell`" v-bind="cell.getContext()">
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </slot>
              </td>
            </tr>
            <tr v-if="row.getIsExpanded()" :class="ui.tr({ class: [props.ui?.tr] })">
              <td :colspan="row.getAllCells().length" :class="ui.td({ class: [props.ui?.td] })">
                <slot name="expanded" :row="row" />
              </td>
            </tr>
          </template>
        </template>

        <tr v-else :class="ui.tr({ class: [props.ui?.tr] })">
          <td :colspan="columns?.length" :class="ui.empty({ class: props.ui?.empty })">
            <slot name="empty">
              {{ t('table.noData') }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </Primitive>
</template>
