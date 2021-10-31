import getDaysLengthOfMonth from '../getDaysLengthOfMonth'

describe('function getDaysLengthOfMonth', () => {
  test('2020', () => {
    expect(getDaysLengthOfMonth(1, 2020)).toBe(31)
    expect(getDaysLengthOfMonth(2, 2020)).toBe(29)
    expect(getDaysLengthOfMonth(3, 2020)).toBe(31)
    expect(getDaysLengthOfMonth(4, 2020)).toBe(30)
    expect(getDaysLengthOfMonth(5, 2020)).toBe(31)
    expect(getDaysLengthOfMonth(6, 2020)).toBe(30)
    expect(getDaysLengthOfMonth(7, 2020)).toBe(31)
    expect(getDaysLengthOfMonth(8, 2020)).toBe(31)
    expect(getDaysLengthOfMonth(9, 2020)).toBe(30)
    expect(getDaysLengthOfMonth(10, 2020)).toBe(31)
    expect(getDaysLengthOfMonth(11, 2020)).toBe(30)
    expect(getDaysLengthOfMonth(12, 2020)).toBe(31)
  })

  test('2021', () => {
    expect(getDaysLengthOfMonth(1, 2021)).toBe(31)
    expect(getDaysLengthOfMonth(2, 2021)).toBe(28)
    expect(getDaysLengthOfMonth(3, 2021)).toBe(31)
    expect(getDaysLengthOfMonth(4, 2021)).toBe(30)
    expect(getDaysLengthOfMonth(5, 2021)).toBe(31)
    expect(getDaysLengthOfMonth(6, 2021)).toBe(30)
    expect(getDaysLengthOfMonth(7, 2021)).toBe(31)
    expect(getDaysLengthOfMonth(8, 2021)).toBe(31)
    expect(getDaysLengthOfMonth(9, 2021)).toBe(30)
    expect(getDaysLengthOfMonth(10, 2021)).toBe(31)
    expect(getDaysLengthOfMonth(11, 2021)).toBe(30)
    expect(getDaysLengthOfMonth(12, 2021)).toBe(31)
  })
})
