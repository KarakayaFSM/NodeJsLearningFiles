var fs = require('fs')

var rs = fs.createReadStream('./file-demo.txt');

var FileSystemEvents = {

    onOpen: function () {

        rs.on('open', function () {
            console.log('file opened')
        });

    },

    onClose: function () {

        rs.close()
        rs.on('close', () => console.log('file closed'))

    }
}

FileSystemEvents.onOpen()