const ENTER_KEY = 'Enter';
const SPACE_KEY = ' ';

const setupPlanetTriggers = (openPlanet: (id: string) => void): void => {
  const clickablePlanets = document.querySelectorAll<HTMLElement>('[data-planet-id]');

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
};

export { setupPlanetTriggers };
