const http = require('http');

const server = http.createServer((req,res)=>
{
    console.log(req);
    console.log('himanshu')
    res.writeHead(200,{
        'content-type':'text/plain'
    });
    res.end('himanshu')
})

server.listen(4000);
