import getAnchorDay from './getAnchorDay'

const getDoomsDayAlgorithm = (year: number): number => {
  if (year < 0 || !Number.isInteger(year)) {
    throw new TypeError('Unexpected input!')
  }

  let daysOfTheWeek = getAnchorDay(year)

  const a = year % 100

  daysOfTheWeek += Math.trunc(a / 12)

  const b = a % 12

  daysOfTheWeek += b

  const c = Math.trunc(b / 4)

  daysOfTheWeek += c

  daysOfTheWeek %= 7

  return daysOfTheWeek
}

export default getDoomsDayAlgorithm
