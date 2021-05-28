import { isEmpty, isExist } from '../../lib/util/empty'

describe('Empty', function () {
  describe('isEmpty', function () {
    test('""', function () {
      expect(isEmpty('')).toStrictEqual(true)
    })

    test('{}', function () {
      expect(isEmpty({})).toStrictEqual(true)
    })

    test('[]', function () {
      expect(isEmpty([])).toStrictEqual(true)
    })

    test('undefined', function () {
      expect(isEmpty(undefined)).toStrictEqual(true)
    })

    test('null', function () {
      expect(isEmpty(null)).toStrictEqual(true)
    })

    test('"123"', function () {
      expect(isEmpty('123')).toStrictEqual(false)
    })

    test('{foo:"bar"}', function () {
      expect(isEmpty({ foo: 'bar' })).toStrictEqual(false)
    })

    test('[1,2,3]', function () {
      expect(isEmpty([1, 2, 3])).toStrictEqual(false)
    })
  })

  describe('isExist', function () {
    test('""', function () {
      expect(isExist('')).toStrictEqual(false)
    })

    test('{}', function () {
      expect(isExist({})).toStrictEqual(false)
    })

    test('[]', function () {
      expect(isExist([])).toStrictEqual(false)
    })

    test('undefined', function () {
      expect(isExist(undefined)).toStrictEqual(false)
    })

    test('null', function () {
      expect(isExist(null)).toStrictEqual(false)
    })

    test('"123"', function () {
      expect(isExist('123')).toStrictEqual(true)
    })

    test('{foo:"bar"}', function () {
      expect(isExist({ foo: 'bar' })).toStrictEqual(true)
    })

    test('[1,2,3]', function () {
      expect(isExist([1, 2, 3])).toStrictEqual(true)
    })
  })
})
