var events = require('events')

var eventEmitter = new events.EventEmitter();

var onPistonAsagi = () => {
    console.log('Herkes insin !')
}

eventEmitter.on('piston-asagi',onPistonAsagi);

eventEmitter.emit('piston-asagi');