import { isEqual, isIdentical, isObject } from '../../lib/primitive/object'

describe('Object', function () {
  describe('isObject', function () {
    test('object', function () {
      expect(isObject(Object())).toStrictEqual(true)
    })

    test('{}', function () {
      expect(isObject({})).toStrictEqual(true)
    })

    test('array', function () {
      expect(isObject([])).toStrictEqual(true)
    })

    test('date', function () {
      expect(isObject(new Date())).toStrictEqual(true)
    })

    test('null', function () {
      expect(isObject(null)).toStrictEqual(true)
    })

    test('new string', function () {
      // eslint-disable-next-line no-new-wrappers
      expect(isObject(new String())).toStrictEqual(true)
    })

    test('number', function () {
      expect(isObject(Number())).toStrictEqual(false)
    })

    test('string', function () {
      expect(isObject(String())).toStrictEqual(false)
    })

    test('undefined', function () {
      expect(isObject(undefined)).toStrictEqual(false)
    })
  })

  // should be in same pointer
  describe('isIdentical', function () {
    test('ref | ref', function () {
      const a = {}
      expect(isIdentical(a, a)).toStrictEqual(true)
    })

    test('{} | {}', function () {
      expect(isIdentical({}, {})).toStrictEqual(false)
    })
  })

  // should be in same structure
  describe('isEqual', function () {
    test('ref | ref', function () {
      const a = {}
      expect(isEqual(a, a)).toStrictEqual(true)
    })

    test('null | null', function () {
      expect(isEqual(null, null)).toStrictEqual(true)
    })

    test('null | undefined', function () {
      expect(isEqual(null, undefined)).toStrictEqual(false)
    })

    test('{} | {}', function () {
      expect(isEqual({}, {})).toStrictEqual(true)
    })

    test('{a:1,b:2} | {a:1,b:2}', function () {
      expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toStrictEqual(true)
    })

    test('{a:1,b:2} | {b:2,a:1}', function () {
      expect(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toStrictEqual(true)
    })

    test('{a:1,b:2} | {a:1,b:3}', function () {
      expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toStrictEqual(false)
    })

    test('[] | []', function () {
      expect(isEqual([], [])).toStrictEqual(true)
    })

    test('[1,2] | [1,2]', function () {
      expect(isEqual([1, 2], [1, 2])).toStrictEqual(true)
    })

    test('[1,2] | [2,1]', function () {
      expect(isEqual([1, 2], [2, 1])).toStrictEqual(false)
    })

    test('[1,2] | [1,2,3]', function () {
      expect(isEqual([1, 2], [1, 2, 3])).toStrictEqual(false)
    })

    test('new Date("2011-03-31") | new Date("2011-03-31")', function () {
      expect(isEqual(new Date('2011-03-31'), new Date('2011-03-31'))).toStrictEqual(true)
    })

    test('new Date("2011-03-31") | new Date("1970-01-01")', function () {
      expect(isEqual(new Date('2011-03-31'), new Date('1970-01-01'))).toStrictEqual(false)
    })

    test('new Date(1234) | 1234', function () {
      expect(isEqual(new Date(1234), 1234)).toStrictEqual(false)
    })

    test('()=>{} | ()=>{}', function () {
      // function should be equal when they are in same reference
      expect(isEqual(() => {}, () => {})).toStrictEqual(false)
    })

    test('/abc/ | /abc/', function () {
      // regex should be equal when they are in same reference
      expect(isEqual(/abc/, /abc/)).toStrictEqual(false)
    })
  })
})
