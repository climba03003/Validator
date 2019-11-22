import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/extended/array';

describe('Array', function() {
  describe('isArray', function() {
    it('array is array', function() {
      should(Validator.isArray([])).be.true();
    });

    it('[] is array', function() {
      should(Validator.isArray([])).be.true();
    });
  });

  describe('isEmpty', function() {
    it('[] is empty', function() {
      should(Validator.isEmpty([])).be.true();
    });

    it('[1,2,3] is not empty', function() {
      should(Validator.isEmpty([1, 2, 3])).be.false();
    });
  });

  describe('isIdentical', function() {
    it('[] is equal to []', function() {
      should(Validator.isIdentical([], [])).be.true();
    });

    it('[1,2] is not equal to [1,2]', function() {
      should(Validator.isIdentical([1, 2], [1, 2])).be.true();
    });

    it('[1,2] is not equal to [2,1]', function() {
      should(Validator.isIdentical([1, 2], [2, 1])).be.false();
    });

    it('[1,2] is not equal to [1,2,3]', function() {
      should(Validator.isIdentical([1, 2], [1, 2, 3])).be.false();
    });
  });
});
