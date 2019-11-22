import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/standard/undefined';

describe('Undefined', function() {
  describe('isUndefined', function() {
    it('undefined is undefined', function() {
      should(Validator.isUndefined(undefined)).be.true();
    });

    it('null is not undefined', function() {
      should(Validator.isUndefined(null)).be.false();
    });

    it('0 is not undefined', function() {
      should(Validator.isUndefined(0)).be.false();
    });

    it('emptry string is not undefined', function() {
      should(Validator.isUndefined('')).be.false();
    });
  });

  describe('isIdentical', function() {
    it('undefined is identical to undefined', function() {
      should(Validator.isIdentical(undefined, undefined)).be.true();
    });

    it('null is not identical to undefined', function() {
      should(Validator.isIdentical(null, undefined)).be.false();
    });

    it('0 is not identical to undefined', function() {
      should(Validator.isIdentical(0, undefined)).be.false();
    });

    it('empty string is not identical to undefined', function() {
      should(Validator.isIdentical('', undefined)).be.false();
    });
  });
});
