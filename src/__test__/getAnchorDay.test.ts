import getAnchorDay from '../getAnchorDay'

describe('function getAnchorDay', () => {
  test('case 01', () => {
    expect(getAnchorDay(2000)).toBe(2)
    expect(getAnchorDay(2040)).toBe(2)
    expect(getAnchorDay(1665)).toBe(2)
  })
  test('case 02', () => {
    expect(getAnchorDay(2150)).toBe(0)
    expect(getAnchorDay(2168)).toBe(0)
    expect(getAnchorDay(1749)).toBe(0)
  })
  test('case 03', () => {
    expect(getAnchorDay(2269)).toBe(5)
    expect(getAnchorDay(2224)).toBe(5)
    expect(getAnchorDay(1834)).toBe(5)
  })
  test('case 04', () => {
    expect(getAnchorDay(1900)).toBe(3)
    expect(getAnchorDay(1940)).toBe(3)
    expect(getAnchorDay(1580)).toBe(3)
  })
})
