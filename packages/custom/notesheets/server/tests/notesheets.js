/* jshint -W079 */
/* Related to https://github.com/linnovate/mean/issues/898 */
'use strict';

/**
 * Module dependencies.
 */
var expect = require('expect.js'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Notesheet = mongoose.model('Notesheet');

/**
 * Globals
 */
var user;
var notesheet;

/**
 * Test Suites
 */
describe('<Unit Test>', function() {
  describe('Model Notesheet:', function() {
    beforeEach(function(done) {
      this.timeout(10000);
      user = new User({
        name: 'Full name',
        email: 'test@test.com',
        username: 'user',
        password: 'password'
      });
      user.save(function() {
        notesheet = new Notesheet({
          title: 'Notesheet Title',
          content: 'Notesheet Content',
          user: user
        });
        done();
      });


    });
    describe('Method Save', function() {

      it('should be able to save without problems', function(done) {
        this.timeout(10000);

        return notesheet.save(function(err, data) {
          expect(err).to.be(null);
          expect(data.title).to.equal('Notesheet Title');
          expect(data.content).to.equal('Notesheet Content');
          expect(data.user.length).to.not.equal(0);
          expect(data.created.length).to.not.equal(0);
          done();
        });

      });

      it('should be able to show an error when try to save without title', function(done) {
        this.timeout(10000);
        notesheet.title = '';

        return notesheet.save(function(err) {
          expect(err).to.not.be(null);
          done();
        });
      });

      it('should be able to show an error when try to save without content', function(done) {
        this.timeout(10000);
        notesheet.content = '';

        return notesheet.save(function(err) {
          expect(err).to.not.be(null);
          done();
        });
      });

      it('should be able to show an error when try to save without user', function(done) {
        this.timeout(10000);
        notesheet.user = {};

        return notesheet.save(function(err) {
          expect(err).to.not.be(null);
          done();
        });
      });

    });

    afterEach(function(done) {
      this.timeout(10000);
      notesheet.remove(function() {
        user.remove(done);
      });
    });
  });
});
