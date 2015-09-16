// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here

    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js']
    },

    // configure concat to concat js files -------------------------------------
    concat: {
      options: {
        separator: ';'
      },
      jquery: {
        src: [
          'bower_components/jquery/dist/jquery.js'
        ],
        dest: 'dist/js/jquery.js'
      },
      angular: {
        src: [
          'bower_components/angular/angular.js',
          'bower_components/angular-aria/angular-aria.js',
          'bower_components/angular-animate/angular-animate.js',
          'bower_components/angular-material/angular-material.js'
        ],
        dest: 'dist/js/angular.js'
      },
      local: {
        src: ['src/js/directives/*', 'src/js/cache/data.js', 'src/js/entry.js', 'src/js/cache/assets-cache.js'],
        dest: 'dist/js/local.js'
      },
      build: {
        src: ['dist/js/jquery.js', 'dist/js/angular.js', 'dist/js/local.js'],
        dest: 'dist/js/build.js'
      }
    },

    ngAnnotate: {
      all: {
        files: {
          'dist/js/build.js' : ['dist/js/build.js']
        }
      }
    },

    // configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n',
        //mangle: false
      },
      build: {
        files: {
          'dist/js/build.min.js': 'dist/js/build.js'
        }
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/build.min.css': ['src/css/style.css']
        }
      }
    }

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'concat', 'ngAnnotate', 'uglify', 'cssmin']);

};
