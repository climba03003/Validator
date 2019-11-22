import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/standard/symbol';

describe('Symbol', function() {
  describe('isSymbol', function() {
    it('symbol is symbol', function() {
      should(Validator.isSymbol(Symbol('symbol'))).be.true();
    });

    it('symbol.for() is symbol', function() {
      should(Validator.isSymbol(Symbol.for('symbol'))).be.true();
    });

    it('string is not symbol', function() {
      should(Validator.isSymbol(String('symbol'))).be.false();
    });
  });

  describe('isIdentical', function() {
    it('symbol is not identical to symbol', function() {
      should(Validator.isIdentical(Symbol('symbol'), Symbol('symbol'))).be.false();
    });

    it('symbol.for() is identical to symbol.for()', function() {
      should(Validator.isIdentical(Symbol.for('symbol'), Symbol.for('symbol'))).be.true();
    });

    it('string is not identical to symbol', function() {
      should(Validator.isIdentical(String('symbol'), Symbol('symbol'))).be.false();
    });
  });
});
