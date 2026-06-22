import '@justinribeiro/lite-youtube'
import { renderDescription } from './renderers/description'
import { renderExperiences } from './renderers/experiences'
import { renderProjects } from './renderers/projects'
import { ARROW_LEFT, ARROW_RIGHT, navigateTo } from './navigation'
import { setupPlanetTriggers } from './planet-setup'
import { closeWithAnimation } from './close'
import {
  closeButton,
  embedWrapper,
  modal,
  modalDescription,
  modalExperiences,
  modalProjects,
  modalSubtitle,
  modalTitle,
  nextButton,
  planets,
  prevButton
} from './domExtraction'
import { createYouTubeEmbed } from './embed'
import { setupClickOutside } from './click-outside'

let currentPlanetIndex = -1

interface GoToPlanetParams {
  direction: number
}

const goToPlanet = ({ direction }: GoToPlanetParams): void => {
  currentPlanetIndex = navigateTo({
    currentIndex: currentPlanetIndex,
    direction,
    onOpenPlanet: openPlanet,
    planets
  })
}

interface OpenPlanetParams {
  id: string
}

const openPlanet = ({ id }: OpenPlanetParams): void => {
  const index = planets.findIndex(({ id: planetId }) => planetId === id)

  if (index === -1) return

  currentPlanetIndex = index
  const { description, experiences, name, projects, song, title, youtubeId } =
    planets[index]

  modalTitle.textContent = name
  modalSubtitle.textContent = title
  modalProjects.innerHTML = ''
  modalExperiences.innerHTML = ''
  renderDescription({ container: modalDescription, text: description })
  renderProjects({ container: modalProjects, projects: projects ?? [] })
  renderExperiences({
    container: modalExperiences,
    experiences: experiences ?? []
  })

  embedWrapper.innerHTML = ''
  embedWrapper.append(createYouTubeEmbed({ label: song, videoId: youtubeId }))

  document.body.style.overflow = 'hidden'
  modal.showModal()
}

setupPlanetTriggers({ openPlanet })
closeButton?.addEventListener('click', closeWithAnimation)
prevButton?.addEventListener('click', (event: MouseEvent) => {
  event.stopPropagation()
  goToPlanet({ direction: -1 })
})
nextButton?.addEventListener('click', (event: MouseEvent) => {
  event.stopPropagation()
  goToPlanet({ direction: 1 })
})

modal.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === ARROW_LEFT) {
    event.preventDefault()
    goToPlanet({ direction: -1 })
  }
  if (event.key === ARROW_RIGHT) {
    event.preventDefault()
    goToPlanet({ direction: 1 })
  }
})

setupClickOutside()

modal.addEventListener('cancel', (event: Event) => {
  event.preventDefault()
  closeWithAnimation()
})
