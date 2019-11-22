import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../../lib/custom/mongodb/objectid';

describe('ObjectId', function() {
  describe('isObjectId', function() {
    it('112345679065574883030833 is ObjectId', function() {
      should(Validator.isObjectId('112345679065574883030833')).be.true();
    });

    it('FFFFFFFFFFFFFFFFFFFFFFFF is ObjectId', function() {
      should(Validator.isObjectId('FFFFFFFFFFFFFFFFFFFFFFFF')).be.true();
    });

    it('45cbc4a0e4123f6920000002 is ObjectId', function() {
      should(Validator.isObjectId('45cbc4a0e4123f6920000002')).be.true();
    });

    it('hhhhhhhhhhhhhhhhhhhhhhhh is not ObjectId', function() {
      should(Validator.isObjectId('hhhhhhhhhhhhhhhhhhhhhhhh')).be.false();
    });
  });

  describe('isIdentical', function() {
    it('112345679065574883030833 is identical to 112345679065574883030833', function() {
      should(Validator.isIdentical('112345679065574883030833', '112345679065574883030833')).be.true();
    });

    it('112345679065574883030833 is not identical to 45cbc4a0e4123f6920000002', function() {
      should(Validator.isIdentical('112345679065574883030833', '45cbc4a0e4123f6920000002')).be.false();
    });
  });
});
