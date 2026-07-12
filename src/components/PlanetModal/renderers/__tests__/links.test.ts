import { getHostConfig, isRepoUrl } from '../links'

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
    expect(getHostConfig({ link }).label).toBe(label)
  })
})
