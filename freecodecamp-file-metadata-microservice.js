/**
 * freecodecamp-file-metadata-microservice
 *
 * Assignment:
 * https://www.freecodecamp.com/challenges/file-metadata-microservice
 */
;(function () {
  'use strict'

  /* imports */
  var express = require('express')
  var pug = require('pug')
  var multer = require('multer')
  var pkg = require('./package')
  
  var PORT = process.env.PORT || 8080
  var app = express()
  var upload = multer()

  app.set('view engine', 'pug')

  app.get('/', function (request, response) {
    var locals = {
      title: pkg.name,
      version: pkg.version,
      homepage: pkg.homepage,
      hostname: request.hostname
    }

    response.render('index', locals)
  })

  app.post('/upload', upload.any(), function (request, response) {
    var files = request.files

    var sizes = files.map(function (file) {
      return {
        name: file.originalname,
        size: file.size
      }
    })

    response.json(sizes)
  })

  app.listen(PORT, function () {
    console.log('Listening on port ' + PORT)
  })
})()

