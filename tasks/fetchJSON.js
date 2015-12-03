/*
 * Grunt-Fetch-JSON
 * 
 *
 * Copyright (c) 2015 Adam Argyle
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var fetch         = require('node-fetch')
    , async         = require('async')
    , asyncTasks    = [];

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('fetchJSON', 'Fetch and stash remote resources', function () {
    // tell grunt this task is async
    var done          = this.async()
      , paramString   = '';

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      method: 'GET',
      headers: {}
    });

    if (options.parameters) {
      paramString = '?';
    }

    for (var param in options.parameters) {
      paramString += param + '=' + options.parameters[param];
    }

    // for each file
    this.files.forEach(function(file){
      // push a function task for that file into the task array
      asyncTasks.push(function(complete){
        fetch(file.orig.src[0] + paramString, options)
        .then(function(res) {
          return res.json();
        })
        // then write them to file
        .then(function(json) {
          grunt.file.write(file.dest, JSON.stringify(json));
          grunt.log.writeln('File "' + file.dest + '" created.');
          // fullfill promise
          complete();
        });
      });
    });

    // run all fetch requests in parallel
    async.parallel(asyncTasks, function(err){
      if (err) {
        console.error(err);
      }
      // tell grunt we're done
      done();
    });
  });
};
