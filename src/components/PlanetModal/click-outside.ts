import { closeWithAnimation } from './close'
import { modal } from './domExtraction'

const setupClickOutside = (): void => {
  modal.addEventListener('click', (event: MouseEvent) => {
    const rect = modal.getBoundingClientRect()
    const isVerticallyInside =
      rect.top <= event.clientY && event.clientY <= rect.top + rect.height
    const isHorizontallyInside =
      rect.left <= event.clientX && event.clientX <= rect.left + rect.width
    const isInDialog = isVerticallyInside && isHorizontallyInside

    if (!isInDialog) {
      closeWithAnimation()
    }
  })
}

export { setupClickOutside }
