/**
 * freecodecamp-file-metadata-microservice
 *
 * Assignment:
 * https://www.freecodecamp.com/challenges/file-metadata-microservice
 */
;(function () {
  'use strict'

  /* imports */
  var url = require('url');
  var express = require('express')
  var pug = require('pug')
  var pkg = require('./package')

  var PORT = process.env.PORT || 8080
  var app = express()
  var server

  app.set('view engine', 'pug')
  app.use(express.static('public'))

  app.get('/', function (request, response) {
    var locals = {
      title: pkg.name,
      version: pkg.version,
      homepage: pkg.homepage,
      hostname: request.hostname
    }

    response.render('index', locals)
  })

  server = app.listen(PORT, function () {
    console.log('Listening on port ' + PORT)
  })
})()

