const MONTH_RANK: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
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
