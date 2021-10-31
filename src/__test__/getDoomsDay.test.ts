import getDoomsDay from '../getDoomsDay'

test('function getDoomsDay', () => {
  expect(getDoomsDay(6, 2021)).toEqual({ day: 6, daysOfTheWeek: 0 })
  expect(getDoomsDay(7, 2021)).toEqual({ day: 11, daysOfTheWeek: 0 })
  expect(getDoomsDay(10, 2143)).toEqual({ day: 10, daysOfTheWeek: 4 })
  expect(getDoomsDay(4, 1739)).toEqual({ day: 4, daysOfTheWeek: 6 })
})
