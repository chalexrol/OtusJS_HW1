const fs = require('fs')
const path = require('path')

function fixSlash(s) {
  return s.replace(new RegExp('\\\\', 'g'), '/')
}

function scaner(scanerPath) {
  let result = {
    files: [],
    dirs: [],
  }

  function scanerFolder(scanerPath) {
    result.dirs.push(fixSlash(path.normalize(scanerPath)))
    return new Promise((resolve, reject) => {
      const options = {
        withFileTypes: true,
      }
      fs.readdir(scanerPath, options, (error, items) => {
        if (error) {
          reject(error)
        }
        if (!items) {
          return resolve(result)
        }
        const files = items
          .filter(e => !e.isDirectory())
          .map(e => fixSlash(path.join(scanerPath, e.name)))
        const folders = items
          .filter(e => e.isDirectory())
          .map(e => path.join(scanerPath, e.name))

        result.files = result.files.concat(files)
        folders
          .reduce((prev, folder) => {
            return new Promise((resolve, reject) => {
              scanerFolder(folder)
                .then(resolve)
                .catch(reject)
            })
          }, Promise.resolve())
          .then(() => resolve(result))
          .catch(console.error)
      })
    })
  }
  return scanerFolder(scanerPath)
}

module.exports = scaner
