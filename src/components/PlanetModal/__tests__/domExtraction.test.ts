const setupFullDOM = (): void => {
  const dialog = document.createElement('dialog')

  dialog.id = 'planet-modal'
  dialog.dataset.planets = '[]'
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

    expect(getElementOrThrow({ id: 'test-id' })).toBe(div)
  })

  test('throws Error when element not found', async () => {
    setupFullDOM()
    const { getElementOrThrow } = await import('../domExtraction')

    expect(() => getElementOrThrow({ id: 'missing' })).toThrow('not found')
  })
})
