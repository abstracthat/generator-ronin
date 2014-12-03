/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ronin:middleware', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../middleware'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments('auth', '--force')
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'middleware/auth.js'
    ]);
  });
});
