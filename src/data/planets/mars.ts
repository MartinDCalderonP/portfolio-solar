import type { PlanetContent, Project } from '@/types'

const projects: Project[] = [
  {
    description:
      'Diseño asistido por computadora para proyectos arquitectónicos.',
    id: 'autocad',
    logo: '/logos/autocad.png',
    title: 'AutoCAD',
    year: 2008
  },
  {
    description:
      'Escritura de columnas y artículos de opinión para medios digitales e impresos.',
    id: 'redaccion-opinion',
    title: 'Redacción de textos de opinión',
    year: 2012
  },
  {
    description: 'Programación orientada a objetos.',
    id: 'java',
    logo: '/logos/java.png',
    title: 'Java',
    year: 2018
  },
  {
    description: 'Desarrollo web dinámico e interactivo.',
    id: 'javascript',
    logo: '/logos/javascript.png',
    title: 'JavaScript',
    year: 2019
  },
  {
    description: 'Desarrollo de interfaces web modernas.',
    id: 'react',
    logo: '/logos/react.png',
    title: 'React',
    year: 2020
  },
  {
    description: 'Edición y producción de audio.',
    id: 'audacity',
    logo: '/logos/audacity.png',
    title: 'Audacity',
    year: 2021
  },
  {
    description: 'Desarrollo de conceptos e ideas para campañas y proyectos.',
    id: 'conceptualizacion',
    title: 'Conceptualización creativa',
    year: 2022
  },
  {
    description:
      'Redacción de noticias, crónicas y contenido editorial para distintos soportes.',
    id: 'redaccion-periodistica',
    title: 'Redacción de textos periodísticos',
    year: 2022
  },
  {
    description:
      'Coordinación y gestión de equipos en proyectos multidisciplinarios.',
    id: 'liderazgo',
    title: 'Liderazgo de equipos de trabajo',
    year: 2022
  },
  {
    description: 'Redacción publicitaria y creativa.',
    id: 'copywriting',
    title: 'Copywriting',
    year: 2023
  },
  {
    description: 'Locución y narración para proyectos audiovisuales.',
    id: 'locucion',
    title: 'Locución',
    year: 2023
  },
  {
    description: 'Nativo',
    id: 'espanol',
    title: 'Español'
  },
  {
    description: 'Nivel avanzado · Certificado EF SET C2 Proficient',
    id: 'ingles',
    title: 'Inglés'
  },
  {
    description: 'Nivel intermedio',
    id: 'portugues',
    title: 'Portugués'
  },
  {
    description: 'Nivel básico',
    id: 'frances',
    title: 'Francés'
  },
  {
    description: '74/100 (C2 Proficient). Certificación de nivel de inglés.',
    id: 'cert-ef-set',
    title: 'EF SET English Certificate',
    year: 2022
  },
  {
    description:
      'Gobierno de la Ciudad de Buenos Aires. Aptitudes: Python, lenguajes de programación.',
    id: 'cert-full-stack-python',
    title: 'Curso Full Stack Python',
    year: 2020
  },
  {
    description: 'CertiProf. Metodologías ágiles y gestión de proyectos.',
    id: 'cert-scrum',
    title: 'Scrum Foundations Professional Certificate (SFPC)',
    year: 2020
  },
  {
    description: 'Comunidad IT. Desarrollo de interfaces web con React.',
    id: 'cert-react',
    title: 'Curso de React',
    year: 2020
  },
  {
    description: 'British Council. Curso de inglés nivel intermedio.',
    id: 'cert-british-council',
    title: 'LearnEnglish Select Blended Intermediate',
    year: 2020
  },
  {
    description: 'KODOTI. Control de versiones y trabajo colaborativo.',
    id: 'cert-git',
    title: 'Introducción a Git',
    year: 2020
  },
  {
    description:
      'Gobierno de la Ciudad de Buenos Aires. Aptitudes: lenguajes de programación.',
    id: 'cert-desarrollo-web',
    title: 'Curso de Desarrollo Web',
    year: 2019
  },
  {
    description:
      'Gobierno de la Ciudad de Buenos Aires. Aptitudes: Java, lenguajes de programación.',
    id: 'cert-codo-a-codo',
    title: 'Codo a Codo',
    year: 2018
  },
  {
    description:
      'Gobierno de la Ciudad de Buenos Aires. Fabricación digital y modelado 3D.',
    id: 'cert-impresion-3d',
    title: 'Curso de Impresión 3D',
    year: 2018
  }
]

export const planet: PlanetContent = {
  colorVar: 'var(--color-mars)',
  description:
    'El nombre Martín proviene del latín Martinus, derivado de Marte (el dios romano de la guerra, sincretizado con el Ares griego). Su significado es "consagrado a Marte" o "belicoso". Estas son mis armas, entre otras. ⚒️',
  id: 'mars',
  name: 'Marte',
  orbitVar: 'var(--orbit-mars)',
  projects,
  size: '28px',
  song: 'I Turned into a Martian - Misfits',
  title: 'Skills & Herramientas',
  youtubeId: '9vaA8WTzmSo'
}
