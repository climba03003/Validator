import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/standard/bigint';

describe('BigInt', function() {
  describe('isBigInt', function() {
    it('bigint is bigint', function() {
      should(Validator.isBigInt(BigInt(0))).be.true();
    });

    it('number is not bigint', function() {
      should(Validator.isBigInt(Number(0))).be.false();
    });
  });

  describe('isIdentical', function() {
    it('bigint is identical to bigint', function() {
      should(Validator.isIdentical(BigInt(0), BigInt(0))).be.true();
    });

    it('number is not identical to bigint', function() {
      should(Validator.isIdentical(Number(0), BigInt(0))).be.false();
    });
  });
});
