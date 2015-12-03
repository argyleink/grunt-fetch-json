/*
 * Grunt-Fetch-JSON
 * 
 *
 * Copyright (c) 2015 Adam Argyle
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    fetchJSON: {
      singlefetch: {
        files: {
          'tmp/remote_data1.json': 'http://jsonplaceholder.typicode.com/posts/1'
        }
      },
      multifetch: {
        files: {
          'tmp/remote_data2.json': 'http://jsonplaceholder.typicode.com/posts/2',
          'tmp/remote_data3.json': 'http://jsonplaceholder.typicode.com/posts/3'
        }
      },
      withOptions: {
        options: {
          method: 'GET',
          headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
          },
          parameters: {
            access_token: 'a5ba6010aec44e38aa326946b2d8b89976317d70385261c05fa47e33ff367eba'
          }
        },
        files: {
          'tmp/contentful.json': 'https://cdn.contentful.com/spaces/mfqhk2sj5vfi'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'fetchJSON', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
