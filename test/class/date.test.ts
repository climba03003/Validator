import { isDate, isDateString, isIdentical, isISO8601Date } from '../../lib/class/date'

describe('Date', function () {
  describe('isDate', function () {
    test('new Date()', function () {
      expect(isDate(new Date())).toStrictEqual(true)
    })

    test('Date.now()', function () {
      expect(isDate(Date.now())).toStrictEqual(false)
    })
  })

  describe('isISO8601Date', function () {
    test('toISOString', function () {
      expect(isISO8601Date(new Date().toISOString())).toStrictEqual(true)
    })

    test('2012-01-01T17:52:27.8116975-12:00', function () {
      expect(isISO8601Date('2012-01-01T17:52:27.8116975-12:00')).toStrictEqual(true)
    })

    test('2012-02-01T18:21:06', function () {
      expect(isISO8601Date('2012-02-01T18:21:06')).toStrictEqual(true)
    })

    test('2012-03-01T00:00:00Z', function () {
      expect(isISO8601Date('2012-03-01T00:00:00Z')).toStrictEqual(true)
    })

    test('Date.now()', function () {
      expect(isISO8601Date(Date.now())).toStrictEqual(false)
    })

    test('new Date()', function () {
      expect(isISO8601Date(new Date())).toStrictEqual(false)
    })
  })

  describe('isDateString', function () {
    test('2048-02-29', function () {
      expect(isDateString('2048-02-29')).toStrictEqual(true)
    })

    test('9999-12-31', function () {
      expect(isDateString('9999-12-31')).toStrictEqual(true)
    })

    test('2048/02/29', function () {
      expect(isDateString('2048/02/29', '/')).toStrictEqual(true)
    })

    test('9999/12/31', function () {
      expect(isDateString('9999/12/31', '/')).toStrictEqual(true)
    })

    test('2049-02-29', function () {
      expect(isDateString('2049-02-29')).toStrictEqual(false)
    })

    test('9999-12-32', function () {
      expect(isDateString('9999-12-32')).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('new Date("2011-03-31") | new Date("2011-03-31")', function () {
      expect(isIdentical(new Date('2011-03-31'), new Date('2011-03-31'))).toStrictEqual(true)
    })

    test('new Date("2011-03-31") | new Date("1970-01-01")', function () {
      expect(isIdentical(new Date('2011-03-31'), new Date('1970-01-01'))).toStrictEqual(false)
    })
  })
})
