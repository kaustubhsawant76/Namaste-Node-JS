const http = require("node:http");

const server = http.createServer(function (req,res) {
   //reply users with hello world
   if (req.url === "/getsecretdata"){
    res.end("there is no secret data");
   }
    res.end("Hello World"); 
});
//you can close the server on terminal by ctrl+C
server.listen(7777);