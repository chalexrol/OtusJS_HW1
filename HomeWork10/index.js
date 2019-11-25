// Cканер каталогов
const init = require('./src/init')
// Запускаем и передаем парметры командной строки приложению в виде path="PATH"
console.log('PATH',process.argv.slice(2))
init(process.argv.slice(2))