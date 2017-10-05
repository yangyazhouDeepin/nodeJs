var fs = require('fs');

var data = fs.readFileSync(process.cwd() + '/doc/nodejs.txt', 'UTF-8'); //同步读取文件
console.log(data);
