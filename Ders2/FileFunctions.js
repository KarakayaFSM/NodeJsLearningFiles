var fs = require('fs')

var fileFunctions = {



    readFile: function () {
        fs.readFile('example.html', function (err, data) {
            console.log(data)
        })
    },

    //appends the second parameter to the end of the file
    //if file is not found, it'll be created

    appendFile: function () {
        fs.appendFile('example.html', '<p>Hellooo</p>', function (err) {
            if (err) throw err;
            console.log('Saved');
        })
    },

    //takes a "flag" as the second argument, if the flag is "w" for "writing",
    //the specified file is opened for writing. If the file does not exist, an empty file is created

    createFile: function () {
        fs.open('example2.html', 'w', function (err, file) {
            if (err) throw err;
            console.log('file Created');
        })
    },

    //replaces the specified file and content if it exists.
    //If the file does not exist, a new file, 
    //containing the specified content, will be created

    writeFile: function () {
        fs.writeFile('example2.html', 'newContent', function (err) {
            if (err) throw err;
            console.log('file Created');
        })
    },

    deleteFile: function () {
        fs.unlink('example2.html', function (err) {
            if (err) throw err;
            console.log('File Deleted');
        })
    },

    renameFile: function(){
        fs.rename('example2.html','example3.html',function(err){
            if (err) throw err;
            console.log('File Renamed');
        })
    }
}