import { lockScroll, unlockScroll } from '../scroll-lock'

describe('lockScroll', () => {
  beforeEach(() => {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
  })

  test('fixes body position and records scrollY', () => {
    window.scrollY = 100

    lockScroll()

    const { position, top, width } = document.body.style

    expect(position).toBe('fixed')
    expect(top).toBe('-100px')
    expect(width).toBe('100%')
  })
})

describe('unlockScroll', () => {
  beforeEach(() => {
    document.body.style.position = 'fixed'
    document.body.style.top = '-200px'
    document.body.style.width = '100%'
  })

  test('resets body styles and scrolls to previous position', () => {
    window.scrollTo = vi.fn()

    unlockScroll()

    const { position, top, width } = document.body.style
    const { scrollTo } = window

    expect(position).toBe('')
    expect(top).toBe('')
    expect(width).toBe('')
    expect(scrollTo).toHaveBeenCalledWith(0, 200)
  })
})
