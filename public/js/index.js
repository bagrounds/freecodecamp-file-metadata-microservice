/**
 *
 */
;(function () {
  'use strict'

  var fileChooser = document.getElementById('file-chooser')
  fileChooser.onchange = handleFiles

  var sizeDisplay = document.getElementById('size-display')

  /**
   * Handle files.
   *
   * @function handleFiles
   */
  function handleFiles () {
    var fileList = this.files

    fileList = Array.prototype.slice.call(fileList)

    fileList.forEach(function (file) {
      var message = file.name
      message += ' is '
      message += file.size
      message += ' Bytes.'
      sizeDisplay.innerHTML = sizeDisplay.innerHTML + '<br>' + message
    })
  }
})()
