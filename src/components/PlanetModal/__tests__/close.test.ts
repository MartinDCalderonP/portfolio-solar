import { animateClose, closeWithAnimation } from '../close'
import { unlockScroll } from '../scroll-lock'

const mockModal = vi.hoisted(() => {
  const modal = document.createElement('dialog')

  modal.close = vi.fn()

  return modal
})

const { clearAllMocks, fn } = vi

const { classList, close } = mockModal

const ANIMATION_END_EVENT = new Event('animationend')

vi.mock('../scroll-lock', () => ({
  unlockScroll: vi.fn()
}))

vi.mock('../domExtraction', () => ({
  modal: mockModal
}))

describe('animateClose', () => {
  beforeEach(() => {
    clearAllMocks()
    classList.remove('closing')
  })

  afterEach(() => {
    mockModal.dispatchEvent(ANIMATION_END_EVENT)
  })

  test('adds closing class to modal', () => {
    animateClose({})

    expect(classList.contains('closing')).toBe(true)
  })

  interface AnimationEndCase {
    hasOnEnd: boolean
    name: string
  }

  const ANIMATION_END_CASES: AnimationEndCase[] = [
    {
      hasOnEnd: false,
      name: 'closes modal and cleans up on animationend'
    },
    {
      hasOnEnd: true,
      name: 'calls onEnd callback when provided'
    },
    {
      hasOnEnd: false,
      name: 'does not error when onEnd is not provided'
    }
  ]

  test.each(ANIMATION_END_CASES)('$name', ({ hasOnEnd }) => {
    const onEnd = hasOnEnd ? fn() : undefined

    animateClose(onEnd ? { onEnd } : {})
    mockModal.dispatchEvent(ANIMATION_END_EVENT)

    expect(close).toHaveBeenCalledTimes(1)
    expect(classList.contains('closing')).toBe(false)
    expect(unlockScroll).toHaveBeenCalledTimes(1)
    if (onEnd) expect(onEnd).toHaveBeenCalledTimes(1)
  })
})

describe('closeWithAnimation', () => {
  test('adds closing class to modal', () => {
    closeWithAnimation()

    expect(classList.contains('closing')).toBe(true)
  })
})
