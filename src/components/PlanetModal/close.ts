import { modal } from './domExtraction'
import { unlockScroll } from './scroll-lock'

interface AnimateCloseParams {
  onEnd?: () => void
}

const animateClose = ({ onEnd }: AnimateCloseParams): void => {
  modal.classList.add('closing')
  modal.addEventListener(
    'animationend',
    () => {
      modal.close()
      modal.classList.remove('closing')
      unlockScroll()
      onEnd?.()
    },
    { once: true }
  )
}

const closeWithAnimation = (): void => animateClose({})

export { animateClose, closeWithAnimation }
