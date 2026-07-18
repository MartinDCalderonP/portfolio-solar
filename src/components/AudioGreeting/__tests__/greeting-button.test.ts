import '../greeting-button'

const { fn } = vi

class MockAnalyserNode {
  connect = fn()

  fftSize = 256

  frequencyBinCount = 32

  getByteFrequencyData = fn((dataArray: Uint8Array) => {
    dataArray.fill(128)
  })
}

const setupAudioElement = (): HTMLAudioElement => {
  const audio = document.createElement('audio')

  audio.id = 'greeting-audio'
  Object.defineProperty(audio, 'paused', {
    value: true,
    writable: true,
    configurable: true
  })
  audio.play = fn(() => Promise.resolve())
  audio.pause = fn()
  document.body.append(audio)

  return audio
}

let createGreetingButton: () => HTMLButtonElement

beforeEach(async () => {
  vi.resetModules()
  vi.unstubAllGlobals()
  document.body.innerHTML = ''

  vi.stubGlobal('cancelAnimationFrame', fn())
  vi.stubGlobal('requestAnimationFrame', fn())
  class MockAudioContext {
    createAnalyser = () => new MockAnalyserNode()

    createMediaElementSource = () => ({ connect: fn() })

    resume = fn()
  }
  vi.stubGlobal('AudioContext', fn(MockAudioContext))

  const buttonModule = await import('../greeting-button')

  createGreetingButton = buttonModule.createGreetingButton
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('createGreetingButton', () => {
  test('creates button with correct structure when audio exists', () => {
    setupAudioElement()

    const button = createGreetingButton()

    expect(button.className).toBe('greeting-button')
    expect(button.querySelector('.greeting-icon')).toBeTruthy()
    expect(button.getAttribute('aria-label')).toBe('Reproducir saludo')
    expect(button.getAttribute('aria-pressed')).toBe('false')
  })

  test('creates button with correct structure when no audio element', () => {
    const button = createGreetingButton()

    expect(button.className).toBe('greeting-button')
    expect(button.querySelector('.greeting-icon')).toBeTruthy()
    expect(button.getAttribute('aria-label')).toBe('Reproducir saludo')
    expect(button.getAttribute('aria-pressed')).toBe('false')
  })

  test('starts playback on click when audio is paused', () => {
    const audio = setupAudioElement()

    const button = createGreetingButton()
    button.click()

    expect(audio.play).toHaveBeenCalledTimes(1)
    expect(audio.pause).not.toHaveBeenCalled()
  })

  test('pauses playback on click when audio is playing', () => {
    const audio = setupAudioElement()

    Object.defineProperty(audio, 'paused', { value: false, writable: true, configurable: true })
    const button = createGreetingButton()
    button.click()

    expect(audio.pause).toHaveBeenCalledTimes(1)
    expect(audio.play).not.toHaveBeenCalled()
  })

  test('click does nothing when no audio element', () => {
    const button = createGreetingButton()

    expect(() => button.click()).not.toThrow()
  })

  test('updates icon and aria attributes on play and pause events', () => {
    const audio = setupAudioElement()

    const button = createGreetingButton()
    const icon = button.querySelector('.greeting-icon')!

    audio.dispatchEvent(new Event('play'))

    expect(icon.textContent).toBe('⏸')
    expect(button.getAttribute('aria-label')).toBe('Pausar saludo')
    expect(button.getAttribute('aria-pressed')).toBe('true')

    audio.dispatchEvent(new Event('pause'))

    expect(icon.textContent).toBe('▶')
    expect(button.getAttribute('aria-label')).toBe('Reproducir saludo')
    expect(button.getAttribute('aria-pressed')).toBe('false')
  })

  test('creates AudioContext on first play event', () => {
    const audio = setupAudioElement()

    createGreetingButton()
    audio.dispatchEvent(new Event('play'))

    expect(AudioContext).toHaveBeenCalledTimes(1)
  })
})
