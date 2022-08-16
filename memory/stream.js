const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf8');
readableStream.on('data', function (chunk) {
    console.log(chunk);
    data += chunk;
});

readableStream.on('end', function () {
    console.log(data);
});

//process.stdout.write('Hello World!');

const Transform = stream.transform;

function upperCase() {
    Transform.call(this);
}

util.inherits(upperCase, Transform);

upperCase.prototype._transform = function (chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
}

var upperCaseStream = new upperCase();

readableStream
    .pipe(upperCaseStream)
    .pipe(process.stdout);