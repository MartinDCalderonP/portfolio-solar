import { createLinkElement, getHostConfig, isRepoUrl } from '../links'

describe('isRepoUrl', () => {
  const VALID_REPO_URLS = [
    'https://github.com/user/repo',
    'https://github.com/org/project',
    'https://github.com/a/b'
  ]

  const INVALID_REPO_URLS = [
    'https://github.com/user',
    'https://github.com/',
    'not-a-url',
    '',
    'https://google.com'
  ]

  test.each(VALID_REPO_URLS)('returns true for repo URL: %s', (link) => {
    expect(isRepoUrl({ link })).toBe(true)
  })

  test.each(INVALID_REPO_URLS)('returns false for non-repo: %s', (link) => {
    expect(isRepoUrl({ link })).toBe(false)
  })
})

describe('getHostConfig', () => {
  const HOST_CASES = [
    {
      link: 'https://open.spotify.com/track/123',
      label: 'Escuchar en Spotify'
    },
    { link: 'https://linkedin.com/in/user', label: 'LinkedIn' },
    { link: 'https://x.com/user', label: 'X / Twitter' },
    { link: 'https://twitter.com/user', label: 'X / Twitter' },
    { link: 'mailto:test@example.com', label: 'Enviar correo' },
    { link: 'https://github.com/user/repo', label: 'GitHub' },
    { link: 'https://drive.google.com/drive/folders/abc', label: 'Recursos' },
    { link: 'https://youtube.com/playlist?list=abc', label: 'Playlist' },
    { link: 'https://example.com', label: 'Ver proyecto' }
  ]

  test.each(HOST_CASES)('returns $label for $link', ({ link, label }) => {
    const { label: resultLabel } = getHostConfig({ link })

    expect(resultLabel).toBe(label)
  })
})

describe('createLinkElement', () => {
  test('creates link element for fallback host config', () => {
    const FALLBACK_LINK = 'https://example.com'
    const { className, href, rel, tagName, target } = createLinkElement({
      link: FALLBACK_LINK
    })

    expect(tagName).toBe('A')
    expect(className).toBe('link-button')
    expect(href).toBe(`${FALLBACK_LINK}/`)
    expect(target).toBe('_blank')
    expect(rel).toBe('noopener noreferrer')
  })

  test('creates link element with svgText from host config', () => {
    const DRIVE_LINK = 'https://drive.google.com/drive/folders/abc123'
    const { className, tagName, textContent } = createLinkElement({
      link: DRIVE_LINK
    })

    expect(tagName).toBe('A')
    expect(className).toBe('link-button')
    expect(textContent).toContain('📁')
  })
})
