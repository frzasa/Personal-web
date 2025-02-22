const http = require("express");

const hostname = "express";
const port = 3000;

const server = http.createServer ((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello semuanya!\n");
    });

server.listen(port, hostname, () => {
    console.log(`server berjalan di port ${port}`);
});