export function useLinks() {
  const route = useRoute()

  return computed(() => [{
    label: 'Docs',
    icon: 'i-lucide-square-play',
    to: '/getting-started',
    active: route.path.startsWith('/getting-started')
  }, {
    label: 'Components',
    icon: 'i-lucide-square-code',
    to: '/components',
    active: route.path.startsWith('/components')
  }, {
    label: 'Pro',
    icon: 'i-lucide-panels-top-left',
    to: '/pro',
    active: route.path.startsWith('/pro'),
    orientation: 'vertical',
    children: [{
      icon: 'i-lucide-sparkles',
      label: 'Features',
      description: 'Discover why Nuxt UI Pro is the perfect choice for your next project.',
      to: '/pro'
    }, {
      icon: 'i-lucide-credit-card',
      label: 'Pricing',
      description: 'Free in development, then purchase a license when you are ready to launch.',
      to: '/pro/pricing',
      active: route.path.startsWith('/pro/pricing')
    }, {
      icon: 'i-lucide-panels-top-left',
      label: 'Templates',
      description: 'Explore all the templates made with Nuxt UI Pro.',
      to: '/pro/templates'
    }, {
      icon: 'i-lucide-circle-check',
      label: 'Activate',
      description: 'Enable Nuxt UI Pro in your production projects.',
      to: '/pro/activate'
    }]
  }, {
    label: 'Figma',
    icon: 'i-lucide-figma',
    to: '/figma'
  }, {
    label: 'Roadmap',
    icon: 'i-lucide-map',
    to: '/roadmap'
  }, {
    label: 'Releases',
    icon: 'i-lucide-rocket',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }].filter(Boolean))
}
