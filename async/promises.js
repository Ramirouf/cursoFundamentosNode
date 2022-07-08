function hello(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Hi " + name);
            resolve(name);
        }, 1000);
    });
}

function talk(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("Bla bla bla...");
            //resolve(name);
            reject("Error !!!");
        }, 1000);
    });

};

function bye(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("Bye " + name);
            resolve();
        }, 1000);
    });
}

// ----

console.log("Process started");
hello("Ramiro")
    .then(talk)
    .then( bye)
    .then( nombre => {
        console.log("Process finished");
    })
    .catch( error => {
        console.log("Error: " + error);
    });