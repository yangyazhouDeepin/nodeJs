var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function(){
  console.log('start event!');
})

setTimeout(function(){
  event.emit('some_event');
}, 1000);

console.log('end!');
