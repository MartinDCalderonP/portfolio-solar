import { getDateRank } from '../dates'

const CASES = [
  { date: 'Present', expected: Infinity },
  { date: 'present', expected: Infinity },
  { date: 'Marzo 2020', expected: 2020 * 12 + 2 },
  { date: 'Enero 2023', expected: 2023 * 12 + 0 },
  { date: 'Diciembre 2025', expected: 2025 * 12 + 11 },
  { date: 'Unknown 2020', expected: 2020 * 12 + 0 },
  { date: 'Octubre 2025', expected: 2025 * 12 + 9 },
  { date: 'Enero 2012', expected: 2012 * 12 + 0 },
  { date: 'Junio 2023', expected: 2023 * 12 + 5 }
]

test.each(CASES)(
  'getDateRank({ date: $date }) returns $expected',
  ({ date, expected }) => {
    expect(getDateRank({ date })).toBe(expected)
  }
)
