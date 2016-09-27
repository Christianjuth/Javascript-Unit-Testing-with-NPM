module.exports = (grunt)->
  
  # load grunt tasks
  require('load-grunt-tasks')(grunt)
  # time current grunt task
  require('time-grunt')(grunt)
  
  # configure grunt
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    coffee:
      options:
        sourceMap: true
      compile:
        files:
          'dist/bs-functions-coffee.js': 'coffee/bs-functions.coffee'
          'test/test.js':                'coffee/test.coffee'
    babel:
      options:
        sourceMap: true
        presets: ['babel-preset-es2015']
      dist:
        files:
          'dist/bs-functions-ecma.js': 'ecma/bs-functions.js'

  # set tasks
  grunt.registerTask('default', ['coffee', 'babel'])