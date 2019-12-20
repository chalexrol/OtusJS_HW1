//initial
const scaner = require('./scaner')

function help() {
  console.log('Асинхронный сканер директорий')
  console.log('Для запуска выполните: npm run tree -- path=<PATH>')
}

function init(path) {
  let scanerPath
  if (!path) {
    return help()
  }
  path.forEach(d => {
    const [left, right] = d.split('=')
    if (left === 'path') {
      scanerPath = right
    }
  })
  if (!scanerPath) {
    help()
  } else {
    console.log('Listing for ' + scanerPath)
    return scaner(scanerPath)
      .then(console.log)
      .catch(console.error)
  }
}

module.exports = init