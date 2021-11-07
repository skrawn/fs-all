// const http = require("http");
const express = require("express");

const port = 5000;

const server = express();

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello from NodeJS");
// });

server.get("/", (req, res) => {
    res.send("Hello World from Express");
});

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
})