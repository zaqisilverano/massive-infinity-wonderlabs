'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: true,
          sourcemap: false
        },
        files: {
          'assets/css/main.css': [
            'assets/sass/main.scss'
          ],
        }
      }
    },
    watch: {
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'assets/css/main.css'
        ]
      },
      sass: {
        files: [
          'assets/sass/main.scss',
          'assets/sass/helpers/*.scss',
          'assets/sass/base/*.scss',
          'assets/sass/layout/*.scss',
          'assets/sass/component/*.scss'
        ],
        tasks: ['sass']
      }
    },
    clean: {
      dist: [
        'assets/css/main.css'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
