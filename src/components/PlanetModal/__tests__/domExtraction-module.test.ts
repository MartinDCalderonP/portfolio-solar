import type { PlanetContent } from '@/types'

const VALID_PLANET_DATA: PlanetContent = {
  colorVar: '--mercury',
  description: 'desc',
  id: 'mercury',
  image: '',
  name: 'Mercury',
  orbitVar: '--orbit-mercury',
  size: 'small',
  song: 'song.mp3',
  title: 'Mercury',
  youtubeId: 'abc123'
}

const setupFullDOM = (): void => {
  const dialog = document.createElement('dialog')

  dialog.id = 'planet-modal'
  dialog.dataset.planets = JSON.stringify([VALID_PLANET_DATA])
  document.body.append(dialog)

  ;[
    'modal-title',
    'modal-subtitle',
    'modal-description',
    'modal-projects',
    'modal-experiences',
    'modal-content-scroll',
    'embed-wrapper'
  ].forEach((id) => {
    const div = document.createElement('div')

    div.id = id
    document.body.append(div)
  })
}

describe('module-level constants', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    vi.resetModules()
  })

  test('modal references the dialog element', async () => {
    setupFullDOM()

    const { modal } = await import('../domExtraction')
    const { id: modalId } = modal

    expect(modalId).toBe('planet-modal')
    expect(modal instanceof HTMLDialogElement).toBe(true)
  })

  test('planets parsed from dataset', async () => {
    setupFullDOM()

    const { planets } = await import('../domExtraction')
    const [firstPlanet] = planets
    const { id: firstId } = firstPlanet

    expect(planets).toHaveLength(1)
    expect(firstId).toBe('mercury')
  })

  type ModalKey =
    | 'embedWrapper'
    | 'modalContent'
    | 'modalDescription'
    | 'modalExperiences'
    | 'modalProjects'
    | 'modalSubtitle'
    | 'modalTitle'

  const ID_MAP: Record<ModalKey, string> = {
    embedWrapper: 'embed-wrapper',
    modalContent: 'modal-content-scroll',
    modalDescription: 'modal-description',
    modalExperiences: 'modal-experiences',
    modalProjects: 'modal-projects',
    modalSubtitle: 'modal-subtitle',
    modalTitle: 'modal-title'
  }

  const KEYS = Object.keys(ID_MAP) as ModalKey[]

  test.each(KEYS)('%s references the correct DOM element', async (key) => {
    setupFullDOM()

    const mod = await import('../domExtraction')

    expect(mod[key].id).toBe(ID_MAP[key])
  })
})
