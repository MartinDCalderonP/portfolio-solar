interface RenderDescriptionParams {
  container: HTMLElement
  text: string
}

const renderDescription = ({
  container,
  text
}: RenderDescriptionParams): void => {
  const paragraphs = text.split('\n')

  container.innerHTML = paragraphs
    .map(
      (paragraph) => `<p class="modal-description-paragraph">${paragraph}</p>`
    )
    .join('')
}

export { renderDescription }
