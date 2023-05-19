const fs = require ("fs");
const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("welcome to the homepage");
    }
    else if (req.url == "/about"){
        res.end("welcome to the about page");
    }else {
        res.writeHead("404 not found")
res.end("404 page not found, error")
    }
});

server.listen(7000, "127.0.0.1", (req,res)=>{
    console.log("its running on port 8000")
})


