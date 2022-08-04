//const process = require('process');
// It's unnecessary to use the require() function to import the module, because it's already imported by default.

process.on('beforeExit', function (code) {
    console.log('About to exit with code: ' + code);
});

process.on('exit', function (code) {
    console.log('Exited with code: ' + code);
});

process.on('uncaughtException', (err, origin) => {
    console.error('Caught exception: ' + err);
});

process.on('unhandledRejection', function (reason, p) {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

unexistingFunction();

