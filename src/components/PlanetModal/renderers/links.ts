import '../../LinkButton/LinkButton.css'

const SVG_STORE: Record<string, string> = {}

const getSvg = (id: string): string => {
  SVG_STORE[id] ??= document.getElementById(id)?.innerHTML ?? ''

  return SVG_STORE[id]
}

const SPOTIFY_HOST = 'open.spotify.com'
const LINKEDIN_HOST = 'linkedin.com'
const TWITTER_HOSTS = ['x.com', 'twitter.com']
const GITHUB_HOST = 'github.com'
const MAIL_PROTOCOL = 'mailto:'

interface HostConfig {
  label: string
  svgId?: string
  svgText?: string
  test: (link: string) => boolean
}

const getSvgOrText = ({ config }: { config: HostConfig }): string => {
  if (config.svgText) return config.svgText

  return config.svgId ? getSvg(config.svgId) : ''
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
    test: (link) => link.includes('1yO3hwvlY1V9jULNAJ1T86aRnzQqE0rId')
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
  const finalLabel =
    link.includes(GITHUB_HOST) && isRepoUrl({ link }) ? 'Repositorio' : label

  element.innerHTML = `${finalLabel} ${getSvgForLink({ link })}`

  return element
}

export { createLinkElement }
