import { isBigInt, isIdentical } from '../../lib/primitive/bigint'

describe('BigInt', function () {
  describe('isBigInt', function () {
    test('BigInt(0)', function () {
      expect(isBigInt(BigInt(0))).toStrictEqual(true)
    })

    test('Number(0)', function () {
      expect(isBigInt(Number(0))).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('BigInt(0) | BigInt(0)', function () {
      expect(isIdentical(BigInt(0), BigInt(0))).toStrictEqual(true)
    })

    test('Number(0) | BigInt(0)', function () {
      expect(isIdentical(Number(0), BigInt(0))).toStrictEqual(false)
    })
  })
})
