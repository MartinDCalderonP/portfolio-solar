import { navigateTo } from '../navigation'

import type { PlanetContent } from '@/types'

vi.mock('../close', () => ({
  animateClose: vi.fn(({ onEnd }: { onEnd?: () => void }) => onEnd?.())
}))

const createMockPlanets = (count: number): PlanetContent[] =>
  Array.from({ length: count }, (_, index) => ({
    colorVar: `--color-${index}`,
    description: `Planet ${index}`,
    id: `planet-${index}`,
    name: `Planet ${index}`,
    orbitVar: `--orbit-${index}`,
    size: '20px',
    song: 'song',
    title: `Title ${index}`,
    youtubeId: 'youtube'
  }))

describe('navigateTo', () => {
  const PLANET_COUNT = 3

  interface NavigationCase {
    currentIndex: number
    description: string
    direction: number
    expectedId: string
    expectedIndex: number
  }

  const NAVIGATION_CASES: NavigationCase[] = [
    {
      currentIndex: 1,
      description: 'advances to next planet going forward',
      direction: 1,
      expectedIndex: 2,
      expectedId: 'planet-2'
    },
    {
      currentIndex: 1,
      description: 'advances to previous planet going backward',
      direction: -1,
      expectedIndex: 0,
      expectedId: 'planet-0'
    },
    {
      currentIndex: 2,
      description: 'wraps from last to first planet',
      direction: 1,
      expectedIndex: 0,
      expectedId: 'planet-0'
    },
    {
      currentIndex: 0,
      description: 'wraps from first to last planet',
      direction: -1,
      expectedIndex: 2,
      expectedId: 'planet-2'
    }
  ]

  test.each(NAVIGATION_CASES)(
    '$description',
    ({ currentIndex, direction, expectedIndex, expectedId }) => {
      const planets = createMockPlanets(PLANET_COUNT)
      const onOpenPlanet = vi.fn()

      const result = navigateTo({
        currentIndex,
        direction,
        onOpenPlanet,
        planets
      })

      expect(result).toBe(expectedIndex)
      expect(onOpenPlanet).toHaveBeenCalledWith({ id: expectedId })
    }
  )

  test('handles single planet wrapping to itself', () => {
    const planets = createMockPlanets(1)
    const onOpenPlanet = vi.fn()

    const result = navigateTo({
      currentIndex: 0,
      direction: 1,
      onOpenPlanet,
      planets
    })

    expect(result).toBe(0)
    expect(onOpenPlanet).toHaveBeenCalledWith({ id: 'planet-0' })
  })
})
