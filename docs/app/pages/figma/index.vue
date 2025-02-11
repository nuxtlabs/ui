<script setup lang="ts">
import page from '.figma.yml'
import { animate } from 'motion'

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const figmaWordPosition = document.querySelector('#figma')?.getBoundingClientRect()
  const nuxtWordPosition = document.querySelector('#nuxt')?.getBoundingClientRect()
  const initialScrollX = window.scrollX
  const initialScrollY = window.scrollY
  console.log('figma word absolute position', figmaWordPosition)
  console.log('nuxt word absolute position', nuxtWordPosition)
  if (figmaWordPosition && nuxtWordPosition) {
    animate('#cursor1', { left: Math.round(Math.random() * window.outerWidth), top: Math.round(Math.random() * window.outerHeight) }, { duration: 0.1 })
      .then(() => animate('#cursor1', { opacity: 1 }, { duration: 0.3 }))
      .then(() => {
        return animate('#cursor1', {
          left: Math.round(figmaWordPosition.left + initialScrollX + figmaWordPosition.width / 2),
          top: Math.round(figmaWordPosition.top + initialScrollY - figmaWordPosition.height / 4)
        }, { duration: 1.5, delay: 0.2, ease: 'easeInOut' })
      })
      .then(() => animate('#cursor1', { scale: 0.8 }, { duration: 0.1, ease: 'easeOut' }))
      .then(() => animate('#cursor1', { scale: 1 }, { duration: 0.1, ease: 'easeOut' }))
      .then(() => animate('#figma', { color: 'var(--ui-info)' }, { duration: 0.3, ease: 'easeOut' }))
      .then(() => animate('#cursor1', { left: Math.round(figmaWordPosition.left + initialScrollX + figmaWordPosition.width), top: Math.round(figmaWordPosition.top + initialScrollY) }, { duration: 0.6, ease: 'easeInOut' }))

    animate('#cursor2', { left: Math.round(Math.random() * window.outerWidth), top: Math.round(Math.random() * window.outerHeight) }, { duration: 0.1, delay: 0.6 })
      .then(() => animate('#cursor2', { opacity: 1 }, { duration: 0.3 }))
      .then(() => {
        return animate('#cursor2', {
          left: Math.round(nuxtWordPosition.left + initialScrollX + nuxtWordPosition.width / 2),
          top: Math.round(nuxtWordPosition.top + initialScrollY - nuxtWordPosition.height / 4)
        }, { duration: 1.5, delay: 0.2, ease: 'easeInOut' })
      })
      .then(() => animate('#cursor2', { scale: 0.8 }, { duration: 0.1, ease: 'easeOut' }))
      .then(() => animate('#cursor2', { scale: 1 }, { duration: 0.1, ease: 'easeOut' }))
      .then(() => animate('#nuxt', { color: 'var(--ui-primary)' }, { duration: 0.3, ease: 'easeOut' }))
      .then(() => animate('#cursor2', { left: Math.round(nuxtWordPosition.left + initialScrollX + nuxtWordPosition.width), top: Math.round(nuxtWordPosition.top + initialScrollY) }, { duration: 0.6, ease: 'easeInOut' }))
  }
})
</script>

<template>
  <div class="relative">
    <div id="cursor1" class="absolute z-10 pointer-events-none" :style="{ opacity: 0 }">
      <svg width="18" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
          fill="var(--ui-info)"
          stroke="var(--ui-info)"
        />
      </svg>
      <UBadge color="info" class="ml-2">
        Sarah
      </UBadge>
    </div>
    <div id="cursor2" class="absolute z-10 pointer-events-none" :style="{ opacity: 0 }">
      <svg width="18" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
          fill="var(--ui-success)"
          stroke="var(--ui-success)"
        />
      </svg>
      <UBadge color="success" class="ml-2">
        Sebastien
      </UBadge>
    </div>
    <UPageHero
      :links="page.hero.links"
      class="relative"
      :ui="{
        container: 'relative !pb-0'
      }"
    >
      <template #title>
        <MDC :value="page.hero.title" unwrap="p" />
      </template>
      <template #description>
        <MDC :value="page.hero.description" unwrap="p" />
      </template>
      <img src="/pro/figma/nuxt-ui-figma.png" alt="Screnshot of the Nuxt UI Figma design kit" class="w-full h-auto border border-(--ui-border) border-b-0">
      <div aria-hidden="true" class="absolute z-[-1] border-x border-(--ui-border) inset-0 mx-4 sm:mx-6 lg:mx-8" />
    </UPageHero>
    <UPageSection v-bind="page.features1" :ui="{ container: 'py-16 sm:py-16 lg:py-16', features: 'mt-0' }" class="border-y border-(--ui-border)" />
    <UPageCTA v-if="page.cta1" variant="naked" :ui="{ container: 'lg:grid-cols-0 !gap-0', wrapper: 'grid grid-cols-1 lg:grid-cols-2', description: 'lg:mt-0' }" orientation="horizontal" class="rounded-none">
      <template #title>
        <MDC :value="page.cta1.title" unwrap="p" />
      </template>
      <template #description>
        <MDC :value="page.cta1.description" unwrap="p" />
      </template>
    </UPageCTA>
    <UPageSection v-bind="page.section1" orientation="horizontal">
      <UTabs :items="page.section1.tabs" size="xs" variant="link" color="neutral">
        <template #content="{ item }">
          <NuxtImg
            :width="item.width"
            :height="item.height"
            :src="item.src"
            :alt="item.alt"
            class="w-full h-auto"
            lazy
          />
        </template>
      </UTabs>
    </UPageSection>
    <UPageSection v-bind="page.section2" orientation="horizontal">
      <NuxtImg
        v-if="page.section2.image"
        v-bind="page.section2.image"
        class="w-full h-auto"
        lazy
      />
    </UPageSection>
    <UPageSection v-bind="page.section3" orientation="horizontal">
      <NuxtImg
        v-if="page.section3.image"
        v-bind="page.section3.image"
        class="w-full h-auto"
        lazy
      />
    </UPageSection>
    <USeparator />
    <UPageSection
      v-bind="page.section4"
      orientation="vertical"
      :ui="{
        title: 'sm:text-left',
        description: 'sm:text-left',
        links: 'sm:justify-start',
        container: 'relative !pb-0',
        wrapper: 'sm:pl-8'
      }"
    >
      <template #description>
        <MDC :value="page.section4.description" unwrap="p" />
      </template>
      <div aria-hidden="true" class="absolute z-[-1] border-x border-(--ui-border) inset-0 mx-4 sm:mx-6 lg:mx-8" />
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start justify-center border border-(--ui-border) border-b-0 sm:divide-x divide-y lg:divide-y-0 divide-(--ui-border)">
        <li v-for="(step, index) in page?.section4.steps" :key="step.title" class="flex flex-col gap-y-4 justify-start group h-full p-4">
          <NuxtImg
            v-if="step.image"
            v-bind="step.image"
            class="rounded"
            lazy
          />
          <div>
            <h2 class="font-semibold inline-flex items-center gap-x-1">
              <UBadge :label="index + 1" size="sm" color="neutral" variant="subtle" class="rounded-full tabular-nums" /> {{ step.title }}
            </h2>
            <p class="text-(--ui-text-muted) text-sm">
              {{ step.description }}
            </p>
          </div>
        </li>
      </ul>
    </UPageSection>
    <UPageSection v-bind="page.features2" :ui="{ container: 'py-16 sm:py-16 lg:py-16', features: 'mt-0' }" class="border-y border-(--ui-border)" />
    <UPageSection
      v-if="page.pricing"
      :title="page.pricing.title"
      :description="page.pricing.description"
      orientation="vertical"
      :ui="{
        title: 'sm:text-left',
        description: 'sm:text-left',
        links: 'sm:justify-start',
        container: 'relative !pb-0',
        wrapper: 'sm:pl-8'
      }"
    >
      <div aria-hidden="true" class="absolute z-[-1] border-x border-(--ui-border) inset-0 mx-4 sm:mx-6 lg:mx-8" />
      <UPricingPlans compact>
        <UPricingPlan
          v-for="(plan, index) in page.pricing.plans"
          :key="index"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :billing-period="plan.billing_period"
          :billing-cycle="plan.billing_cycle"
          :highlight="plan.highlight"
          variant="outline"
          :features="plan.features"
          :button="plan.button"
          :ui="{ root: 'rounded-none' }"
        />
      </UPricingPlans>
    </UPageSection>
    <UPageCTA v-if="page.customers" :title="page.customers.title" :ui="{ title: '!text-base font-medium', container: 'sm:py-12 sm:gap-8' }" variant="outline" class="rounded-none">
      <UPageMarquee pause-on-hover :ui="{ root: '[--duration:40s]' }">
        <img
          v-for="(logo, index) in page.customers.items"
          :key="index"
          v-bind="logo"
          class="h-6 shrink-0 max-w-[140px] filter invert dark:invert-0"
        >
      </UPageMarquee>
    </UPageCTA>
    <UPageSection v-bind="page.faq" :ui="{ container: 'relative' }">
      <div aria-hidden="true" class="absolute z-[-1] border-x border-(--ui-border) inset-0 mx-4 sm:mx-6 lg:mx-8" />
      <UPageAccordion
        multiple
        :items="page.faq.items"
        class="max-w-4xl mx-auto"
      >
        <template #body="{ item }">
          <MDC :value="item.content" unwrap="p" />
        </template>
      </UPageAccordion>
    </UPageSection>
  </div>
</template>
