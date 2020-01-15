var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World!!!\n");
});

let port = process.env.PORT;

if (!port) {
    port = 8000;
}

server.listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);