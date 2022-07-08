function hello(name, myCallback) {
    //console.log("Hi, i'm async");
    setTimeout(function(){
        console.log("Hi " + name);
        myCallback(name);
    }, 2000)
}

function bye(name, anotherCallback) {
    setTimeout(function(){
        console.log("Bye " + name);
        anotherCallback();
    }, 1000);
}


console.log("Starting process");

hello("Ramiro", function(name){
    bye(name, function(){
        console.log("Ending process");
    });
    //console.log("Finishing process");
});

/*
hello("Ramiro", function() {});
bye("Ramiro", function() {});
*/