import type { PlanetContent } from '@/types'

interface GetElementOrThrowParams {
  id: string
}

const getElementOrThrow = ({ id }: GetElementOrThrowParams): HTMLElement => {
  const element = document.getElementById(id)

  if (!element) throw new Error(`Element #${id} not found`)

  return element
}

interface GetDialogElementParams {
  id: string
}

const getDialogElement = ({
  id
}: GetDialogElementParams): HTMLDialogElement => {
  const element = document.getElementById(id)

  if (!(element instanceof HTMLDialogElement))
    throw new TypeError(`Element #${id} is not a dialog`)

  return element
}

interface ParsePlanetsParams {
  data: string
}

const parsePlanets = ({ data }: ParsePlanetsParams): PlanetContent[] => {
  return JSON.parse(data) as PlanetContent[]
}

const modal = getDialogElement({ id: 'planet-modal' })
const planets = parsePlanets({ data: modal.dataset.planets ?? '[]' })
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
