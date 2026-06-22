interface RenderDescriptionParams {
  container: HTMLElement
  text: string
}

const renderDescription = ({
  container,
  text
}: RenderDescriptionParams): void => {
  const paragraphs = text.split('\n').filter(Boolean)

  container.innerHTML = paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('')
}

export { renderDescription }
