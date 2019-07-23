var http = require('http');
var time = require('./module');
var info = require('./function');

http.createServer(function (request, response) {

    if (request.url == "/") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<html><body><b><br>WELCOME TO HOME PAGE</br></b></body></html>")
        response.write("DATE ===>" + time.date());
        response.write("<br></br>")
        response.write(request.url)
    }
    else if (request.url == "/admin") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<html><body><b><br>WELCOME TO ADMIN PAGE</br></b></body></html>")
        response.write(request.url)
    }
    else if (request.url == "/json") {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ firsname: "EMRE", lastname: "GOKTEPE" }))
        response.write(request.url)

    }
   
    response.end();
}).listen(8080);
console.log("Node.js web server at port 8080 is running..")
info.information("Node.js v12.6.0")
