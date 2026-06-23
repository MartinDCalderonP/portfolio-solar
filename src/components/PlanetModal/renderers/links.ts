import '../../LinkButton/LinkButton.css'

const SPOTIFY_HOST = 'open.spotify.com'
const LINKEDIN_HOST = 'linkedin.com'
const TWITTER_HOSTS = ['x.com', 'twitter.com']
const GITHUB_HOST = 'github.com'
const MAIL_PROTOCOL = 'mailto:'
const DRIVE_HOST = 'drive.google.com'

const SVG_GITHUB =
  '<svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>'
const SVG_LINKEDIN =
  '<svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>'
const SVG_TWITTER =
  '<svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>'
const SVG_EMAIL =
  '<svg fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16"><path d="M22 4H2v16h20zM2 4l10 8 10-8"/></svg>'
const SVG_SPOTIFY =
  '<svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.5.5 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.987 1.063a.624.624 0 0 1 .205.858m.084-2.268c-2.576-1.529-6.826-1.67-9.285-.916a.75.75 0 0 1-.422-1.441c2.822-.84 7.512-.68 10.37 1.049a.75.75 0 0 1-.663 1.308"/></svg>'
const SVG_LINK =
  '<svg fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>'

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
    test: (link) => link.includes(DRIVE_HOST)
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
