/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ronin', function () {
  before(function (done) {
    this.timeout(20000);
    
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withArguments('hello-world')
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'index.coffee',
      'bin/hello-world',
      'commands/hello.coffee'
    ]);
  });
});
