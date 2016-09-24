module.exports = (grunt)->
  
  # load grunt tasks
  require('load-grunt-tasks')(grunt)
  # time current grunt task
  require('time-grunt')(grunt)
  
  # configure grunt
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    coffee:
      compile:
        files:
          'dist/bs-functions.js': 'coffee/bs-functions.coffee'
          'test/test.js':         'coffee/test.coffee'

  # set tasks
  grunt.registerTask('default', ['coffee'])