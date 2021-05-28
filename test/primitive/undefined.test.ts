import { isIdentical, isUndefined } from '../../lib/primitive/undefined'

describe('Undefined', function () {
  describe('isUndefined', function () {
    test('undefined', function () {
      expect(isUndefined(undefined)).toStrictEqual(true)
    })

    test('null', function () {
      expect(isUndefined(null)).toStrictEqual(false)
    })

    test('0', function () {
      expect(isUndefined(0)).toStrictEqual(false)
    })

    test('emptry string', function () {
      expect(isUndefined('')).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('undefined | undefined', function () {
      expect(isIdentical(undefined, undefined)).toStrictEqual(true)
    })

    test('null | undefined', function () {
      expect(isIdentical(null, undefined)).toStrictEqual(false)
    })

    test('0 | undefined', function () {
      expect(isIdentical(0, undefined)).toStrictEqual(false)
    })

    test('empty string | undefined', function () {
      expect(isIdentical('', undefined)).toStrictEqual(false)
    })
  })
})
