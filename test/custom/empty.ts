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

    it('{foo:"bar"} is empty', function() {
      should(Validator.isEmpty({ foo: 'bar' })).be.false();
    });

    it('[1,2,3] is empty', function() {
      should(Validator.isEmpty([1, 2, 3])).be.false();
    });
  });
});
