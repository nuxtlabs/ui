export default defineNuxtPlugin({
  enforce: 'post',
  setup() {
    const appConfig = useAppConfig()

    if (import.meta.client) {
      function updateColor(type: 'primary' | 'neutral') {
        const color = localStorage.getItem(`nuxt-ui-${type}`)
        if (color) {
          appConfig.ui.colors[type] = color
        }
      }

      updateColor('primary')
      updateColor('neutral')
    }

    if (import.meta.server) {
      useHead({
        script: [
          {
            innerHTML: `
            let html = document.querySelector('style#nuxt-ui-colors').innerHTML;

            if (localStorage.getItem('nuxt-ui-primary')) {
              const primaryColor = localStorage.getItem('nuxt-ui-primary');
              html = html.replace(
                /(--ui-color-primary-\\d{2,3}:\\s*var\\()--color-${appConfig.ui.colors.primary}-(\\d{2,3}\\))/g,
                \`$1--color-\${primaryColor}-$2\`
              );
            }
            if (localStorage.getItem('nuxt-ui-neutral')) {
              const neutralColor = localStorage.getItem('nuxt-ui-neutral');
              html = html.replace(
                /(--ui-color-neutral-\\d{2,3}:\\s*var\\()--color-${appConfig.ui.colors.neutral}-(\\d{2,3}\\))/g,
                \`$1--color-\${neutralColor}-$2\`
              );
            }

            document.querySelector('style#nuxt-ui-colors').innerHTML = html;
            `.replace(/\s+/g, ' '),
            type: 'text/javascript',
            tagPriority: -1
          }
        ]
      })
    }
  }
})
