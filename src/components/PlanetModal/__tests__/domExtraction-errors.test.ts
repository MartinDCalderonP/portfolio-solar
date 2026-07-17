describe('module-level errors', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    vi.resetModules()
  })

  test('throws when planet-modal is not a dialog element', async () => {
    const div = document.createElement('div')

    div.id = 'planet-modal'
    document.body.append(div)

    await expect(import('../domExtraction')).rejects.toThrow(TypeError)
  })

  test('throws when planets data is not an array', async () => {
    const dialog = document.createElement('dialog')

    dialog.id = 'planet-modal'
    dialog.dataset.planets = '"not-an-array"'
    document.body.append(dialog)

    await expect(import('../domExtraction')).rejects.toThrow(TypeError)
  })

  test('throws when planet data is invalid', async () => {
    const dialog = document.createElement('dialog')

    dialog.id = 'planet-modal'
    dialog.dataset.planets = JSON.stringify([{ bad: 'data' }])
    document.body.append(dialog)

    await expect(import('../domExtraction')).rejects.toThrow(TypeError)
  })

  test('uses empty array when dataset planets is missing', async () => {
    const dialog = document.createElement('dialog')

    dialog.id = 'planet-modal'
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

    const { planets } = await import('../domExtraction')

    expect(planets).toEqual([])
  })
})
