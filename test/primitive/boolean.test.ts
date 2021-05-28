import { isBoolean, isFalse, isIdentical, isTrue, maybeFalse, maybeTrue } from '../../lib/primitive/boolean'

describe('Boolean', function () {
  describe('isBoolean', function () {
    test('true', function () {
      expect(isBoolean(true)).toStrictEqual(true)
    })

    test('false', function () {
      expect(isBoolean(false)).toStrictEqual(true)
    })

    test('string', function () {
      expect(isBoolean('')).toStrictEqual(false)
    })

    test('1', function () {
      expect(isBoolean(1)).toStrictEqual(false)
    })

    test('0', function () {
      expect(isBoolean(0)).toStrictEqual(false)
    })

    test('undefined', function () {
      expect(isBoolean(undefined)).toStrictEqual(false)
    })

    test('null', function () {
      expect(isBoolean(null)).toStrictEqual(false)
    })
  })

  describe('isTrue', function () {
    test('true', function () {
      expect(isTrue(true)).toStrictEqual(true)
    })

    test('false', function () {
      expect(isTrue(false)).toStrictEqual(false)
    })

    test('expression (1 === 1)', function () {
      // eslint-disable-next-line no-self-compare
      expect(isTrue(1 === 1)).toStrictEqual(true)
    })
  })

  describe('maybeTrue', function () {
    test('true', function () {
      expect(maybeTrue(true)).toStrictEqual(true)
    })

    test('1', function () {
      expect(maybeTrue(1)).toStrictEqual(true)
    })

    test('"true"', function () {
      expect(maybeTrue('true')).toStrictEqual(true)
    })

    test('"abc"', function () {
      expect(maybeTrue('abc')).toStrictEqual(false)
    })

    test('()=>{}', function () {
      expect(maybeTrue(() => {})).toStrictEqual(false)
    })
  })

  describe('isFalse', function () {
    test('true', function () {
      expect(isFalse(true)).toStrictEqual(false)
    })

    test('false', function () {
      expect(isFalse(false)).toStrictEqual(true)
    })

    test('expression (1 === 0)', function () {
      // @ts-expect-error
      expect(isFalse(1 === 0)).toStrictEqual(true)
    })
  })

  describe('maybeFalse', function () {
    test('false', function () {
      expect(maybeFalse(false)).toStrictEqual(true)
    })

    test('0', function () {
      expect(maybeFalse(0)).toStrictEqual(true)
    })

    test('"false"', function () {
      expect(maybeFalse('false')).toStrictEqual(true)
    })

    test('"abc"', function () {
      expect(maybeFalse('abc')).toStrictEqual(false)
    })

    test('()=>{}', function () {
      expect(maybeFalse(() => {})).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('true | true', function () {
      expect(isIdentical(true, true)).toStrictEqual(true)
    })

    test('false | false', function () {
      expect(isIdentical(false, false)).toStrictEqual(true)
    })

    test('true | false', function () {
      expect(isIdentical(true, false)).toStrictEqual(false)
    })

    test('false | true', function () {
      expect(isIdentical(false, true)).toStrictEqual(false)
    })

    test('1 | true', function () {
      expect(isIdentical(1, true)).toStrictEqual(false)
    })

    test('0 | false', function () {
      expect(isIdentical(0, false)).toStrictEqual(false)
    })
  })
})
