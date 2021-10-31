import getDayOfWeek from '../getDayOfWeek'

test('function getDayOfWeek', () => {
  expect(getDayOfWeek(15, 6, 2021)).toBe(2)
  expect(getDayOfWeek(2, 7, 2021)).toBe(5)
  expect(getDayOfWeek(10, 10, 2143)).toBe(4)
  expect(getDayOfWeek(28, 4, 1739)).toBe(2)
})
