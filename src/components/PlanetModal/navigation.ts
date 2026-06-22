import type { PlanetContent } from '../../data/portfolio';

const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

const navigateTo = (
  direction: number,
  currentIndex: number,
  planets: PlanetContent[],
  modal: HTMLDialogElement,
  onOpenPlanet: (id: string) => void,
): number => {
  const totalPlanets = planets.length;
  const nextIndex = (currentIndex + direction + totalPlanets) % totalPlanets;
  const nextId = planets[nextIndex].id;

  modal.classList.add('closing');
  modal.addEventListener('animationend', () => {
    modal.close();
    modal.classList.remove('closing');
    onOpenPlanet(nextId);
  }, { once: true });

  return nextIndex;
};

export { ARROW_LEFT, ARROW_RIGHT, navigateTo };
