import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../lib';

describe('lib', function() {
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

  describe('contains objects data types', function() {
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

  describe('contains custom data types', function() {
    it('Email', function() {
      should(Validator).has.hasOwnProperty('Email');
    });

    it('MongoDB', function() {
      should(Validator).has.hasOwnProperty('MongoDB');
    });

    it('Empty', function() {
      should(Validator).has.hasOwnProperty('Empty');
    });
  });
});
