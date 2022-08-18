const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log("New request");
    console.log(req.url);

    switch (req.url) {
        case '/hi':
            let greet = hi();
            res.write(greet);
            res.end();
            break;
        default:
            res.write("Error 404");
            res.end();
    }

    res.write("Hello World!");
    res.writeHead(201, { 'Content-Type': 'text/plain' });

    res.end();
}

function hi() {
    return "Hello World!";
}

console.log("Listening on port 3000");