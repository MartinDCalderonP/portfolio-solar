export interface Experience {
  description?: string
  endDate: string
  id: string
  startDate: string
  title: string
}

export interface Project {
  description?: string
  id: string
  links?: string[]
  logo?: string
  title: string
  year?: number
}

export interface PlanetContent {
  colorVar: string
  description: string
  experiences?: Experience[]
  id: string
  image?: string
  name: string
  orbitVar: string
  projects?: Project[]
  size: string
  song: string
  title: string
  youtubeId: string
}
