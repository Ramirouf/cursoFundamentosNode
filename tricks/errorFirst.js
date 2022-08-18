
function asyncFunc(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}
try {
    asyncFunc(function (err, data) {
        if (err) {
            console.error("Error: ", err);
            //throw err; //Doesn't work in async functions
            return false;
        }
        console.log("No errors. data: ", data);
    });
} catch (e) {
    console.log("Error: ", e);
}