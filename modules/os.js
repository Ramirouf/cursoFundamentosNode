const os = require('os');
console.log(os.arch());
console.log(os.platform());

console.table(os.cpus());
console.log(os.cpus().length);

console.log(os.constants);

function kb(bytes) { return bytes / 1024; }
function mb(bytes) { return kb(bytes) / 1024; }
console.log(os.freemem());
console.log(`Total memory: ${kb(os.totalmem())} KB`);
console.log(`Free memory: ${kb(os.freemem())} KB`);

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());

console.table(os.networkInterfaces());