var fs = require('fs');

fs.readFile(process.cwd() + '/doc/nodejs.txt', 'UTF-8', function(err, data){
  if(err){
    console.log('err: '+err);
  }else{
    console.log('success: '+ data);
  }
})
