import { Array, isArray, isBigInt, isBoolean, isDate, isEmail, isEmpty, isExist, isJSON, isNull, isNumber, isObject, isString, isSymbol, isUndefined } from '../lib'

describe('index', function () {
  describe('Array', function () {
    test('isArray', function () {
      expect(Array.isArray([])).toStrictEqual(true)
    })
  })

  test('isArray', function () {
    expect(isArray([])).toStrictEqual(true)
  })

  test('isDate', function () {
    expect(isDate(new Date())).toStrictEqual(true)
  })

  test('isJSON', function () {
    expect(isJSON({})).toStrictEqual(true)
  })

  test('isBigInt', function () {
    expect(isBigInt(BigInt(0))).toStrictEqual(true)
  })

  test('isBoolean', function () {
    expect(isBoolean(true)).toStrictEqual(true)
  })

  test('isNull', function () {
    expect(isNull(null)).toStrictEqual(true)
  })

  test('isNumber', function () {
    expect(isNumber(0)).toStrictEqual(true)
  })

  test('isObject', function () {
    expect(isObject({})).toStrictEqual(true)
  })

  test('isString', function () {
    expect(isString('')).toStrictEqual(true)
  })

  test('isSymbol', function () {
    expect(isSymbol(Symbol(''))).toStrictEqual(true)
  })

  test('isUndefined', function () {
    expect(isUndefined(undefined)).toStrictEqual(true)
  })

  test('isExist', function () {
    expect(isExist('abc')).toStrictEqual(true)
  })

  test('isEmpty', function () {
    expect(isEmpty(null)).toStrictEqual(true)
  })

  test('isEmail', function () {
    expect(isEmail('abc@abc.com')).toStrictEqual(true)
  })
})
