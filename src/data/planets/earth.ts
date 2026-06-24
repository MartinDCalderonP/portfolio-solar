import type { PlanetContent, Project } from '../../types'

const projects: Project[] = [
  {
    description:
      'Licenciatura en Ciencias de la Comunicación Social en la Facultad de Ciencias Sociales (FSoc) de la UBA. Formación en comunicación, publicidad y análisis del discurso. 2019 - En curso.',
    id: 'uba-comunicacion',
    title: 'Universidad de Buenos Aires (UBA)',
    year: 2026,
  },
  {
    description:
      'ET N°17 DE 13 Brigadier General Cornelio Saavedra. Formación técnica en construcción, diseño arquitectónico y planos. 2006 - 2012.',
    id: 'maestro-mayor-obras',
    title: 'Maestro Mayor de Obras',
    year: 2012,
  },
  {
    description:
      'Centro de Educación No Formal Venezuela. Formación técnica en sistemas de refrigeración y climatización. 2018.',
    id: 'refrigeracion',
    title: 'Técnico Superior en Sistemas de Refrigeración',
    year: 2018,
  },
]

export const planet: PlanetContent = {
  colorVar: 'var(--color-earth)',
  description:
    'Recorrido académico que construyó mi base creativa y estratégica. 🎓',
  id: 'earth',
  name: 'Tierra',
  orbitVar: 'var(--orbit-earth)',
  projects,
  size: '24px',
  song: 'Piedra en el Agua - Karamelo Santo',
  title: 'Formación',
  youtubeId: 'AWGhln9_7_s',
}
