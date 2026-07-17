import '../PlanetModal.css'

const SVG_STORE: Record<string, string> = {}

interface GetSvgParams {
  id: string
}

const getSvg = ({ id }: GetSvgParams): string => {
  SVG_STORE[id] ??= document.getElementById(id)?.innerHTML ?? ''

  return SVG_STORE[id]
}

const SPOTIFY_HOST = 'open.spotify.com'
const LINKEDIN_HOST = 'linkedin.com'
const TWITTER_HOSTS = ['x.com', 'twitter.com']
const GITHUB_HOST = 'github.com'
const MAIL_PROTOCOL = 'mailto:'

interface HostConfigWithSvg {
  label: string
  svgId: string
  test: (link: string) => boolean
}

interface HostConfigWithText {
  label: string
  svgText: string
  test: (link: string) => boolean
}

type HostConfig = HostConfigWithSvg | HostConfigWithText

interface GetSvgOrTextParams {
  config: HostConfig
}

const getSvgOrText = ({ config }: GetSvgOrTextParams): string => {
  if ('svgText' in config) return config.svgText

  return getSvg({ id: config.svgId })
}

const HOST_CONFIGS: HostConfig[] = [
  {
    label: 'Escuchar en Spotify',
    svgId: 'svg-spotify',
    test: (link) => link.includes(SPOTIFY_HOST)
  },
  {
    label: 'LinkedIn',
    svgId: 'svg-linkedin',
    test: (link) => link.includes(LINKEDIN_HOST)
  },
  {
    label: 'X / Twitter',
    svgId: 'svg-twitter',
    test: (link) => TWITTER_HOSTS.some((host) => link.includes(host))
  },
  {
    label: 'Enviar correo',
    svgId: 'svg-email',
    test: (link) => link.startsWith(MAIL_PROTOCOL)
  },
  {
    label: 'GitHub',
    svgId: 'svg-github',
    test: (link) => link.includes(GITHUB_HOST)
  },
  {
    label: 'Recursos',
    svgText: '📁',
    test: (link) => link.includes('/drive/folders/')
  },
  {
    label: 'Playlist',
    svgId: 'svg-youtube',
    test: (link) => link.includes('youtube.com/playlist')
  },
  {
    label: 'Ver Proyecto',
    svgText: '🎬',
    test: (link) => link.includes('1RKms5kvMDvWDJdBoKkCyF8Cg9ncNXIhi')
  },
  {
    label: 'Ver proyecto',
    svgId: 'svg-link',
    test: () => true
  }
]

interface GetHostConfigParams {
  link: string
}

const getHostConfig = ({ link }: GetHostConfigParams): HostConfig => {
  return HOST_CONFIGS.find(({ test }) => test(link))!
}

interface GetSvgForLinkParams {
  link: string
}

const getSvgForLink = ({ link }: GetSvgForLinkParams): string => {
  const config = getHostConfig({ link })

  return getSvgOrText({ config })
}

interface IsRepoUrlParams {
  link: string
}

const isRepoUrl = ({ link }: IsRepoUrlParams): boolean => {
  try {
    const segments = new URL(link).pathname.split('/').filter(Boolean)

    return segments.length >= 2
  } catch {
    return false
  }
}

interface CreateLinkElementParams {
  link: string
}

const createLinkElement = ({
  link
}: CreateLinkElementParams): HTMLAnchorElement => {
  const element = document.createElement('a')

  element.className = 'link-button'
  element.href = link
  element.rel = 'noopener noreferrer'
  element.target = '_blank'

  const { label } = getHostConfig({ link })
  const isGithubRepo = link.includes(GITHUB_HOST) && isRepoUrl({ link })
  const finalLabel = isGithubRepo ? 'Repositorio' : label

  element.innerHTML = `${finalLabel} ${getSvgForLink({ link })}`

  return element
}

export { createLinkElement, getHostConfig, isRepoUrl }
