import { getDialogElement, getElementOrThrow, parsePlanets } from './domHelpers'

export { getElementOrThrow }

export const modal = getDialogElement({ id: 'planet-modal' })
export const planets = parsePlanets({ data: modal.dataset.planets ?? '[]' })
export const modalTitle = getElementOrThrow({ id: 'modal-title' })
export const modalSubtitle = getElementOrThrow({ id: 'modal-subtitle' })
export const modalDescription = getElementOrThrow({ id: 'modal-description' })
export const modalProjects = getElementOrThrow({ id: 'modal-projects' })
export const modalExperiences = getElementOrThrow({ id: 'modal-experiences' })
export const closeButton = document.getElementById('modal-close')
export const modalContent = getElementOrThrow({ id: 'modal-content-scroll' })
export const embedWrapper = getElementOrThrow({ id: 'embed-wrapper' })
export const prevButton = document.getElementById('modal-nav-prev')
export const nextButton = document.getElementById('modal-nav-next')
