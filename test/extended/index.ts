import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/extended';

describe('extended', function() {
  describe('contains object data types', function() {
    it('Array', function() {
      should(Validator).has.hasOwnProperty('Array');
    });

    it('Date', function() {
      should(Validator).has.hasOwnProperty('Date');
    });

    it('JSON', function() {
      should(Validator).has.hasOwnProperty('JSON');
    });
  });
});
