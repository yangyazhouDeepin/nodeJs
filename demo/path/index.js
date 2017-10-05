var path = require('path');

console.log(__dirname);   //当前目录
console.log(__filename);  //当前文件目录
console.log(path.resolve('./'));  //项目根目录绝对路径
console.log(process.cwd());     //项目根目录绝对路径
