import getDoomsDay from './getDoomsDay'

const getDayOfWeek = (day: number, month: number, year: number): number => {
  if (
    year < 0 ||
    !Number.isInteger(year) ||
    month < 1 ||
    month > 12 ||
    !Number.isInteger(month) ||
    day < 0 ||
    !Number.isInteger(day)
  ) {
    throw new TypeError('Unexpected input!')
  }

  const doomsDay = getDoomsDay(month, year)

  return (doomsDay.daysOfTheWeek + (day - doomsDay.day) + 35) % 7
}

export default getDayOfWeek
