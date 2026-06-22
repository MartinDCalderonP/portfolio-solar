import type { PlanetContent } from '../../data/portfolio'

const ARROW_LEFT = 'ArrowLeft'
const ARROW_RIGHT = 'ArrowRight'

interface PlanetIdPayload {
  id: string
}

interface NavigateToParams {
  currentIndex: number
  direction: number
  modal: HTMLDialogElement
  onOpenPlanet: (payload: PlanetIdPayload) => void
  planets: PlanetContent[]
}

const navigateTo = ({
  currentIndex,
  direction,
  modal,
  onOpenPlanet,
  planets
}: NavigateToParams): number => {
  const totalPlanets = planets.length
  const nextIndex = (currentIndex + direction + totalPlanets) % totalPlanets
  const nextId = planets[nextIndex].id

  modal.classList.add('closing')
  modal.addEventListener(
    'animationend',
    () => {
      modal.close()
      modal.classList.remove('closing')
      onOpenPlanet({ id: nextId })
    },
    { once: true }
  )

  return nextIndex
}

export { ARROW_LEFT, ARROW_RIGHT, navigateTo }
