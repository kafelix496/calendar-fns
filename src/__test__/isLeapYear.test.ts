import isLeapYear from '../isLeapYear'

test('function isLeapYear', () => {
  expect(isLeapYear(1200)).toBe(true)
  expect(isLeapYear(1300)).toBe(false)
  expect(isLeapYear(1400)).toBe(false)
  expect(isLeapYear(2000)).toBe(true)
  expect(isLeapYear(2010)).toBe(false)
  expect(isLeapYear(2028)).toBe(true)
  expect(isLeapYear(2033)).toBe(false)
  expect(isLeapYear(2047)).toBe(false)
  expect(isLeapYear(2055)).toBe(false)
})
