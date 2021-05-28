import { isIdentical, isNull } from '../../lib/primitive/null'

describe('Null', function () {
  describe('isNull', function () {
    test('null', function () {
      expect(isNull(null)).toStrictEqual(true)
    })

    test('undefined', function () {
      expect(isNull(undefined)).toStrictEqual(false)
    })

    test('0', function () {
      expect(isNull(0)).toStrictEqual(false)
    })

    test('empty string', function () {
      expect(isNull('')).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('null | null', function () {
      expect(isIdentical(null, null)).toStrictEqual(true)
    })

    test('undefined | null', function () {
      expect(isIdentical(undefined, null)).toStrictEqual(false)
    })

    test('0 | null', function () {
      expect(isIdentical(0, null)).toStrictEqual(false)
    })

    test('empty string | null', function () {
      expect(isIdentical('', null)).toStrictEqual(false)
    })
  })
})
