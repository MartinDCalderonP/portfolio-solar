import '../../Chip/Chip.css'

import type { Project } from '../../../types'
import { createLinkElement } from './links'

const createProjectCard = ({
  description,
  links,
  logo,
  title,
  year
}: Project): HTMLElement => {
  if (!year && links) {
    if (links.length === 1) return createLinkElement({ link: links[0] })

    const wrapper = document.createElement('div')

    wrapper.className = 'project-card-links'
    links.forEach((link) => wrapper.append(createLinkElement({ link })))
    return wrapper
  }

  if (!year && !links) {
    const chip = document.createElement('span')

    chip.className = 'chip'

    const titleSpan = document.createTextNode(title)
    const levelSpan = document.createElement('span')

    levelSpan.className = 'chip-level'
    levelSpan.textContent = description ?? ''

    chip.append(titleSpan, levelSpan)
    return chip
  }

  const card = document.createElement('div')

  card.className = 'project-card'

  if (logo) {
    const imageWrapper = document.createElement('div')

    imageWrapper.className = 'project-card-image'

    const image = document.createElement('img')

    image.alt = title
    image.src = logo
    imageWrapper.append(image)
    card.append(imageWrapper)
  }

  const body = document.createElement('div')

  body.className = 'project-card-body'

  const titleEl = document.createElement('div')

  titleEl.className = 'project-card-title'
  titleEl.textContent = `${title} (${year})`
  body.append(titleEl)

  const descriptionEl = document.createElement('div')

  descriptionEl.className = 'project-card-description'
  descriptionEl.textContent = description ?? null
  body.append(descriptionEl)

  if (links) {
    links.forEach((link) => body.append(createLinkElement({ link })))
  }

  card.append(body)

  return card
}

interface RenderProjectsParams {
  container: HTMLElement
  projects: Project[]
}

const renderProjects = ({
  container,
  projects
}: RenderProjectsParams): void => {
  const sortedProjects = [...projects].sort(
    ({ year: a }, { year: b }) => (b ?? 0) - (a ?? 0)
  )

  sortedProjects.forEach((project) => {
    container.append(createProjectCard(project))
  })
}

export { renderProjects }
