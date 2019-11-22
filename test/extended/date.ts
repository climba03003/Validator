import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/extended/date';

describe('Date', function() {
  describe('isDate', function() {
    it('date is date', function() {
      should(Validator.isDate(new Date())).be.true();
    });

    it('date.now() is not date', function() {
      should(Validator.isDate(Date.now())).be.false();
    });
  });

  describe('maybeDate', function() {
    it('2011-03-31 maybe a date', function() {
      should(Validator.maybeDate(String('2011-03-31'))).be.true();
    });

    it('2011-03-31 12:00:00 maybe a date', function() {
      should(Validator.maybeDate(String('2011-03-31 12:00:00'))).be.true();
    });

    it('2011-12-40 may not be a date', function() {
      should(Validator.maybeDate(String('2011-12-40'))).be.false();
    });

    it('1234 maybe a date', function() {
      should(Validator.maybeDate(1234)).be.true();
    });

    it('"1234" may not be a date', function() {
      should(Validator.maybeDate(String(1234))).be.false();
    });
  });

  describe('isDateString', function() {
    it('2011-03-31 is date string', function() {
      should(Validator.isDateString(String('2011-03-31'))).be.true();
    });

    it('2011-03-31 12:00:00 is date string', function() {
      should(Validator.isDateString(String('2011-03-31 12:00:00'))).be.true();
    });

    it('2011-12-40 is not date string', function() {
      should(Validator.isDateString(String('2011-12-40'))).be.false();
    });
  });

  describe('isDateNumber', function() {
    it('1234 is date number', function() {
      should(Validator.isDateNumber(1234)).be.true();
    });

    it('"1234" is not date number', function() {
      should(Validator.isDateNumber(String(1234))).be.false();
    });
  });

  describe('isIdentical', function() {
    it('new Date("2011-03-31") is equal to new Date("2011-03-31")', function() {
      should(Validator.isIdentical(new Date('2011-03-31'), new Date('2011-03-31'))).be.true();
    });

    it('new Date("2011-03-31") is not equal to new Date("1970-01-01")', function() {
      should(Validator.isIdentical(new Date('2011-03-31'), new Date('1970-01-01'))).be.false();
    });

    it('new Date(1234) is not equal to 1234', function() {
      should(Validator.isIdentical(new Date(1234), 1234)).be.false();
    });
  });
});
