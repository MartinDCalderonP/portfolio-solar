import '../../LinkButton/LinkButton.css'
import {
  SVG_EMAIL,
  SVG_GITHUB,
  SVG_LINK,
  SVG_LINKEDIN,
  SVG_SPOTIFY,
  SVG_TWITTER,
  SVG_YOUTUBE
} from './svg/icons'

const SPOTIFY_HOST = 'open.spotify.com'
const LINKEDIN_HOST = 'linkedin.com'
const TWITTER_HOSTS = ['x.com', 'twitter.com']
const GITHUB_HOST = 'github.com'
const MAIL_PROTOCOL = 'mailto:'

interface HostConfig {
  label: string
  svg: string
  test: (link: string) => boolean
}

const HOST_CONFIGS: HostConfig[] = [
  {
    label: 'Escuchar en Spotify',
    svg: SVG_SPOTIFY,
    test: (link) => link.includes(SPOTIFY_HOST)
  },
  {
    label: 'LinkedIn',
    svg: SVG_LINKEDIN,
    test: (link) => link.includes(LINKEDIN_HOST)
  },
  {
    label: 'X / Twitter',
    svg: SVG_TWITTER,
    test: (link) => TWITTER_HOSTS.some((host) => link.includes(host))
  },
  {
    label: 'Enviar correo',
    svg: SVG_EMAIL,
    test: (link) => link.startsWith(MAIL_PROTOCOL)
  },
  {
    label: 'GitHub',
    svg: SVG_GITHUB,
    test: (link) => link.includes(GITHUB_HOST)
  },
  {
    label: 'Recursos',
    svg: '📁',
    test: (link) => link.includes('/drive/folders/')
  },
  {
    label: 'Playlist',
    svg: SVG_YOUTUBE,
    test: (link) => link.includes('youtube.com/playlist')
  },
  {
    label: 'Ver Proyecto',
    svg: '🎬',
    test: (link) => link.includes('1yO3hwvlY1V9jULNAJ1T86aRnzQqE0rId')
  },
  {
    label: 'Ver proyecto',
    svg: SVG_LINK,
    test: () => true
  }
]

interface GetHostConfigParams {
  link: string
}

const getHostConfig = ({ link }: GetHostConfigParams): HostConfig => {
  return HOST_CONFIGS.find(({ test }) => test(link))!
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

  const { label, svg } = getHostConfig({ link })
  const finalLabel =
    link.includes(GITHUB_HOST) && isRepoUrl({ link }) ? 'Repositorio' : label

  element.innerHTML = `${finalLabel} ${svg}`

  return element
}

export { createLinkElement }
