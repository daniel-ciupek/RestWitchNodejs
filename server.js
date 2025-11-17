const http = require('http');

const PORT = 8080;

const server = http.createServer(async (req, res) => {
    console.log("Request!");
    res.writeHead(200);
    res.end("Hello World!!!");
});

server.listen(PORT);