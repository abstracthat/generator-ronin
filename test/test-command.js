/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ronin:command', function () {
  before(function (done) {
    this.timeout(20000);
    
    helpers.run(path.join(__dirname, '../command'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments('hello', '--force')
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'commands/hello.coffee'
    ]);
  });
});
