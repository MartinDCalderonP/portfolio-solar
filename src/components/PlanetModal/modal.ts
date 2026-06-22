import '@justinribeiro/lite-youtube';

import type { PlanetContent } from '../../data/portfolio';

import { renderDescription } from './renderers/description';
import { renderExperiences } from './renderers/experiences';
import { renderProjects } from './renderers/projects';
import { ARROW_LEFT, ARROW_RIGHT, navigateTo } from './navigation';
import { setupPlanetTriggers } from './planet-setup';

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
const modalExperiences = getElementOrThrow('modal-experiences');
const closeButton = document.getElementById('modal-close');
const embedWrapper = getElementOrThrow('embed-wrapper');
const prevButton = document.getElementById('modal-nav-prev');
const nextButton = document.getElementById('modal-nav-next');
let currentPlanetIndex = -1;

const animateClose = (onEnd?: () => void): void => {
  modal.classList.add('closing');
  modal.addEventListener('animationend', () => {
    modal.close();
    modal.classList.remove('closing');
    onEnd?.();
  }, { once: true });
};

const closeWithAnimation = (): void => animateClose();

const goPrev = (): void => {
  currentPlanetIndex = navigateTo(-1, currentPlanetIndex, planets, modal, openPlanet);
};

const goNext = (): void => {
  currentPlanetIndex = navigateTo(1, currentPlanetIndex, planets, modal, openPlanet);
};

const createYouTubeEmbed = (videoId: string, label: string): HTMLElement => {
  const element = document.createElement('lite-youtube');

  element.setAttribute('playlabel', label);
  element.setAttribute('videoid', videoId);
  element.style.width = '100%';

  return element;
};

const openPlanet = (id: string): void => {
  const index = planets.findIndex(({ id: planetId }) => planetId === id);

  if (index === -1) return;

  currentPlanetIndex = index;
  const { description, experiences, name, projects, song, title, youtubeId } = planets[index];

  modalTitle.textContent = name;
  modalSubtitle.textContent = title;
  modalProjects.innerHTML = '';
  modalExperiences.innerHTML = '';
  renderDescription(modalDescription, description);
  renderProjects(modalProjects, projects ?? []);
  renderExperiences(modalExperiences, experiences ?? []);

  embedWrapper.innerHTML = '';
  embedWrapper.append(createYouTubeEmbed(youtubeId, song));

  modal.showModal();
};

setupPlanetTriggers(openPlanet);

closeButton?.addEventListener('click', closeWithAnimation);

prevButton?.addEventListener('click', (event: MouseEvent) => {
  event.stopPropagation();
  goPrev();
});
nextButton?.addEventListener('click', (event: MouseEvent) => {
  event.stopPropagation();
  goNext();
});

modal.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === ARROW_LEFT) {
    event.preventDefault();
    goPrev();
  }
  if (event.key === ARROW_RIGHT) {
    event.preventDefault();
    goNext();
  }
});

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
