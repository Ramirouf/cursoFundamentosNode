async function hello(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Hi " + name);
            resolve(name);
        }, 1000);
    });
}

async function talk(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("Bla bla bla...");
            resolve(name);
            //reject("Error !!!");
        }, 1000);
    });

};

async function bye(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("Bye " + name);
            resolve();
        }, 1000);
    });
}
async function main(){

    await hello("Ramiro"); 
    talk();
    await talk();
    await bye("Ramiro");
}

console.log("Starting process");
main();
console.log("Finishing process");