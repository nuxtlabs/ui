export const useOverlayInstance = () => {
  const instanceApi = inject<{ close: () => void }>(`nuxt-ui.overlay-instance`)

  return instanceApi!
}
