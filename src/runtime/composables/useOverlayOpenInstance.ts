export const useOverlayOpenInstance = () => {
  const instanceApi = inject<{ close: () => void }>(`nuxt-ui.overlay-instance`)

  return instanceApi!
}
