import '@justinribeiro/lite-youtube';

import type { PlanetContent, Project } from '../../data/portfolio';

const ENTER_KEY = 'Enter';
const SPACE_KEY = ' ';

const getElementOrThrow = (id: string): HTMLElement => {
  const element = document.getElementById(id);

  if (!element) throw new Error(`Element #${id} not found`);

  return element;
};

const modal = document.getElementById('planet-modal') as HTMLDialogElement;
const planets: PlanetContent[] = JSON.parse(
  modal.dataset.planets ?? '[]',
);
const modalTitle = getElementOrThrow('modal-title');
const modalSubtitle = getElementOrThrow('modal-subtitle');
const modalDescription = getElementOrThrow('modal-description');
const modalProjects = getElementOrThrow('modal-projects');
const closeButton = document.getElementById('modal-close');
const embedWrapper = getElementOrThrow('embed-wrapper');

const createProjectCard = (project: Project): HTMLDivElement => {
  const card = document.createElement('div');

  card.className = 'project-card';

  if (project.logo) {
    const imageWrapper = document.createElement('div');

    imageWrapper.className = 'project-card-image';

    const image = document.createElement('img');

    image.alt = project.title;
    image.src = project.logo;
    imageWrapper.append(image);
    card.append(imageWrapper);
  }

  const body = document.createElement('div');

  body.className = 'project-card-body';

  const title = document.createElement('div');

  title.className = 'project-card-title';
  title.textContent = `${project.title} (${project.year})`;
  body.append(title);

  const description = document.createElement('div');

  description.className = 'project-card-description';
  description.textContent = project.description;
  body.append(description);

  if (project.link) {
    const link = document.createElement('a');

    link.className = 'project-link';
    link.href = project.link;
    link.rel = 'noopener noreferrer';
    link.target = '_blank';

    const isSpotify = project.link.includes('open.spotify.com');

    link.textContent = isSpotify ? 'Escuchar en Spotify 🎙️' : 'Ver proyecto 🔗';
    body.append(link);
  }

  card.append(body);

  return card;
};

const renderProjects = (projects: Project[]): void => {
  modalProjects.innerHTML = '';

  const sortedProjects = [...projects].sort(({ year: a }, { year: b }) => b - a);

  sortedProjects.forEach((project) => {
    modalProjects.append(createProjectCard(project));
  });
};

const renderDescription = (text: string): void => {
  modalDescription.innerHTML = '';

  text.split('\n\n').forEach((paragraph) => {
    const paragraphEl = document.createElement('p');

    paragraphEl.className = 'modal-description-paragraph';
    paragraphEl.textContent = paragraph;
    modalDescription.append(paragraphEl);
  });
};

const openPlanet = (id: string): void => {
  const planet = planets.find(({ id: planetId }) => planetId === id);

  if (!planet) return;

  modalTitle.textContent = planet.name;
  modalSubtitle.textContent = planet.title;
  renderDescription(planet.description);
  renderProjects(planet.projects ?? []);

  embedWrapper.innerHTML = '';

  const element = document.createElement('lite-youtube');

  element.setAttribute('playlabel', planet.song);
  element.setAttribute('videoid', planet.youtubeId);
  element.style.width = '100%';
  embedWrapper.append(element);

  modal.showModal();
};

const clickablePlanets = document.querySelectorAll<HTMLElement>('[data-planet-id]');

const closeWithAnimation = (): void => {
  modal.classList.add('closing');
  modal.addEventListener('animationend', () => {
    modal.close();
    modal.classList.remove('closing');
  }, { once: true });
};

const openPlanetFromElement = (element: HTMLElement): void => {
  const id = element.dataset.planetId;
  if (id) openPlanet(id);
};

clickablePlanets.forEach((element) => {
  element.addEventListener('click', () => openPlanetFromElement(element));
  element.addEventListener('keydown', (event: KeyboardEvent) => {
    const isActivationKey = event.key === ENTER_KEY || event.key === SPACE_KEY;

    if (isActivationKey) {
      event.preventDefault();
      openPlanetFromElement(element);
    }
  });
});

closeButton?.addEventListener('click', closeWithAnimation);

modal.addEventListener('click', (event: MouseEvent) => {
  const rect = modal.getBoundingClientRect();
  const isVerticallyInside =
    rect.top <= event.clientY && event.clientY <= rect.top + rect.height;
  const isHorizontallyInside =
    rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
  const isInDialog = isVerticallyInside && isHorizontallyInside;

  if (!isInDialog) {
    closeWithAnimation();
  }
});

modal.addEventListener('cancel', (event: Event) => {
  event.preventDefault();
  closeWithAnimation();
});
