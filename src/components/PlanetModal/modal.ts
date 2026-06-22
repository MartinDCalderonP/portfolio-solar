import '@justinribeiro/lite-youtube';
import '../Chip/Chip.css';
import '../LinkButton/LinkButton.css';

import type { PlanetContent, Project } from '../../data/portfolio';

const ENTER_KEY = 'Enter';
const SPACE_KEY = ' ';
const SPOTIFY_HOST = 'open.spotify.com';
const LINKEDIN_HOST = 'linkedin.com';
const TWITTER_HOSTS = ['x.com', 'twitter.com'];
const GITHUB_HOST = 'github.com';
const MAIL_PROTOCOL = 'mailto:';

const LINK_LABELS: Record<string, string> = {
  spotify: 'Escuchar en Spotify 🎙️',
  linkedin: 'LinkedIn 🔗',
  twitter: 'X / Twitter 🐦',
  github: 'GitHub 🔗',
  email: 'Enviar correo 📧',
  default: 'Ver proyecto 🔗',
};

const getLinkLabel = (link: string): string => {
  if (link.includes(SPOTIFY_HOST)) return LINK_LABELS.spotify;
  if (link.includes(LINKEDIN_HOST)) return LINK_LABELS.linkedin;
  if (TWITTER_HOSTS.some((host) => link.includes(host))) return LINK_LABELS.twitter;
  if (link.includes(GITHUB_HOST)) return LINK_LABELS.github;
  if (link.startsWith(MAIL_PROTOCOL)) return LINK_LABELS.email;

  return LINK_LABELS.default;
};

const createLinkElement = (link: string): HTMLAnchorElement => {
  const element = document.createElement('a');

  element.className = 'link-button';
  element.href = link;
  element.rel = 'noopener noreferrer';
  element.target = '_blank';
  element.textContent = getLinkLabel(link);

  return element;
};

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

const createProjectCard = ({
  description,
  link,
  logo,
  title,
  year,
}: Project): HTMLElement => {
  if (!year && link) {
    return createLinkElement(link);
  }

  if (!year && !link) {
    const chip = document.createElement('span');

    chip.className = 'chip';

    const titleSpan = document.createTextNode(title);
    const levelSpan = document.createElement('span');

    levelSpan.className = 'chip-level';
    levelSpan.textContent = description ?? '';

    chip.append(titleSpan, levelSpan);
    return chip;
  }

  const card = document.createElement('div');

  card.className = 'project-card';

  if (logo) {
    const imageWrapper = document.createElement('div');

    imageWrapper.className = 'project-card-image';

    const image = document.createElement('img');

    image.alt = title;
    image.src = logo;
    imageWrapper.append(image);
    card.append(imageWrapper);
  }

  const body = document.createElement('div');

  body.className = 'project-card-body';

  const titleEl = document.createElement('div');

  titleEl.className = 'project-card-title';
  titleEl.textContent = `${title} (${year})`;
  body.append(titleEl);

  const descriptionEl = document.createElement('div');

  descriptionEl.className = 'project-card-description';
  descriptionEl.textContent = description ?? null;
  body.append(descriptionEl);

  if (link) {
    body.append(createLinkElement(link));
  }

  card.append(body);

  return card;
};

const renderProjects = (projects: Project[]): void => {
  modalProjects.innerHTML = '';

  const sortedProjects = [...projects].sort(({ year: a }, { year: b }) => (b ?? 0) - (a ?? 0));

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
