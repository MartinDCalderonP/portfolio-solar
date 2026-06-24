import type { PlanetContent, Project } from '@/types'

const projects: Project[] = [
  {
    id: 'contacto-linkedin',
    links: ['https://www.linkedin.com/in/martincalderon92'],
    title: 'LinkedIn'
  },
  {
    id: 'contacto-x',
    links: ['https://x.com/martomartian'],
    title: 'X / Twitter'
  },
  {
    id: 'contacto-github',
    links: ['https://github.com/MartinDCalderonP'],
    title: 'GitHub'
  },
  {
    id: 'contacto-email',
    links: ['mailto:martincalderon92@outlook.com'],
    title: 'Correo electrónico'
  }
]

export const planet: PlanetContent = {
  colorVar: 'var(--color-neptune)',
  description:
    'Acá es donde el sistema solar se encuentra con el mundo real. Si algo de lo que viste te generó curiosidad, ganas de colaborar o simplemente querés charlar de sobre algunas ideas, estas son las vías. No importa si es un proyecto, un trabajo o una pregunta random, trataré de contestarte a la brevedad. 📡',
  id: 'neptune',
  name: 'Neptuno',
  orbitVar: 'var(--orbit-neptune)',
  projects,
  size: '18px',
  song: 'Sal - Cerati',
  title: 'Contacto',
  youtubeId: '50j63cIBcvs'
}
