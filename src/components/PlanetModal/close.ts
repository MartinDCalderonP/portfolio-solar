import { modal } from './domExtraction'

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
      document.body.style.overflow = ''
      onEnd?.()
    },
    { once: true }
  )
}

const closeWithAnimation = (): void => animateClose({})

export { animateClose, closeWithAnimation }
