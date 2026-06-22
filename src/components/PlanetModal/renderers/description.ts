const renderDescription = (
  container: HTMLElement,
  text: string,
): void => {
  container.innerHTML = '';

  text.split('\n\n').forEach((paragraph) => {
    const paragraphEl = document.createElement('p');

    paragraphEl.className = 'modal-description-paragraph';
    paragraphEl.textContent = paragraph;
    container.append(paragraphEl);
  });
};

export { renderDescription };
