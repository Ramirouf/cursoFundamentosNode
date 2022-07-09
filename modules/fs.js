const fs = require('fs');

function read(path, callback) {
    fs.readFile(path, (err, data) => {
        callback(data.toString());

    });
}

function write(path, data, callback) {
    fs.writeFile(path, data, (err) => {
        if (err) {
            console.error("Unable to write", err);
        } else {
            console.log("Successfully wrote to", path);
        }
    });
}

function deleteFile(path, callback) {
    fs.unlink(path, (err) => {
        if (err) {
            console.error("Unable to delete", err);
        } else {
            console.log("Successfully deleted", path);
        }
    });
}

// read(__dirname + '/file.txt', console.log);
// write(__dirname + '/file.txt', "Hello world", console.log);
deleteFile(__dirname + '/file1.txt', console.log);