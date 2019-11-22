import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/custom/email';

describe('Email', function() {
  describe('isEmail', function() {
    it('abc@abc.com is email', function() {
      should(Validator.isEmail('abc@abc.com')).be.true();
    });

    it('abc+abc@abc.com is email', function() {
      should(Validator.isEmail('abc+abc@abc.com')).be.true();
    });

    it('123@123 is not email', function() {
      should(Validator.isEmail('123@123')).be.false();
    });

    it('123 is not email', function() {
      should(Validator.isEmail('123')).be.false();
    });
  });

  describe('isIdentical', function() {
    it('abc@abc.com is identical to abc@abc.com', function() {
      should(Validator.isIdentical('abc@abc.com', 'abc@abc.com')).be.true();
    });

    it('abc@abc.com is not identical to abc+abc@abc.com', function() {
      should(Validator.isIdentical('abc@abc.com', 'abc+abc@abc.com')).be.false();
    });
  });
});
