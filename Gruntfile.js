/**
 * Showup - jQuery plugin
 * Copyright (c) 2013, Jon Schlinkert, contributors
 * Licensed under the MIT License
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Build demo HTML
    assemble: {
      options: {
        postprocess: require('pretty')
      },
      component: {
        options: grunt.file.readYAML('_config.yml'),
        files: {
          'index.html': ['src/lorem.md'],
          'tall.html':  ['src/ipsum.md']
        }
      }
    },
    copy: {
      assets: {
        src: ['*.{js,css,html}'],
        dest: '_gh_pages/'
      }
    },

    sync: {
      options: {alt: 'showup.jquery.json'}
    }
  });

  // Load Assemble plugins to build demo HTML.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sync-pkg');

  // Default tasks to be run.
  grunt.registerTask('default', ['assemble', 'copy', 'sync']);
};
