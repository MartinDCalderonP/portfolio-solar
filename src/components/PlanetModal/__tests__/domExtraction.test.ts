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

  const ELEMENT_IDS = [
    'modal-title',
    'modal-subtitle',
    'modal-description',
    'modal-projects',
    'modal-experiences',
    'modal-content-scroll',
    'embed-wrapper'
  ]

  ELEMENT_IDS.forEach((id) => {
    const div = document.createElement('div')

    div.id = id
    document.body.append(div)
  })
}

describe('getElementOrThrow', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    vi.resetModules()
  })

  test('returns element when found', async () => {
    setupFullDOM()

    const div = document.createElement('div')

    div.id = 'test-id'
    document.body.append(div)

    const { getElementOrThrow } = await import('../domExtraction')

    const result = getElementOrThrow({ id: 'test-id' })

    expect(result).toBe(div)
  })

  test('throws Error when element not found', async () => {
    setupFullDOM()
    const { getElementOrThrow } = await import('../domExtraction')

    expect(() => getElementOrThrow({ id: 'missing' })).toThrow('not found')
  })
})

describe('module-level constants', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    vi.resetModules()
  })

  test('modal references the dialog element', async () => {
    setupFullDOM()

    const { modal } = await import('../domExtraction')

    expect(modal.id).toBe('planet-modal')
    expect(modal instanceof HTMLDialogElement).toBe(true)
  })

  test('planets parsed from dataset', async () => {
    setupFullDOM()

    const { planets } = await import('../domExtraction')

    const [firstPlanet] = planets

    expect(planets).toHaveLength(1)
    expect(firstPlanet.id).toBe('mercury')
  })

  type ModalElementName =
    | 'embedWrapper'
    | 'modalContent'
    | 'modalDescription'
    | 'modalExperiences'
    | 'modalProjects'
    | 'modalSubtitle'
    | 'modalTitle'

  const MODAL_ELEMENT_NAMES: ModalElementName[] = [
    'embedWrapper',
    'modalContent',
    'modalDescription',
    'modalExperiences',
    'modalProjects',
    'modalSubtitle',
    'modalTitle'
  ]

  const MODAL_ELEMENT_ID_MAP: Record<ModalElementName, string> = {
    embedWrapper: 'embed-wrapper',
    modalContent: 'modal-content-scroll',
    modalDescription: 'modal-description',
    modalExperiences: 'modal-experiences',
    modalProjects: 'modal-projects',
    modalSubtitle: 'modal-subtitle',
    modalTitle: 'modal-title'
  }

  test.each(MODAL_ELEMENT_NAMES)(
    '%s references the correct DOM element',
    async (constName) => {
      setupFullDOM()

      const modalElement = await import('../domExtraction')

      expect(modalElement[constName].id).toBe(MODAL_ELEMENT_ID_MAP[constName])
    }
  )
})
