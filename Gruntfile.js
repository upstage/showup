/**
 * Showup - jQuery plugin
 * Copyright (c) 2013, Jon Schlinkert, contributors
 * Licensed under the MIT License
 */

module.exports = function(grunt) {
  'use strict';

  var prettify = require('pretty');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Build demo HTML
    assemble: {
      options: {
        postprocess: prettify
      },
      component: {
        options: grunt.file.readYAML('config.yml'),
        files: {
          '_gh_pages/index.html': ['src/lorem-ipsum.md'],
          'index.html': ['src/lorem-ipsum.md']
        }
      }
    }
  });

  // Load Assemble plugins to build demo HTML.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-sync-pkg');

  // Default tasks to be run.
  grunt.registerTask('default', ['assemble', 'sync']);
};
