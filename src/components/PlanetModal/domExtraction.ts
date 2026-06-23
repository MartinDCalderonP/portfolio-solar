import type { PlanetContent } from '../../data/portfolio'

interface GetElementOrThrowParams {
  id: string
}

const getElementOrThrow = ({ id }: GetElementOrThrowParams): HTMLElement => {
  const element = document.getElementById(id)

  if (!element) throw new Error(`Element #${id} not found`)

  return element
}

const modal = document.getElementById('planet-modal') as HTMLDialogElement
const planets: PlanetContent[] = JSON.parse(modal.dataset.planets ?? '[]')
const modalTitle = getElementOrThrow({ id: 'modal-title' })
const modalSubtitle = getElementOrThrow({ id: 'modal-subtitle' })
const modalDescription = getElementOrThrow({ id: 'modal-description' })
const modalProjects = getElementOrThrow({ id: 'modal-projects' })
const modalExperiences = getElementOrThrow({ id: 'modal-experiences' })
const closeButton = document.getElementById('modal-close')
const modalContent = getElementOrThrow({ id: 'modal-content-scroll' })
const embedWrapper = getElementOrThrow({ id: 'embed-wrapper' })
const prevButton = document.getElementById('modal-nav-prev')
const nextButton = document.getElementById('modal-nav-next')

export {
  closeButton,
  embedWrapper,
  getElementOrThrow,
  modal,
  modalContent,
  modalDescription,
  modalExperiences,
  modalProjects,
  modalSubtitle,
  modalTitle,
  nextButton,
  planets,
  prevButton
}
