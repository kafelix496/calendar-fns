import getDoomsDayAlgorithm from './getDoomsDayAlgorithm'
import isLeapYear from './isLeapYear'

interface Rtn {
  day: number
  daysOfTheWeek: number
}

const getDoomsDay = (month: number, year: number): Rtn => {
  if (
    year < 0 ||
    !Number.isInteger(year) ||
    month < 1 ||
    month > 12 ||
    !Number.isInteger(month)
  ) {
    throw new TypeError('Unexpected input!')
  }

  const daysOfTheWeek = getDoomsDayAlgorithm(year)

  switch (month) {
    case 1: {
      const leapYearError = isLeapYear(year) ? 1 : 0

      return { day: 3 + leapYearError, daysOfTheWeek }
    }
    case 2: {
      const leapYearError = isLeapYear(year) ? 1 : 0

      return { day: 7 + leapYearError, daysOfTheWeek }
    }
    case 3: {
      return { day: 7, daysOfTheWeek }
    }
    case 4:
    case 6:
    case 8:
    case 10:
    case 12: {
      return { day: month, daysOfTheWeek }
    }
    case 5: {
      return { day: 9, daysOfTheWeek }
    }
    case 7: {
      return { day: 11, daysOfTheWeek }
    }
    case 9: {
      return { day: 5, daysOfTheWeek }
    }
    case 11: {
      return { day: 7, daysOfTheWeek }
    }
    default: {
      throw new TypeError('Unexpected input!')
    }
  }
}

export default getDoomsDay
