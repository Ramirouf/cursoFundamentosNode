function hello(name, myCallback) {
    //console.log("Hi, i'm async");
    setTimeout(function(){
        console.log("Hi " + name);
        myCallback(name);
    }, 2000)
}

function talk(talkCallback) {
    setTimeout(function(){
        console.log("Bla bla bla...");
        talkCallback();
    }, 1000);
};

function conversation(name, timesToTalk, callback){
    
    if (timesToTalk > 0) {
        talk(function (){
            conversation(name, timesToTalk - 1, callback);
        });
    } else {
        callback(name, callback);
    }
}

function bye(name, anotherCallback) {
    setTimeout(function(){
        console.log("Bye " + name);
        anotherCallback();
    }, 1000);
}

// ----

//Callback hell example:
/*
console.log("Starting process");
hello("Ramiro", function(name){
    talk(function(){
        talk(function(){
            talk(function(){
                bye(name, function(){
                    console.log("Ending process");
                });
            });
        });
    });
    //console.log("Finishing process");
});
*/

hello("Ramiro", function(name){
    conversation(name, 3, function(){
        console.log("Ending process");
    });
});
