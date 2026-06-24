import type { PlanetContent } from '@/types'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    description:
      'Este mismo portfolio. Un sistema solar interactivo donde cada planeta representa una sección de mi perfil. Construido con Astro (no podía ser de otra manera) y TypeScript.',
    id: 'portfolio-solar',
    links: [
      'https://portfolio-solar-martin-calderon.vercel.app/',
      'https://www.youtube.com/playlist?list=PLgVa3U5E3U_v9arQnKK9kHmyELGVs9tIB',
      'https://drive.google.com/drive/folders/1rD5LosbXPNbhz7V5jRzSbqWBuGL4dPZV?usp=sharing',
      'https://github.com/MartinDCalderonP/portfolio-solar'
    ],
    title: 'Portfolio Solar',
    year: 2026
  },
  {
    description:
      'Web que diseñé con notas periodísticas que redacté para la Agencia de Noticias de la Carrera de Comunicación (ANCCom) de la UBA. Construida con Astro.',
    id: 'news-portfolio',
    links: ['https://news-martin-calderon.vercel.app/'],
    title: 'News Portfolio',
    year: 2025
  },
  {
    description:
      'Podcast de 3 episodios sobre la Primera, Segunda y la posibilidad de una Tercera Guerra Mundial. Proyecto grupal final para Taller de Expresión III (Cátedra: María Rosa Gómez). Idea original, locución, concepto y diseño general.',
    id: 'contienda-podcast',
    links: ['https://open.spotify.com/show/3GUR3yx5rygh92ARyanxdL'],
    title: 'Contienda Podcast',
    year: 2023
  },
  {
    description:
      'Documental sobre un taller mecánico en Lanús. Proyecto grupal para Taller de Expresión II (Cátedra: De Carli). Idea y concepto general.',
    id: 'chapa-a-mano',
    links: [
      'https://drive.google.com/file/d/1RKms5kvMDvWDJdBoKkCyF8Cg9ncNXIhi/view?usp=sharing'
    ],
    title: 'Chapa a Mano',
    year: 2022
  },
  {
    description:
      'Diseño arquitectónico para un centro cultural. Trabajo para la materia Proyectos II. Desarrollo completo de planos y memoria descriptiva.',
    id: 'centro-cultural',
    links: [
      'https://drive.google.com/file/d/1UHkW02PR58wk_SO7qcQiRb6WwC81k_AT/view?usp=sharing'
    ],
    title: 'Centro Cultural',
    year: 2016
  },
  {
    description:
      'Clon de YouTube con ReactJS y Material UI. Buscá videos, explorá canales y reproducí contenido usando la API de YouTube. Tema oscuro y responsive.',
    id: 'youtube-clone',
    links: [
      'https://clone-6c8d2.web.app/',
      'https://github.com/MartinDCalderonP/YouTube-Clone'
    ],
    title: 'YouTube Clone',
    year: 2021
  }
]

export const planet: PlanetContent = {
  colorVar: 'var(--color-mercury)',
  description:
    'Proyectos académicos y personales que fui haciendo a lo largo de la carrera y que reflejan distintas facetas de mi formación como comunicador. 🏗️',
  id: 'mercury',
  name: 'Mercurio',
  orbitVar: 'var(--orbit-mercury)',
  projects,
  size: '16px',
  song: 'Mr. Bad Guy - Freddie Mercury',
  title: 'Proyectos destacados',
  youtubeId: 'v_Mb25ASCr8'
}
