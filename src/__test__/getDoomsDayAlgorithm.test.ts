import getDoomsDayAlgorithm from '../getDoomsDayAlgorithm'

test('function getDoomsDayAlgorithm', () => {
  expect(getDoomsDayAlgorithm(2000)).toBe(2)
  expect(getDoomsDayAlgorithm(2010)).toBe(0)
  expect(getDoomsDayAlgorithm(2028)).toBe(2)
  expect(getDoomsDayAlgorithm(2033)).toBe(1)
  expect(getDoomsDayAlgorithm(2047)).toBe(4)
  expect(getDoomsDayAlgorithm(2055)).toBe(0)
})
