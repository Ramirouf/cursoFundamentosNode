const { exec, spawn } = require('child_process');
// const exec = require ('child_process').exec;
/*
exec('node modules/console.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})
*/

let process = spawn('ls', ['-la'])

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function (data) {
    console.log("is dead? ", process.killed);
    console.log(data.toString());
})

process.on('exit', function () {
    console.log('process exited');
    console.log("is dead? ", process.killed);

})

process.on('close', function () {
    console.log("is dead? ", process.killed);

})