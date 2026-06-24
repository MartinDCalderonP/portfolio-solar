interface CreateYouTubeEmbedParams {
  label: string
  videoId: string
}

const createYouTubeEmbed = ({
  label,
  videoId
}: CreateYouTubeEmbedParams): HTMLElement => {
  const element = document.createElement('lite-youtube')

  element.setAttribute('playlabel', label)
  element.setAttribute('videoid', videoId)
  element.style.width = '100%'

  return element
}

export { createYouTubeEmbed }
