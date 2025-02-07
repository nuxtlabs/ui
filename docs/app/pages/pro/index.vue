<script setup lang="ts">
import page from './index.yml'

useSeoMeta({
  title: page.title,
  ogTitle: page.title,
  description: page.description,
  ogDescription: page.description
})
</script>

<template>
  <div class="relative">
    <UPageHero
      :links="page.hero.links"
      class="relative"
      orientation="horizontal"
    >
      <template #title>
        <MDC :value="page.hero.title" unwrap="p" />
      </template>
      <template #description>
        <MDC :value="page.hero.description" unwrap="p" />
      </template>
      <template #top>
        <div class="absolute z-[-1] rounded-full bg-[var(--ui-primary)] blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80" />
        <StarsBg />
      </template>

      <PromotionalVideo />
    </UPageHero>

    <UPageSection
      v-bind="page.features"
      :ui="{ title: 'text-left', description: 'text-left' }"
    />

    <UPageCTA
      :description="page.authorQuote.quote"
      variant="soft"
      class="rounded-none"
      :ui="{ container: 'sm:py-12 lg:py-12 sm:gap-8', description: 'before:content-[open-quote] after:content-[close-quote]' }"
    >
      <UUser
        v-bind="page.authorQuote.user"
        size="xl"
        class="justify-center"
      />
    </UPageCTA>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      v-bind="section"
      orientation="horizontal"
    >
      <MDC :value="section.code" />
    </UPageSection>

    <UPageSection
      id="templates"
      v-bind="page.templates"
      class="overflow-hidden"
    >
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        :autoplay="{ delay: 3000 }"
        :items="page.templates.items"
        :ui="{ item: 'basis-1/2', container: 'py-2' }"
      >
        <UPageCard
          :to="item.to"
          :description="item.description"
          class="group"
          :ui="{ container: 'p-4 sm:p-4', title: 'flex items-center gap-1' }"
        >
          <template #title>
            <UIcon :name="item.icon" />
            <span>
              {{ item.title }}
            </span>
          </template>
          <img
            :src="item.image"
            :alt="item.title"
            class="rounded-lg grayscale group-hover:grayscale-0 transition-all duration-200 ease-in-out"
          >
        </UPageCard>
      </UCarousel>
    </UPageSection>

    <UPageSection
      id="pricing"
      v-bind="page.pricing"
    >
      <UContainer>
        <UPricingPlans
          class="mb-16"
          scale
        >
          <UPricingPlan
            v-for="(plan, index) in page.pricing.plans"
            :key="index"
            :title="plan.title"
            :description="plan.description"
            :price="plan.price"
            :billing-period="plan.billing_period"
            :billing-cycle="plan.billing_cycle"
            :highlight="plan.highlight"
            :scale="plan.highlight"
            variant="soft"
            :features="plan.features"
            :button="plan.button"
          />
        </UPricingPlans>
      </UContainer>
    </UPageSection>

    <UPageSection
      id="testimonials"
      v-bind="page.testimonials"
    >
      <UPageMarquee pause-on-hover>
        <img
          v-for="(logo, index) in page.logos"
          :key="index"
          v-bind="logo"
          class="h-6 shrink-0 max-w-[140px] filter invert dark:invert-0"
        >
      </UPageMarquee>
      <UContainer>
        <UPageColumns class="xl:columns-4">
          <UPageCard
            v-for="(testimonial, index) in page.testimonials.items"
            :key="index"
            variant="subtle"
            :description="testimonial.quote"
            :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
          >
            <template #footer>
              <UUser
                v-bind="testimonial.user"
                size="xl"
              />
            </template>
          </UPageCard>
        </UPageColumns>
      </UContainer>
    </UPageSection>

    <UPageSection
      id="faq"
      v-bind="page.faq"
      class="scroll-mt-[var(--header-height)]"
    >
      <UPageAccordion
        multiple
        :items="page.faq.items"
        class="max-w-4xl mx-auto"
      >
        <template #body="{ item }">
          <MDC
            :value="item.content"
            unwrap="p"
          />
        </template>
      </UPageAccordion>
    </UPageSection>

    <USeparator />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <div class="absolute rounded-full dark:bg-[var(--ui-primary)] blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />

      <StarsBg />
    </UPageCTA>
  </div>
</template>
