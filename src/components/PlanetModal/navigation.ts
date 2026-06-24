import { animateClose } from './close'

import type { PlanetContent } from '@/types'

const ARROW_LEFT = 'ArrowLeft'
const ARROW_RIGHT = 'ArrowRight'

interface PlanetIdPayload {
  id: string
}

interface NavigateToParams {
  currentIndex: number
  direction: number
  onOpenPlanet: (payload: PlanetIdPayload) => void
  planets: PlanetContent[]
}

const navigateTo = ({
  currentIndex,
  direction,
  onOpenPlanet,
  planets
}: NavigateToParams): number => {
  const totalPlanets = planets.length
  const nextIndex = (currentIndex + direction + totalPlanets) % totalPlanets
  const nextId = planets[nextIndex].id

  animateClose({
    onEnd: () => onOpenPlanet({ id: nextId })
  })

  return nextIndex
}

export { ARROW_LEFT, ARROW_RIGHT, navigateTo }
