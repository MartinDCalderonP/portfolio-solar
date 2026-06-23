import '@justinribeiro/lite-youtube'
import { createGreetingButton } from '../AudioGreeting/greeting-button'
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
import { lockScroll } from './scroll-lock'

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

  ;(document.getElementById('greeting-audio') as HTMLAudioElement)?.pause()
  if (index === -1) return

  currentPlanetIndex = index
  const { description, experiences, name, projects, song, title, youtubeId } =
    planets[index]

  modalTitle.textContent = name
  modalSubtitle.textContent = title
  embedWrapper.after(modalProjects)
  modalProjects.innerHTML = ''
  modalProjects.style.marginBottom = ''
  modalExperiences.innerHTML = ''
  renderDescription({ container: modalDescription, text: description })

  if (id === 'sun') {
    const firstParagraph = modalDescription.querySelector('p')

    if (firstParagraph) firstParagraph.after(createGreetingButton())
  }
  renderProjects({ container: modalProjects, projects: projects ?? [] })

  if (id === 'uranus') {
    const songElement = document.querySelector('.modal-song')

    if (songElement) {
      songElement.parentNode?.insertBefore(modalProjects, songElement)
    }

    modalProjects.style.marginBottom = '20px'
  }
  renderExperiences({
    container: modalExperiences,
    experiences: experiences ?? []
  })
  embedWrapper.innerHTML = ''
  embedWrapper.append(createYouTubeEmbed({ label: song, videoId: youtubeId }))
  lockScroll()
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
