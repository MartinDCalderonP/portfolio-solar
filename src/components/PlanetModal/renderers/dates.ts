const MONTH_RANK: Record<string, number> = {
  Enero: 1,
  Febrero: 2,
  Marzo: 3,
  Abril: 4,
  Mayo: 5,
  Junio: 6,
  Julio: 7,
  Agosto: 8,
  Septiembre: 9,
  Octubre: 10,
  Noviembre: 11,
  Diciembre: 12,
};

const DATE_RANK_MULTIPLIER = 100;

const getDateRank = (date: string): number => {
  const [month, year] = date.split(' ');

  return Number.parseInt(year) * DATE_RANK_MULTIPLIER + (MONTH_RANK[month] ?? 0);
};

export { getDateRank };
