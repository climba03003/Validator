import { isArray, isEmpty, isIdentical } from '../../lib/class/array'

describe('Array', function () {
  describe('isArray', function () {
    test('new Array()', function () {
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      expect(isArray(new Array())).toStrictEqual(true)
    })

    test('[]', function () {
      expect(isArray([])).toStrictEqual(true)
    })

    test('{}', function () {
      expect(isArray({})).toStrictEqual(false)
    })
  })

  describe('isEmpty', function () {
    test('[]', function () {
      expect(isEmpty([])).toStrictEqual(true)
    })

    test('[1,2,3]', function () {
      expect(isEmpty([1, 2, 3])).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('[] | []', function () {
      expect(isIdentical([], [])).toStrictEqual(true)
    })

    test('[1,2] | [1,2]', function () {
      expect(isIdentical([1, 2], [1, 2])).toStrictEqual(true)
    })

    test('[1,2] | [2,1]', function () {
      expect(isIdentical([1, 2], [2, 1])).toStrictEqual(false)
    })

    test('[1,2] | [1,2,3]', function () {
      expect(isIdentical([1, 2], [1, 2, 3])).toStrictEqual(false)
    })
  })
})
