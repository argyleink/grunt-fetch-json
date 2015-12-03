'use strict';

var grunt = require('grunt');

exports.Grunt_Fetch_JSON = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  singlefetch: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/remote_data1.json');
    var expected = grunt.file.read('test/expected/remote_data1.json');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  multifetch: function (test) {
    test.expect(2);

    var actual1 = grunt.file.read('tmp/remote_data2.json');
    var expected1 = grunt.file.read('test/expected/remote_data2.json');
    test.equal(actual1, expected1, 'should describe what the custom option(s) behavior is.');

    var actual2 = grunt.file.read('tmp/remote_data3.json');
    var expected2 = grunt.file.read('test/expected/remote_data3.json');
    test.equal(actual2, expected2, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  withOptions: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/contentful.json');
    var expected = grunt.file.read('test/expected/contentful.json');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
};
