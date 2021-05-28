import { isEmpty, isIdentical, isString } from '../../lib/primitive/string'

describe('String', function () {
  describe('isString', function () {
    test('string', function () {
      expect(isString(String(''))).toStrictEqual(true)
    })

    test('null', function () {
      expect(isString(null)).toStrictEqual(false)
    })

    test('undefined', function () {
      expect(isString(undefined)).toStrictEqual(false)
    })

    test('number', function () {
      expect(isString(Number(0))).toStrictEqual(false)
    })
  })

  // space will be trim
  describe('isEmpty', function () {
    test('string', function () {
      expect(isEmpty(String(''))).toStrictEqual(true)
    })

    test('string(  )', function () {
      expect(isEmpty(String('  '))).toStrictEqual(true)
    })

    test('string(no)', function () {
      expect(isEmpty(String('no'))).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('string | string', function () {
      expect(isIdentical(String('identical'), String('identical'))).toStrictEqual(true)
    })

    test('string(yes) | string(no)', function () {
      expect(isIdentical(String('yes'), String('no'))).toStrictEqual(false)
    })
  })
})
