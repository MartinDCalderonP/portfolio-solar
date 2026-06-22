import '../../LinkButton/LinkButton.css'

const SPOTIFY_HOST = 'open.spotify.com'
const LINKEDIN_HOST = 'linkedin.com'
const TWITTER_HOSTS = ['x.com', 'twitter.com']
const GITHUB_HOST = 'github.com'
const MAIL_PROTOCOL = 'mailto:'

const DEFAULT_LABEL = 'Ver proyecto 🔗'

interface LinkPattern {
  label: string
  test: (link: string) => boolean
}

const LINK_PATTERNS: LinkPattern[] = [
  {
    label: 'Escuchar en Spotify 🎙️',
    test: (link) => link.includes(SPOTIFY_HOST)
  },
  { label: 'LinkedIn 🔗', test: (link) => link.includes(LINKEDIN_HOST) },
  {
    label: 'X / Twitter 🐦',
    test: (link) => TWITTER_HOSTS.some((host) => link.includes(host))
  },
  { label: 'GitHub 🔗', test: (link) => link.includes(GITHUB_HOST) },
  { label: 'Enviar correo 📧', test: (link) => link.startsWith(MAIL_PROTOCOL) }
]

interface GetLinkLabelParams {
  link: string
}

const getLinkLabel = ({ link }: GetLinkLabelParams): string => {
  return LINK_PATTERNS.find(({ test }) => test(link))?.label ?? DEFAULT_LABEL
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
  element.textContent = getLinkLabel({ link })

  return element
}

export { createLinkElement }
