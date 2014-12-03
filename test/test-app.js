/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ronin', function () {
  before(function (done) {
    this.timeout(10000);
    
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withArguments('hello-world')
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'index.js',
      'bin/hello-world',
      'commands/hello.js'
    ]);
  });
});
