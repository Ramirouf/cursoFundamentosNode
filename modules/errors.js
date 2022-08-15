function anotherFunction() {
    return itBreaks();
}

function itBreaks() {
    return 3 + z;
}

function itBreaksAsynchronously() {
    //This breaks everything
    /*
    setTimeout(function () {
        return 3 + z;
    });
    */
    //This doesn't break everything
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (e) {
            console.error(e);
        }
    });
}

try {
    //anotherFunction();
    itBreaksAsynchronously();
} catch (e) {
    //console.error("It breaks ! ", e);
    console.error(e.message);
}