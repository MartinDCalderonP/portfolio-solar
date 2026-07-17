import '../PlanetModal.css'
import { getHostConfig, getSvgForLink, GITHUB_HOST } from './hostConfigs'

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
  const linkElement = document.createElement('a')

  linkElement.className = 'link-button'
  linkElement.href = link
  linkElement.rel = 'noopener noreferrer'
  linkElement.target = '_blank'

  const { label } = getHostConfig({ link })
  const isGithubRepo = link.includes(GITHUB_HOST) && isRepoUrl({ link })
  const finalLabel = isGithubRepo ? 'Repositorio' : label

  linkElement.innerHTML = `${finalLabel} ${getSvgForLink({ link })}`

  return linkElement
}

export { createLinkElement, getHostConfig, isRepoUrl }
