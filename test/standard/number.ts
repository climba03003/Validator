import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/standard/number';

describe('Number', function() {
  describe('isNumber', function() {
    it('number is number', function() {
      should(Validator.isNumber(Number())).be.true();
    });

    it('1 is number', function() {
      should(Validator.isNumber(1)).be.true();
    });

    it('0 is number', function() {
      should(Validator.isNumber(0)).be.true();
    });

    it('-1 is number', function() {
      should(Validator.isNumber(-1)).be.true();
    });

    it('1.0001 is number', function() {
      should(Validator.isNumber(1.0001)).be.true();
    });

    it('0.0001 is number', function() {
      should(Validator.isNumber(0.0001)).be.true();
    });

    it('-1.0001 is number', function() {
      should(Validator.isNumber(-1.0001)).be.true();
    });

    it('String(1) is not a number', function() {
      should(Validator.isNumber(String(1))).be.false();
    });
  });

  // isNaN is used to check the type but not the value
  // string number should return NaN as well
  describe('isNaN', function() {
    it('string is not a number', function() {
      should(Validator.isNaN(String(1))).be.true();
    });

    it('null is not a number', function() {
      should(Validator.isNaN(null)).be.true();
    });

    it('undefined is not a number', function() {
      should(Validator.isNaN(undefined)).be.true();
    });

    it('number is a number', function() {
      should(Validator.isNaN(Number())).be.false();
    });
  });

  describe('isIdentical', function() {
    it('number is identical to number', function() {
      should(Validator.isIdentical(Number(), Number())).be.true();
    });

    it('1 is identical to 1', function() {
      should(Validator.isIdentical(1, 1)).be.true();
    });

    it('0 is identical to 0', function() {
      should(Validator.isIdentical(0, 0)).be.true();
    });

    it('1 is not identical to true', function() {
      should(Validator.isIdentical(1, true)).be.false();
    });

    it('0 is not identical to false', function() {
      should(Validator.isIdentical(1, false)).be.false();
    });

    it('0 is not identical to null', function() {
      should(Validator.isIdentical(1, null)).be.false();
    });

    it('0 is not identical to undefined', function() {
      should(Validator.isIdentical(1, undefined)).be.false();
    });
  });

  describe('inRange', function() {
    it('value is not a number', function() {
      should(Validator.isRange('abc', 1, 2)).be.false();
    });

    it('min is not a number', function() {
      should(Validator.isRange(1, 'abc', 2)).be.false();
    });

    it('max is not a number', function() {
      should(Validator.isRange(1, 2, 'abc')).be.false();
    });

    it('value below min', function() {
      should(Validator.isRange(0, 1, 10)).be.false();
    });

    it('value larger max', function() {
      should(Validator.isRange(11, 1, 10)).be.false();
    });

    it('value in range', function() {
      should(Validator.isRange(5, 1, 10)).be.true();
    });
  });
});
