import { describe, it } from 'mocha';
import * as should from 'should';
import * as Validator from '../../../lib/custom/mongodb/connectionstring';

describe('ConnectionString', function() {
  describe('isConnectionString', function() {
    it('localhost', function() {
      should(Validator.isConnectionString('mongodb://127.0.0.1:27017/')).be.true();
    });

    it('standalone', function() {
      should(Validator.isConnectionString('mongodb://mongodb0.example.com:27017/admin')).be.true();
    });

    it('standalone that enforces access control', function() {
      should(
        Validator.isConnectionString('mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/admin')
      ).be.true();
    });

    it('replica set', function() {
      should(
        Validator.isConnectionString(
          'mongodb://mongodb0.example.com:27017,mongodb1.example.com:27017,mongodb2.example.com:27017/admin?replicaSet=myRepl'
        )
      ).be.true();
    });

    it('replica set that enforces access control, include user credentials', function() {
      should(
        Validator.isConnectionString(
          'mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017,mongodb1.example.com:27017,mongodb2.example.com:27017/admin?replicaSet=myRepl'
        )
      ).be.true();
    });

    it('sharded cluster', function() {
      should(
        Validator.isConnectionString(
          'mongodb://mongos0.example.com:27017,mongos1.example.com:27017,mongos2.example.com:27017/admin'
        )
      ).be.true();
    });

    it('sharded cluster that enforces access control, include user credentials', function() {
      should(
        Validator.isConnectionString(
          'mongodb://myDBReader:D1fficultP%40ssw0rd@mongos0.example.com:27017,mongos1.example.com:27017,mongos2.example.com:27017/admin'
        )
      ).be.true();
    });

    it('localhost without trailing slash', function() {
      should(Validator.isConnectionString('mongodb://127.0.0.1')).be.false();
    });
  });

  describe('isIdentical', function() {
    it('mongodb://127.0.0.1:27017/ is identical to mongodb://127.0.0.1:27017/', function() {
      should(Validator.isIdentical('mongodb://127.0.0.1:27017/', 'mongodb://127.0.0.1:27017/')).be.true();
    });

    it('mongodb://127.0.0.1:27017/ is not identical to mongodb://127.0.0.1:27017', function() {
      should(Validator.isIdentical('mongodb://127.0.0.1:27017/', 'mongodb://127.0.0.1:27017')).be.false();
    });
  });
});
