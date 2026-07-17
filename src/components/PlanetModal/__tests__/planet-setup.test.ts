import { setupPlanetTriggers } from '../planet-setup'

describe('setupPlanetTriggers', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  test('opens planet on click', () => {
    const planet = document.createElement('div')

    planet.dataset.planetId = 'mercury'
    document.body.append(planet)

    const openPlanet = vi.fn()

    setupPlanetTriggers({ openPlanet })
    planet.click()

    expect(openPlanet).toHaveBeenCalledWith({ id: 'mercury' })
  })

  test.each([
    { key: 'Enter', planetId: 'venus' },
    { key: ' ', planetId: 'earth' }
  ])('opens planet on $key key', ({ key, planetId }) => {
    const planet = document.createElement('div')

    planet.dataset.planetId = planetId
    document.body.append(planet)

    const openPlanet = vi.fn()

    setupPlanetTriggers({ openPlanet })
    planet.dispatchEvent(new KeyboardEvent('keydown', { key }))

    expect(openPlanet).toHaveBeenCalledWith({ id: planetId })
  })

  test('does not open on other keys', () => {
    const planet = document.createElement('div')

    planet.dataset.planetId = 'mars'
    document.body.append(planet)

    const openPlanet = vi.fn()

    setupPlanetTriggers({ openPlanet })
    planet.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }))

    expect(openPlanet).not.toHaveBeenCalled()
  })

  test('does not open planet when planetId is empty', () => {
    const planet = document.createElement('div')

    planet.dataset.planetId = ''
    document.body.append(planet)

    const openPlanet = vi.fn()

    setupPlanetTriggers({ openPlanet })
    planet.click()

    expect(openPlanet).not.toHaveBeenCalled()
  })
})
