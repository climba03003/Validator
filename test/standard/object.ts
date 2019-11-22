import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/standard/object';

describe('Object', function() {
  describe('isObject', function() {
    it('object is object', function() {
      should(Validator.isObject(Object())).be.true();
    });

    it('{} is object', function() {
      should(Validator.isObject({})).be.true();
    });

    it('array is object', function() {
      should(Validator.isObject([])).be.true();
    });

    it('date is object', function() {
      should(Validator.isObject(new Date())).be.true();
    });

    it('null is object', function() {
      should(Validator.isObject(null)).be.true();
    });

    it('new string is object', function() {
      should(Validator.isObject(new String())).be.true();
    });

    it('number is not object', function() {
      should(Validator.isObject(Number())).be.false();
    });

    it('string is not object', function() {
      should(Validator.isObject(String())).be.false();
    });

    it('undefined is not object', function() {
      should(Validator.isObject(undefined)).be.false();
    });
  });

  // should be in same pointer
  describe('isIdentical', function() {
    it('ref is identical to ref', function() {
      const a = {};
      should(Validator.isIdentical(a, a)).be.true();
    });

    it('{} is not identical to {}', function() {
      should(Validator.isIdentical({}, {})).be.false();
    });
  });

  // should be in same structure
  describe('isEqual', function() {
    it('ref is equal to ref', function() {
      const a = {};
      should(Validator.isEqual(a, a)).be.true();
    });

    it('null is equal to null', function() {
      should(Validator.isEqual(null, null)).be.true();
    });

    it('null is not equal to undefined', function() {
      should(Validator.isEqual(null, undefined)).be.false();
    });

    it('{} is equal to {}', function() {
      should(Validator.isEqual({}, {})).be.true();
    });

    it('{a:1,b:2} is equal to {a:1,b:2}', function() {
      should(Validator.isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).be.true();
    });

    it('{a:1,b:2} is equal to {b:2,a:1}', function() {
      should(Validator.isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).be.true();
    });

    it('{a:1,b:2} is not equal to {a:1,b:3}', function() {
      should(Validator.isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).be.false();
    });

    it('[] is equal to []', function() {
      should(Validator.isEqual([], [])).be.true();
    });

    it('[1,2] is not equal to [1,2]', function() {
      should(Validator.isEqual([1, 2], [1, 2])).be.true();
    });

    it('[1,2] is not equal to [2,1]', function() {
      should(Validator.isEqual([1, 2], [2, 1])).be.false();
    });

    it('[1,2] is not equal to [1,2,3]', function() {
      should(Validator.isEqual([1, 2], [1, 2, 3])).be.false();
    });

    it('new Date("2011-03-31") is equal to new Date("2011-03-31")', function() {
      should(Validator.isEqual(new Date('2011-03-31'), new Date('2011-03-31'))).be.true();
    });

    it('new Date("2011-03-31") is not equal to new Date("1970-01-01")', function() {
      should(Validator.isEqual(new Date('2011-03-31'), new Date('1970-01-01'))).be.false();
    });

    it('new Date(1234) is not equal to 1234', function() {
      should(Validator.isEqual(new Date(1234), 1234)).be.false();
    });

    it('()=>{} is not equal to ()=>{}', function() {
      //function should be equal when they are in same reference
      should(
        Validator.isEqual(
          () => {},
          () => {}
        )
      ).be.false();
    });

    it('/abc/ is not equal to /abc/', function() {
      //regex should be equal when they are in same reference
      should(Validator.isEqual(/abc/, /abc/)).be.false();
    });
  });
});
