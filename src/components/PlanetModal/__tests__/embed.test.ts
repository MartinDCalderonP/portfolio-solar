import { createYouTubeEmbed } from '../embed'

describe('createYouTubeEmbed', () => {
  test('creates lite-youtube element with correct attributes', () => {
    const element = createYouTubeEmbed({
      label: 'My Song',
      videoId: 'abc123'
    })

    const { tagName, attributes, style } = element
    const playLabelAttribute = attributes.getNamedItem('playlabel')?.value
    const videoIdAttribute = attributes.getNamedItem('videoid')?.value

    expect(tagName).toBe('LITE-YOUTUBE')
    expect(playLabelAttribute).toBe('My Song')
    expect(style.width).toBe('100%')
    expect(videoIdAttribute).toBe('abc123')
  })
})
