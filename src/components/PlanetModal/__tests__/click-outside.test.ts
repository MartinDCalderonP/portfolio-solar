import { setupClickOutside } from '../click-outside'

const { mockModal, mockHandlers } = vi.hoisted(() => {
  const handlers = new Set<EventListener>()
  const modal = document.createElement('dialog')

  modal.getBoundingClientRect = vi.fn(
    (): DOMRect => ({
      bottom: 300,
      height: 200,
      left: 100,
      right: 300,
      toJSON: () => '',
      top: 100,
      width: 200,
      x: 100,
      y: 100
    })
  )

  const originalAddListener =
    EventTarget.prototype.addEventListener.bind(modal)

  modal.addEventListener = vi.fn(
    (_type: string, handler: EventListenerOrEventListenerObject) => {
      if (typeof handler !== 'function') return

      handlers.add(handler)
      originalAddListener('click', handler)
    }
  )

  return { mockHandlers: handlers, mockModal: modal }
})

const mockCloseWithAnimation = vi.hoisted(() => vi.fn())

const { clearAllMocks } = vi

vi.mock('../close', () => ({
  closeWithAnimation: mockCloseWithAnimation
}))

vi.mock('../domExtraction', () => ({
  modal: mockModal
}))

interface ClickOutsideCase {
  clientX: number
  clientY: number
  description: string
  expected: number
}

const CLICK_OUTSIDE_CASES: ClickOutsideCase[] = [
  {
    clientX: 50,
    clientY: 50,
    description: 'calls closeWithAnimation when clicking left of modal',
    expected: 1
  },
  {
    clientX: 150,
    clientY: 400,
    description: 'calls closeWithAnimation when clicking below modal',
    expected: 1
  },
  {
    clientX: 150,
    clientY: 150,
    description: 'does not call closeWithAnimation when clicking inside modal',
    expected: 0
  }
]

describe('setupClickOutside', () => {
  beforeEach(() => {
    clearAllMocks()
    for (const handler of mockHandlers) {
      mockModal.removeEventListener('click', handler)
    }
    mockHandlers.clear()
  })

  test.each(CLICK_OUTSIDE_CASES)(
    '$description',
    ({ clientX, clientY, expected }) => {
      setupClickOutside()

      mockModal.dispatchEvent(new MouseEvent('click', { clientX, clientY }))

      expect(mockCloseWithAnimation).toHaveBeenCalledTimes(expected)
    }
  )
})
