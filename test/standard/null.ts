import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/standard/null';

describe('Null', function() {
  describe('isNull', function() {
    it('null is Null', function() {
      should(Validator.isNull(null)).be.true();
    });

    it('undefined is not Null', function() {
      should(Validator.isNull(undefined)).be.false();
    });

    it('0 is not Null', function() {
      should(Validator.isNull(0)).be.false();
    });

    it('emptry string is not Null', function() {
      should(Validator.isNull('')).be.false();
    });
  });

  describe('isIdentical', function() {
    it('null is identical to null', function() {
      should(Validator.isIdentical(null, null)).be.true();
    });

    it('undefined is not identical to null', function() {
      should(Validator.isIdentical(undefined, null)).be.false();
    });

    it('0 is not identical to null', function() {
      should(Validator.isIdentical(0, null)).be.false();
    });

    it('empty string is not identical to null', function() {
      should(Validator.isIdentical('', null)).be.false();
    });
  });
});
