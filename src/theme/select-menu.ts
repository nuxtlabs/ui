import { defu } from 'defu'
import type { ModuleOptions } from '../module'
import select from './select'

export default (options: Required<ModuleOptions>) => {
  return defu({
    slots: {
      input: 'border-b border-[var(--ui-border)]',
      clearIcon: 'shrink-0 text-[var(--ui-text-dimmed)]'
    },
    variants: {
      size: {
        xs: {
          clearIcon: 'size-3'
        },
        sm: {
          clearIcon: 'size-3.5'
        },
        md: {
          clearIcon: 'size-4'
        },
        lg: {
          clearIcon: 'size-4'
        },
        xl: {
          clearIcon: 'size-4.5'
        }
      }
    }
  }, select(options))
}
