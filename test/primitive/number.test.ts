import { isBetween, isIdentical, isNaN, isNumber } from '../../lib/primitive/number'

describe('Number', function () {
  describe('isNumber', function () {
    test('number', function () {
      expect(isNumber(Number())).toStrictEqual(true)
    })

    test('1', function () {
      expect(isNumber(1)).toStrictEqual(true)
    })

    test('0', function () {
      expect(isNumber(0)).toStrictEqual(true)
    })

    test('-1', function () {
      expect(isNumber(-1)).toStrictEqual(true)
    })

    test('1.0001', function () {
      expect(isNumber(1.0001)).toStrictEqual(true)
    })

    test('0.0001', function () {
      expect(isNumber(0.0001)).toStrictEqual(true)
    })

    test('-1.0001', function () {
      expect(isNumber(-1.0001)).toStrictEqual(true)
    })

    test('String(1)', function () {
      expect(isNumber(String(1))).toStrictEqual(false)
    })
  })

  // isNaN is used to check the type but not the value
  // string number should return NaN as well
  describe('isNaN', function () {
    test('string', function () {
      expect(isNaN(String(1))).toStrictEqual(true)
    })

    test('null', function () {
      expect(isNaN(null)).toStrictEqual(true)
    })

    test('undefined', function () {
      expect(isNaN(undefined)).toStrictEqual(true)
    })

    test('number', function () {
      expect(isNaN(Number())).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('number | number', function () {
      expect(isIdentical(Number(), Number())).toStrictEqual(true)
    })

    test('1 | 1', function () {
      expect(isIdentical(1, 1)).toStrictEqual(true)
    })

    test('0 | 0', function () {
      expect(isIdentical(0, 0)).toStrictEqual(true)
    })

    test('1 | true', function () {
      expect(isIdentical(1, true)).toStrictEqual(false)
    })

    test('0 | false', function () {
      expect(isIdentical(1, false)).toStrictEqual(false)
    })

    test('0 | null', function () {
      expect(isIdentical(1, null)).toStrictEqual(false)
    })

    test('0 | undefined', function () {
      expect(isIdentical(1, undefined)).toStrictEqual(false)
    })
  })

  describe('inRange', function () {
    test('value', function () {
      expect(isBetween('abc', 1, 2)).toStrictEqual(false)
    })

    test('min', function () {
      expect(isBetween(1, 'abc', 2)).toStrictEqual(false)
    })

    test('max', function () {
      expect(isBetween(1, 2, 'abc')).toStrictEqual(false)
    })

    test('value below min', function () {
      expect(isBetween(0, 1, 10)).toStrictEqual(false)
    })

    test('value larger max', function () {
      expect(isBetween(11, 1, 10)).toStrictEqual(false)
    })

    test('value in range', function () {
      expect(isBetween(5, 1, 10)).toStrictEqual(true)
    })
  })
})
