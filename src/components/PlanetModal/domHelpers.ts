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
  obj: unknown
}

const getProp = ({ key, obj }: GetPropParams): unknown => {
  const isInvalidObject = typeof obj !== 'object' || obj === null

  if (isInvalidObject) return undefined

  return (obj as Record<string, unknown>)[key]
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
    (key) => typeof getProp({ key, obj: value }) === 'string'
  )
}

interface ParsePlanetsParams {
  data: string
}

const parsePlanets = ({ data }: ParsePlanetsParams): PlanetContent[] => {
  const parsed: unknown = JSON.parse(data)

  if (!Array.isArray(parsed))
    throw new TypeError('Planets data must be an array')

  const result: PlanetContent[] = []

  for (const item of parsed as unknown[]) {
    if (!isPlanetContent({ value: item }))
      throw new TypeError('Invalid planet data in dataset')

    result.push(item as PlanetContent)
  }

  return result
}

export { getDialogElement, getElementOrThrow, parsePlanets }
