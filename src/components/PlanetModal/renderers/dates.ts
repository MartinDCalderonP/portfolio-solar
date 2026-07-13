const MONTH_RANK: Record<string, number> = {
  Enero: 0,
  Febrero: 1,
  Marzo: 2,
  Abril: 3,
  Mayo: 4,
  Junio: 5,
  Julio: 6,
  Agosto: 7,
  Septiembre: 8,
  Octubre: 9,
  Noviembre: 10,
  Diciembre: 11
}

interface GetDateRankParams {
  date: string
}

const getDateRank = ({ date }: GetDateRankParams): number => {
  if (date.toLowerCase() === 'present') return Infinity

  const [month, year] = date.split(' ')
  const yearRank = Number.parseInt(year, 10)
  const monthRank = MONTH_RANK[month] ?? 0

  return yearRank * 12 + monthRank
}

export { getDateRank }
