// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

var fs = require('fs');
module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Lazyload grunt tasks.
  require('grunt-lazyload')(grunt);

  // Configurable paths
  var config = {
    pkg: grunt.file.readJSON('package.json')
  };

  // Define the configuration for all the tasks
  grunt.initConfig({
    // Project settings
    config: config,
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      options: {
          spawn: false // Important, don't remove this!
      },
      src: {
        files: [
          'templates/src/{,*/}*.js',
          'templates/src/{,*/}*.css',
        ],
        tasks: ['twigRender']
      }
    },

    // TwigRender
    twigRender: {
      options: {
      },
      app: {
        files : [
          {
            data: {
              app: true,
            },
            expand: true,
            cwd: 'templates/src/',
            src: ['**/*.js', '**/*.css'],
            dest: 'mobile/src/'
          }
        ]
      },
      web: {
        files : [
          {
            data: {
              app: false
            },
            expand: true,
            cwd: 'templates/src/',
            src: ['**/*.js', '**/*.css'],
            dest: 'web/src/'
          }
        ]
      }
    }

    
  });

  // Explicit lazyLoad tasks.
  grunt.lazyLoadNpmTasks('grunt-contrib-watch', 'watch');
  grunt.lazyLoadNpmTasks('grunt-twig-render', 'twigRender');

  /**
   * Register tasks.
   */
  grunt.registerTask('default', [
    'twigRender',
    'watch'
  ]);
};
