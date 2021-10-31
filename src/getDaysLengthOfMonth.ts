import isLeapYear from './isLeapYear'

const getDaysLengthOfMonth = (
  month: number,
  year: number
): 28 | 29 | 30 | 31 => {
  if (
    year < 0 ||
    !Number.isInteger(year) ||
    month < 1 ||
    month > 12 ||
    !Number.isInteger(month)
  ) {
    throw new TypeError('Unexpected input!')
  }

  switch (month) {
    case 1: {
      return 31
    }
    case 2: {
      return isLeapYear(year) ? 29 : 28
    }
    case 3: {
      return 31
    }
    case 4: {
      return 30
    }
    case 5: {
      return 31
    }
    case 6: {
      return 30
    }
    case 7: {
      return 31
    }
    case 8: {
      return 31
    }
    case 9: {
      return 30
    }
    case 10: {
      return 31
    }
    case 11: {
      return 30
    }
    case 12: {
      return 31
    }
    default: {
      throw new TypeError('Unexpected input!')
    }
  }
}

export default getDaysLengthOfMonth
