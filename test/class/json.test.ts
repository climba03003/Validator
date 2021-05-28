import { isEmpty, isIdentical, isJSON } from '../../lib/class/json'

describe('JSON', function () {
  describe('isJSON', function () {
    test('{}', function () {
      expect(isJSON({})).toStrictEqual(true)
    })

    test('"{}"', function () {
      expect(isJSON('{}')).toStrictEqual(true)
    })

    test('[]', function () {
      expect(isJSON([])).toStrictEqual(false)
    })

    test('null', function () {
      expect(isJSON(null)).toStrictEqual(false)
    })

    test('undefined', function () {
      expect(isJSON(undefined)).toStrictEqual(false)
    })
  })

  describe('isEmpty', function () {
    test('{}', function () {
      expect(isEmpty({})).toStrictEqual(true)
    })

    test('null', function () {
      expect(isEmpty(null)).toStrictEqual(true)
    })

    test('{a:1,b:2}', function () {
      expect(isEmpty({ a: 1, b: 2 })).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('{} | {}', function () {
      expect(isIdentical({}, {})).toStrictEqual(true)
    })

    test('{a:1,b:2} | {a:1,b:2}', function () {
      expect(isIdentical({ a: 1, b: 2 }, { a: 1, b: 2 })).toStrictEqual(true)
    })

    test('{a:1,b:2} | {b:2,a:1}', function () {
      expect(isIdentical({ a: 1, b: 2 }, { b: 2, a: 1 })).toStrictEqual(true)
    })

    test('{a:1,b:2} | {a:1,b:3}', function () {
      expect(isIdentical({ a: 1, b: 2 }, { a: 1, b: 3 })).toStrictEqual(false)
    })
  })
})
