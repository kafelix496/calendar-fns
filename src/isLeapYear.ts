const isLeapYear = (year: number): boolean => {
  if (year < 0 || !Number.isInteger(year)) {
    throw new TypeError('Unexpected input!')
  }

  if (year % 400 === 0) {
    return true
  }

  if (year % 100 === 0) {
    return false
  }

  if (year % 4 === 0) {
    return true
  }

  return false
}

export default isLeapYear
