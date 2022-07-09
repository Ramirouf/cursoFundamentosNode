let i = 0;

let interval = setInterval(function () {

    console.log("hi");
    if (i === 3) {
        clearInterval(interval);
    }
    i++;
}, 1000);

setImmediate(function () {
    console.log("Hola");
});

console.log(process);
console.log(__dirname);
console.log(__filename);

globalThis.myVariable = "Example Value";
console.log(myVariable);