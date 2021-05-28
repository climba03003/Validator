import { isDate, isIdentical } from '../../lib/class/date'

describe('Date', function () {
  describe('isDate', function () {
    test('new Date()', function () {
      expect(isDate(new Date())).toStrictEqual(true)
    })

    test('Date.now()', function () {
      expect(isDate(Date.now())).toStrictEqual(false)
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
