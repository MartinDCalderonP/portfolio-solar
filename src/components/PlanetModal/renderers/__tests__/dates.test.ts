import { getDateRank } from '../dates'

const CASES = [
  { date: 'Present', expected: Infinity },
  { date: 'present', expected: Infinity },
  { date: 'March 2020', expected: 2020 * 12 + 2 },
  { date: 'January 2023', expected: 2023 * 12 + 0 },
  { date: 'December 2025', expected: 2025 * 12 + 11 },
  { date: 'Unknown 2020', expected: 2020 * 12 + 0 }
]

test.each(CASES)(
  'getDateRank({ date: $date }) returns $expected',
  ({ date, expected }) => {
    expect(getDateRank({ date })).toBe(expected)
  }
)
