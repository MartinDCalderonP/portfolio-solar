const GREETING_AUDIO_ID = 'greeting-audio'
const PLAY_LABEL = 'Reproducir saludo'
const PAUSE_LABEL = 'Pausar saludo'
const ICON_PLAY = '▶'
const ICON_PAUSE = '⏸'
const PLAYING_CLASS = 'greeting-button--playing'
const FFT_SIZE = 256
const MIN_GLOW_RADIUS = 6
const MAX_GLOW_RADIUS = 60
const MIN_GLOW_ALPHA = 0.2
const MAX_GLOW_ALPHA = 0.95

let sharedContext: AudioContext | null = null
let sharedAnalyser: AnalyserNode | null = null

const initSharedAnalyser = (audio: HTMLAudioElement): void => {
  if (sharedContext) return

  sharedContext = new AudioContext()
  const source = sharedContext.createMediaElementSource(audio)

  sharedAnalyser = sharedContext.createAnalyser()
  sharedAnalyser.fftSize = FFT_SIZE
  source.connect(sharedAnalyser)
  sharedAnalyser.connect(sharedContext.destination)
}

const getAnalyserOrThrow = (): AnalyserNode => {
  if (sharedAnalyser === null) throw new TypeError('Analyser is null')

  return sharedAnalyser
}

const createGreetingButton = (): HTMLButtonElement => {
  const audioElement = document.getElementById(GREETING_AUDIO_ID)
  const audio = audioElement instanceof HTMLAudioElement ? audioElement : null
  const button = document.createElement('button')
  const icon = document.createElement('span')

  button.className = 'greeting-button'
  icon.className = 'greeting-icon'
  let animationId: number | null = null

  const updateIcon = (isPlaying: boolean): void => {
    icon.textContent = isPlaying ? ICON_PAUSE : ICON_PLAY
    button.classList.toggle(PLAYING_CLASS, isPlaying)
    button.setAttribute('aria-label', isPlaying ? PAUSE_LABEL : PLAY_LABEL)
  }

  const stopGlow = (): void => {
    if (animationId !== null) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    button.style.boxShadow = ''
  }

  const updateGlow = (): void => {
    const hasNoAnalyserOrAudio = !sharedAnalyser || !audio

    if (hasNoAnalyserOrAudio) return

    const activeAnalyser = getAnalyserOrThrow()

    const dataArray = new Uint8Array(activeAnalyser.frequencyBinCount)
    activeAnalyser.getByteFrequencyData(dataArray)
    let sum = 0

    for (const value of dataArray) sum += value

    const energy = sum / dataArray.length / 255
    const radius =
      MIN_GLOW_RADIUS + energy * (MAX_GLOW_RADIUS - MIN_GLOW_RADIUS)
    const alpha = MIN_GLOW_ALPHA + energy * (MAX_GLOW_ALPHA - MIN_GLOW_ALPHA)

    button.style.boxShadow = `0 0 ${radius}px color-mix(in srgb, var(--color-sun) ${alpha * 100}%, transparent), inset 0 0 ${radius * 0.5}px color-mix(in srgb, var(--color-sun) ${alpha * 60}%, transparent)`

    if (!audio.paused) animationId = requestAnimationFrame(updateGlow)
  }

  if (audio) {
    audio.addEventListener('play', () => {
      initSharedAnalyser(audio)
      void sharedContext?.resume()
      if (animationId !== null) cancelAnimationFrame(animationId)
      updateGlow()
      updateIcon(true)
    })

    audio.addEventListener('pause', () => {
      stopGlow()
      updateIcon(false)
    })
  }

  button.addEventListener('click', () => {
    if (!audio) return

    if (audio.paused) {
      void audio.play()
    } else {
      audio.pause()
    }
  })

  updateIcon(!audio?.paused)
  button.append(icon)

  return button
}

export { createGreetingButton }
