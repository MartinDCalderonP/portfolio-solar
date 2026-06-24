import type { PlanetContent } from '@/types'
import { planet as earth } from './earth'
import { planet as jupiter } from './jupiter'
import { planet as mars } from './mars'
import { planet as mercury } from './mercury'
import { planet as neptune } from './neptune'
import { planet as saturn } from './saturn'
import { planet as sun } from './sun'
import { planet as uranus } from './uranus'
import { planet as venus } from './venus'

export const planets: PlanetContent[] = [
  sun,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune
]
