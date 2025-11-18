const http = require('http');
const {getQuotes, getQuote, getRandom} = require("./controllers/quoteController")

const PORT = 8080;
const API_CONTENT_TYPE = {"Content-Type": "application/json"};
const server = http.createServer(async (req, res) => {
    console.log("Request!");

    if(req.url === "/api/quotes" && req.method === "GET") {
        let quotes = await getQuotes();

        if(quotes) {
            res.writeHead(200, API_CONTENT_TYPE);
        } else {
            res.writeHead(404, API_CONTENT_TYPE);
            quotes = {message : `Quotes not found`};
        }

        res.end(JSON.stringify(quotes));

    }

   // res.writeHead(200);
   // res.end("Hello World!");
});

server.listen(PORT);