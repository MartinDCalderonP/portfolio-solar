import '../../LinkButton/LinkButton.css'

const SPOTIFY_HOST = 'open.spotify.com'
const LINKEDIN_HOST = 'linkedin.com'
const TWITTER_HOSTS = ['x.com', 'twitter.com']
const GITHUB_HOST = 'github.com'
const MAIL_PROTOCOL = 'mailto:'

const LINK_LABELS: Record<string, string> = {
  spotify: 'Escuchar en Spotify 🎙️',
  linkedin: 'LinkedIn 🔗',
  twitter: 'X / Twitter 🐦',
  github: 'GitHub 🔗',
  email: 'Enviar correo 📧',
  default: 'Ver proyecto 🔗'
}

interface GetLinkLabelParams {
  link: string
}

const getLinkLabel = ({ link }: GetLinkLabelParams): string => {
  if (link.includes(SPOTIFY_HOST)) return LINK_LABELS.spotify
  if (link.includes(LINKEDIN_HOST)) return LINK_LABELS.linkedin
  if (TWITTER_HOSTS.some((host) => link.includes(host)))
    return LINK_LABELS.twitter
  if (link.includes(GITHUB_HOST)) return LINK_LABELS.github
  if (link.startsWith(MAIL_PROTOCOL)) return LINK_LABELS.email

  return LINK_LABELS.default
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
