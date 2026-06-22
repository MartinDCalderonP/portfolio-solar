let previousScrollY = 0

const lockScroll = (): void => {
  previousScrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${previousScrollY}px`
  document.body.style.width = '100%'
}

const unlockScroll = (): void => {
  const { top } = document.body.style
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  window.scrollTo(0, Number.parseInt(top || '0') * -1)
}

export { lockScroll, unlockScroll }
