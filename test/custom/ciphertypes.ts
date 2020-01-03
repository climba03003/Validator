import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../lib/custom/ciphertypes';

describe('Email', function() {
  describe('isCipherGCMTypes', function() {
    it('aes-128-gcm is CipherGCMTypes', function() {
      should(Validator.isCipherGCMTypes('aes-128-gcm')).be.true();
    });

    it('aes-192-gcm is CipherGCMTypes', function() {
      should(Validator.isCipherGCMTypes('aes-192-gcm')).be.true();
    });

    it('aes-256-gcm is CipherGCMTypes', function() {
      should(Validator.isCipherGCMTypes('aes-256-gcm')).be.true();
    });

    it('undefined is not CipherGCMTypes', function() {
      should(Validator.isCipherGCMTypes(undefined)).be.false();
    });
  });

  describe('isCipherCCMTypes', function() {
    it('aes-128-ccm is CipherCCMTypes', function() {
      should(Validator.isCipherCCMTypes('aes-128-ccm')).be.true();
    });

    it('aes-192-ccm is CipherCCMTypes', function() {
      should(Validator.isCipherCCMTypes('aes-192-ccm')).be.true();
    });

    it('aes-256-ccm is CipherCCMTypes', function() {
      should(Validator.isCipherCCMTypes('aes-256-ccm')).be.true();
    });

    it('undefined is not CipherCCMTypes', function() {
      should(Validator.isCipherCCMTypes(undefined)).be.false();
    });
  });

  describe('isCipherTypes', function() {
    it('aes-128-gcm is CipherTypes', function() {
      should(Validator.isCipherTypes('aes-128-gcm')).be.true();
    });

    it('aes-192-gcm is CipherTypes', function() {
      should(Validator.isCipherTypes('aes-192-gcm')).be.true();
    });

    it('aes-256-gcm is CipherTypes', function() {
      should(Validator.isCipherTypes('aes-256-gcm')).be.true();
    });

    it('aes-128-ccm is CipherTypes', function() {
      should(Validator.isCipherTypes('aes-128-ccm')).be.true();
    });

    it('aes-192-ccm is CipherTypes', function() {
      should(Validator.isCipherTypes('aes-192-ccm')).be.true();
    });

    it('aes-256-ccm is CipherTypes', function() {
      should(Validator.isCipherTypes('aes-256-ccm')).be.true();
    });

    it('undefined is not CipherTypes', function() {
      should(Validator.isCipherTypes(undefined)).be.false();
    });
  });
});
