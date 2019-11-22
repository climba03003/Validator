import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/standard/boolean';

describe('Boolean', function() {
  describe('isBoolean', function() {
    it('true is Boolean', function() {
      should(Validator.isBoolean(true)).be.true();
    });

    it('false is Boolean', function() {
      should(Validator.isBoolean(false)).be.true();
    });

    it('string is not Boolean', function() {
      should(Validator.isBoolean('')).be.false();
    });

    it('1 is not Boolean', function() {
      should(Validator.isBoolean(1)).be.false();
    });

    it('0 is not Boolean', function() {
      should(Validator.isBoolean(0)).be.false();
    });

    it('undefined is not Boolean', function() {
      should(Validator.isBoolean(undefined)).be.false();
    });

    it('null is not Boolean', function() {
      should(Validator.isBoolean(null)).be.false();
    });
  });

  describe('isTrue', function() {
    it('true is True', function() {
      should(Validator.isTrue(true)).be.true();
    });

    it('false is not True', function() {
      should(Validator.isTrue(false)).be.false();
    });

    it('expression (1 === 1) is True', function() {
      should(Validator.isTrue(1 === 1)).be.true();
    });
  });

  describe('maybeTrue', function() {
    it('true may be true', function() {
      should(Validator.maybeTrue(true)).be.true();
    });

    it('1 may be true', function() {
      should(Validator.maybeTrue(1)).be.true();
    });

    it('"true" may be true', function() {
      should(Validator.maybeTrue('true')).be.true();
    });

    it('"abc" may not be true', function() {
      should(Validator.maybeTrue('abc')).be.false();
    });

    it('()=>{} may not be true', function() {
      should(Validator.maybeTrue(() => {})).be.false();
    });
  });

  describe('isFalse', function() {
    it('true is not False', function() {
      should(Validator.isFalse(true)).be.false();
    });

    it('false is False', function() {
      should(Validator.isFalse(false)).be.true();
    });

    it('expression (1 === 0) is False', function() {
      // @ts-ignore
      should(Validator.isFalse(1 === 0)).be.true();
    });
  });

  describe('maybeFalse', function() {
    it('false may be false', function() {
      should(Validator.maybeFalse(false)).be.true();
    });

    it('0 may be false', function() {
      should(Validator.maybeFalse(0)).be.true();
    });

    it('"false" may be false', function() {
      should(Validator.maybeFalse('false')).be.true();
    });

    it('"abc" may not be false', function() {
      should(Validator.maybeFalse('abc')).be.false();
    });

    it('()=>{} may not be false', function() {
      should(Validator.maybeFalse(() => {})).be.false();
    });
  });

  describe('isIdentical', function() {
    it('true is identical to true', function() {
      should(Validator.isIdentical(true, true)).be.true();
    });

    it('false is identical to false', function() {
      should(Validator.isIdentical(false, false)).be.true();
    });

    it('true is not identical to false', function() {
      should(Validator.isIdentical(true, false)).be.false();
    });

    it('false is not identical to true', function() {
      should(Validator.isIdentical(false, true)).be.false();
    });

    it('1 is not identical to true', function() {
      should(Validator.isIdentical(1, true)).be.false();
    });

    it('0 is not identical to false', function() {
      should(Validator.isIdentical(0, false)).be.false();
    });
  });
});
