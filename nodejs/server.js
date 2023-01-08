const http = require('http');

const server = http.createServer((req,res)=>
{
    console.log(req.url,req.headers,req.method);
    const url =req.url;
    if(url==='/')
    {
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>server</title></head>')
    res.write('<body>')
    res.write('<h3>Welcome to my Node Js project</h3>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
    }

    if(url==='/home')
    {
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>server</title></head>')
    res.write('<body>')
    res.write('<h3>Welcome home</h3>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
    }
    else if(url==='/about')
    {
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>server</title></head>')
    res.write('<body>')
    res.write('<h3>Welcome to about us page</h3>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
    }
    else if(url==='/node')
    {
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>server</title></head>')
    res.write('<body>')
    res.write('<h3>Welcome to nodejs project</h3>')
    res.write('</body>')
    res.write('</html>')
   return  res.end()
    }
})

server.listen(4000);
