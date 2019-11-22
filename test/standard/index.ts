import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/standard';

describe('standard', function() {
  describe('contains primitive data types', function() {
    it('Boolean', function() {
      should(Validator).has.hasOwnProperty('Boolean');
    });

    it('Null', function() {
      should(Validator).has.hasOwnProperty('Null');
    });

    it('Number', function() {
      should(Validator).has.hasOwnProperty('Number');
    });

    it('BigInt', function() {
      should(Validator).has.hasOwnProperty('BigInt');
    });

    it('String', function() {
      should(Validator).has.hasOwnProperty('String');
    });

    it('Symbol', function() {
      should(Validator).has.hasOwnProperty('Symbol');
    });

    it('Object', function() {
      should(Validator).has.hasOwnProperty('Object');
    });
  });
});
