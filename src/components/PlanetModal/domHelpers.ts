import type { PlanetContent } from '@/types'

interface GetElementOrThrowParams {
  id: string
}

const getElementOrThrow = ({ id }: GetElementOrThrowParams): HTMLElement => {
  const element = document.getElementById(id)

  if (!element) throw new Error(`Element #${id} not found`)

  return element
}

interface GetDialogElementParams {
  id: string
}

const getDialogElement = ({
  id
}: GetDialogElementParams): HTMLDialogElement => {
  const element = document.getElementById(id)

  if (!(element instanceof HTMLDialogElement))
    throw new TypeError(`Element #${id} is not a dialog`)

  return element
}

interface GetPropParams {
  key: string
  targetObject: unknown
}

const getProp = ({ key, targetObject }: GetPropParams): unknown => {
  const isInvalidObject =
    typeof targetObject !== 'object' || targetObject === null

  if (isInvalidObject) return undefined

  return (targetObject as Record<string, unknown>)[key]
}

const REQUIRED_STRING_KEYS = [
  'colorVar',
  'description',
  'id',
  'name',
  'orbitVar',
  'size',
  'song',
  'title',
  'youtubeId'
] as const

interface IsPlanetContentParams {
  value: unknown
}

const isPlanetContent = ({ value }: IsPlanetContentParams): boolean => {
  return REQUIRED_STRING_KEYS.every(
    (key) => typeof getProp({ key, targetObject: value }) === 'string'
  )
}

interface ParsePlanetsParams {
  planetsJson: string
}

const parsePlanets = ({ planetsJson }: ParsePlanetsParams): PlanetContent[] => {
  const parsed: unknown = JSON.parse(planetsJson)

  if (!Array.isArray(parsed))
    throw new TypeError('Planets data must be an array')

  const validPlanets: PlanetContent[] = []

  for (const item of parsed as unknown[]) {
    if (!isPlanetContent({ value: item }))
      throw new TypeError('Invalid planet data in dataset')

    validPlanets.push(item as PlanetContent)
  }

  return validPlanets
}

export { getDialogElement, getElementOrThrow, parsePlanets }
