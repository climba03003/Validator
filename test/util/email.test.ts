import { isEmail, isIdentical } from '../../lib/util/email'

describe('Email', function () {
  describe('isEmail', function () {
    test('abc@abc.com', function () {
      expect(isEmail('abc@abc.com')).toStrictEqual(true)
    })

    test('abc+abc@abc.com', function () {
      expect(isEmail('abc+abc@abc.com')).toStrictEqual(true)
    })

    test('123@123', function () {
      expect(isEmail('123@123')).toStrictEqual(false)
    })

    test('123', function () {
      expect(isEmail('123')).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('abc@abc.com | abc@abc.com', function () {
      expect(isIdentical('abc@abc.com', 'abc@abc.com')).toStrictEqual(true)
    })

    test('abc@abc.com | abc+abc@abc.com', function () {
      expect(isIdentical('abc@abc.com', 'abc+abc@abc.com')).toStrictEqual(false)
    })
  })
})
