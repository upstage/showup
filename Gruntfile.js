
module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    bootstrap: grunt.file.readYAML('src/bootstrap.yml'),
    pkg:       grunt.file.readJSON('package.json'),

    less: {
      options: {
        paths: ['<%= bootstrap.base %>'],
        require: '<%= bootstrap.globals %>',
        libs: './src/bootstrap',
      },
      bootstrap: {
        src: ['<%= bootstrap.bundle.custom %>'],
        dest: '<%= component.styles %>/bootstrap.css'
      }
    },
    assemble: {
      component: {
        options: grunt.file.readYAML('config.yml'),
        files: {
          'index.html': ['src/component.hbs']
        }
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');

  // Default tasks to be run.
  grunt.registerTask('default', ['assemble', 'less']);
};
