let sum1 = 0;
let sum2 = 0;
console.time('all');
console.time('loop1');
for (let i = 0; i < 1000000000; i++) {
    sum1 += i;
}
console.timeEnd('loop1');

console.time('loop2');
for (let i = 0; i < 1000000000; i++) {
    sum2 += i;
}
console.timeEnd('loop2');

console.time('async');
console.log("Starts async process");
asyncFunc()
    .then(() => {
        console.timeEnd('async');
    });

console.timeEnd('all');

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Finished asyncFunc");
            resolve();
        });
    });
}