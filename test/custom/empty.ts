import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/custom/empty';

describe('Empty', function() {
  describe('isEmpty', function() {
    it('"" is empty', function() {
      should(Validator.isEmpty('')).be.true();
    });

    it('{} is empty', function() {
      should(Validator.isEmpty({})).be.true();
    });

    it('[] is empty', function() {
      should(Validator.isEmpty([])).be.true();
    });

    it('undefined is empty', function() {
      should(Validator.isEmpty(undefined)).be.true();
    });

    it('null is empty', function() {
      should(Validator.isEmpty(null)).be.true();
    });

    it('"123" is not empty', function() {
      should(Validator.isEmpty('123')).be.false();
    });

    it('{foo:"bar"} is not empty', function() {
      should(Validator.isEmpty({ foo: 'bar' })).be.false();
    });

    it('[1,2,3] is not empty', function() {
      should(Validator.isEmpty([1, 2, 3])).be.false();
    });
  });

  describe('isExist', function() {
    it('"" is not exist', function() {
      should(Validator.isExist('')).be.false();
    });

    it('{} is not exist', function() {
      should(Validator.isExist({})).be.false();
    });

    it('[] is not exist', function() {
      should(Validator.isExist([])).be.false();
    });

    it('undefined is not exist', function() {
      should(Validator.isExist(undefined)).be.false();
    });

    it('null is not exist', function() {
      should(Validator.isExist(null)).be.false();
    });

    it('"123" is exist', function() {
      should(Validator.isExist('123')).be.true();
    });

    it('{foo:"bar"} is exist', function() {
      should(Validator.isExist({ foo: 'bar' })).be.true();
    });

    it('[1,2,3] is exist', function() {
      should(Validator.isExist([1, 2, 3])).be.true();
    });
  });
});
