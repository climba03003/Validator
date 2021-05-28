import { isIdentical, isSymbol } from '../../lib/primitive/symbol'

describe('Symbol', function () {
  describe('isSymbol', function () {
    test('symbol', function () {
      expect(isSymbol(Symbol('symbol'))).toStrictEqual(true)
    })

    test('symbol.for()', function () {
      expect(isSymbol(Symbol.for('symbol'))).toStrictEqual(true)
    })

    test('string', function () {
      expect(isSymbol(String('symbol'))).toStrictEqual(false)
    })
  })

  describe('isIdentical', function () {
    test('symbol | symbol', function () {
      expect(isIdentical(Symbol('symbol'), Symbol('symbol'))).toStrictEqual(false)
    })

    test('symbol.for() | symbol.for()', function () {
      expect(isIdentical(Symbol.for('symbol'), Symbol.for('symbol'))).toStrictEqual(true)
    })

    test('string | symbol', function () {
      expect(isIdentical(String('symbol'), Symbol('symbol'))).toStrictEqual(false)
    })
  })
})
