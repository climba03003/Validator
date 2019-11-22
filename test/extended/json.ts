import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/extended/json';

describe('JSON', function() {
  describe('isJSON', function() {
    it('"{}" is json', function() {
      should(Validator.isJSON('{}')).be.true();
    });

    it('{} is json', function() {
      should(Validator.isJSON({})).be.true();
    });

    it('[] is not json', function() {
      should(Validator.isJSON([])).be.false();
    });

    it('undefined is not json', function() {
      should(Validator.isJSON(undefined)).be.false();
    });
  });

  describe('isEmpty', function() {
    it('{} is empty', function() {
      should(Validator.isEmpty({})).be.true();
    });

    it('null is not empty', function() {
      should(Validator.isEmpty(null)).be.true();
    });

    it('undefined is not empty', function() {
      should(Validator.isEmpty(undefined)).be.true();
    });

    it('{a:1,b:2} is not empty', function() {
      should(Validator.isEmpty({ a: 1, b: 2 })).be.false();
    });
  });

  describe('isIdentical', function() {
    it('{} is identical to {}', function() {
      should(Validator.isIdentical({}, {})).be.true();
    });

    it('{a:1,b:2} is identical to {a:1,b:2}', function() {
      should(Validator.isIdentical({ a: 1, b: 2 }, { a: 1, b: 2 })).be.true();
    });

    it('{a:1,b:2} is identical to {b:2,a:1}', function() {
      should(Validator.isIdentical({ a: 1, b: 2 }, { b: 2, a: 1 })).be.true();
    });

    it('{a:1,b:2} is not identical to {a:1,b:3}', function() {
      should(Validator.isIdentical({ a: 1, b: 2 }, { a: 1, b: 3 })).be.false();
    });
  });
});
