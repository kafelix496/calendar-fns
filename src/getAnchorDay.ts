const getAnchorDay = (year: number): 2 | 0 | 5 | 3 => {
  if (year < 0 || !Number.isInteger(year)) {
    throw new TypeError('Unexpected input!')
  }

  const restNumber = year % 400

  if (restNumber < 100) {
    return 2
  }

  if (restNumber < 200) {
    return 0
  }

  if (restNumber < 300) {
    return 5
  }

  return 3
}

export default getAnchorDay
