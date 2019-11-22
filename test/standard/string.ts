import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/standard/string';

describe('String', function() {
  describe('isString', function() {
    it('string is string', function() {
      should(Validator.isString(String(''))).be.true();
    });

    it('null is not string', function() {
      should(Validator.isString(null)).be.false();
    });

    it('undefined is not string', function() {
      should(Validator.isString(undefined)).be.false();
    });

    it('number is not string', function() {
      should(Validator.isString(Number(0))).be.false();
    });
  });

  // space will be trim
  describe('isEmpty', function() {
    it('string is empty', function() {
      should(Validator.isEmpty(String(''))).be.true();
    });

    it('string(  ) is not empty', function() {
      should(Validator.isEmpty(String('  '))).be.true();
    });

    it('string(no) is not empty', function() {
      should(Validator.isEmpty(String('no'))).be.false();
    });
  });

  describe('isIdentical', function() {
    it('string is identical to string', function() {
      should(Validator.isIdentical(String('identical'), String('identical'))).be.true();
    });

    it('string(yes) is not identical to string(no)', function() {
      should(Validator.isIdentical(String('yes'), String('no'))).be.false();
    });
  });
});
