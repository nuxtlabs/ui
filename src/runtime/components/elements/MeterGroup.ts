import { h, cloneVNode, computed, ref, toRef, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import { useUI } from '../../composables/useUI'
import { mergeConfig, getSlotsChildren } from '../../utils'
import type { Strategy, MeterColors, MeterSize } from '../../types'
// @ts-expect-error
import appConfig from '#build/app.config'
import { meter, meterGroup } from '#ui/ui.config'

const meterConfig = mergeConfig<typeof meter>(appConfig.ui.strategy, appConfig.ui.meter, meter)
const meterGroupConfig = mergeConfig<typeof meterGroup>(appConfig.ui.strategy, appConfig.ui.meterGroup, meterGroup)

export default defineComponent({
  inheritAttrs: false,
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    size: {
      type: String as PropType<MeterSize>,
      default: () => meterConfig.default.size,
      validator (value: string) {
        return Object.keys(meterConfig.meter.bar.size).includes(value)
      }
    },
    indicator: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: undefined
    },
    ui: {
      type: Object as PropType<Partial<typeof meterGroupConfig & { strategy?: Strategy }>>,
      default: undefined
    }
  },
  setup (props, { slots }) {
      const { ui: meterGroupUi, attrs } = useUI('meterGroup', toRef(props, 'ui'), meterGroupConfig)
      const { ui: meterUi } = useUI('meter', undefined, meterConfig)

    // If there is no children, throw an expressive error.
    if (!slots.default) {
      throw new Error('Meter Group has no Meter children.')
    }

    // Normalize the min and max numbers, if these are inversed.
    const normalizedMin = computed(() => props.min > props.max ? props.max : props.min)
    const normalizedMax = computed(() => props.max < props.min ? props.min : props.max)

    const children = computed(() => getSlotsChildren(slots))

    const rounded = computed(() => {
      const roundedMap = {
        'rounded-none': { left: 'rounded-s-none', right: 'rounded-e-none' },
        'rounded-sm': { left: 'rounded-s-sm', right: 'rounded-e-sm' },
        rounded: { left: 'rounded-s', right: 'rounded-e' },
        'rounded-md': { left: 'rounded-s-md', right: 'rounded-e-md' },
        'rounded-lg': { left: 'rounded-s-lg', right: 'rounded-e-lg' },
        'rounded-xl': { left: 'rounded-s-xl', right: 'rounded-e-xl' },
        'rounded-2xl': { left: 'rounded-s-2xl', right: 'rounded-e-2xl' },
        'rounded-3xl': { left: 'rounded-s-3xl', right: 'rounded-e-3xl' },
        'rounded-full': { left: 'rounded-s-full', right: 'rounded-e-full' }
      }

      return roundedMap[meterGroupUi.value.rounded]
    })

    function clampPercent (value: number, min: number, max: number): number {
      if (min == max) {
        return value < min ? 0 : 100
      }

      if (min > max) {
        max = [min, min = max][0]
      }

      const percent = (value - min) / (max - min) * 100

      return Math.max(0, Math.min(100, percent))
    }

    // We have to store the labels outside to preserve reactivity later.
    const labels = ref([])

    const clones = computed(() => children.value.map((node, index) => {
      const vProps: any = {}

      vProps.style = { width: `${clampPercent(node.props.value, props.min, props.max)}%` }

      // Normalize the props to be the same on all groups
      vProps.size = props.size
      vProps.min = normalizedMin.value
      vProps.max = normalizedMax.value

      // Adjust the style of all meters, so they appear in a row.
      vProps.ui = node.props?.ui || {}
      vProps.ui.base = node.props?.ui?.base || ''
      vProps.ui.base += [
        node.props?.ui?.base,
        props.ui?.meter?.background || meterGroupUi.value.background,
        'transition-all'
      ].filter(Boolean).join(' ')

      // Override the background to make the bar appear "full"
      vProps.ui.meter = node.props?.ui?.meter || {}
      vProps.ui.meter.background = `bg-${node.props.color}-500 dark:bg-${node.props.color}-500`
      vProps.ui.meter.rounded = 'rounded-none'
      vProps.ui.meter.bar = node.props?.ui?.meter?.bar || {}

      if (index === 0) {
        vProps.ui.meter.rounded = `${rounded.value.left} rounded-e-none`
      }

      if (index === children.value.length - 1) {
        vProps.ui.meter.rounded = `${rounded.value.right} rounded-s-none`
      }

      // Move the labels out of the node so these can be checked later
      labels.value.push({
        has: Boolean(node.slots?.label || node.props.label),
        isSlot: Boolean(node.slots?.label),
        label: node.slots?.label ?? node.props.label
      })

      delete(node.slots)
      delete(node.props.indicator)
      delete(node.props.label)

      return cloneVNode(node, vProps)
    }))

    const baseClass = computed(() => {
      return twMerge(twJoin(
        meterGroupUi.value.base
      ), props.class)
    })

    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        meterGroupUi.value.wrapper,
        meterGroupUi.value.background,
        meterGroupUi.value.rounded,
        meterGroupUi.value.shadow,
        meterUi.value.meter.size[props.size]
      ), props.class)
    })

    const indicatorContainerClass = computed(() => {
      return twMerge(twJoin(
        meterUi.value.indicator.container
      ))
    })

    const indicatorClass = computed(() => {
      return twMerge(twJoin(
        meterUi.value.indicator.text,
        meterUi.value.indicator.size[props.size]
      ))
    })

    const percent = computed(() => {
      return Math.max(0, Math.max(clones.value.reduce((prev, node) => {
          return prev + clampPercent(node.props.value, props.min, props.max)
        }, 0)
      ))
    })

    const vNodeChildren = computed(() => {
      const vNodeSlots = [
        undefined,
        h('div', { class: wrapperClass.value }, clones.value),
        undefined
      ]

      if (props.indicator) {
        vNodeSlots[0] = h('div', { class: indicatorContainerClass.value },
          h('div', { class: indicatorClass.value, style: { width: `${percent.value}%` } }, Math.round(percent.value) + '%')
        )
      } else if (slots.indicator) {
        vNodeSlots[0] = h(slots.indicator({ percent }))
      }

      vNodeSlots[2] = h('ol', { class: 'list-disc list-inside' }, labels.value.map((label, key) => {
        if (label.has) {
          if (label.isSlot) {
            return h('li', label.label({ percent }))
          }

          const labelClass = computed(() => {
            return twMerge(twJoin(
              meterUi.value.label.base,
              meterUi.value.color[clones.value[key].props.color] ?? meterUi.value.label.color.replaceAll('{color}', clones.value[key].props.color),
              meterUi.value.label.size[props.size]
            ))
          })

          return h('li', { class: labelClass.value }, label.label)
        }
      }))

      return vNodeSlots
    })

    return () => h('div', { class: baseClass.value, ...attrs }, vNodeChildren.value)
  }
})
