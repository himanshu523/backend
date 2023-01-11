const fs =require("fs");
const route = (req,res)=>{
    const url = req.url;
    const method= req.method;

    if(url==='/')
   {
    fs.readFile("message(project).txt",{encoding:"utf-8"},(err,data)=>
    {
        if(err)
        {
            console.log(err);
        }
        res.write('<html>');
        res.write('<title>message form</title>');
        res.write(`<body>${data}</body>`);
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">submit</buttton></form></body>');
        res.write('</html>');
        return res.end();
    })
    }
  
   
else if(url==='/message'&&method==='POST')
{
    const body =[];
    req.on('data',(chunk)=>
    {
        console.log(chunk);
        body.push(chunk);
    })
    return req.on('end',()=>
    {
        const parsedBody = Buffer.concat(body).toString();
        console.log(`parsedbody-->${parsedBody}`);
        const message = parsedBody.split('=')[1];
        fs.writeFile('message(project).txt',message,(err)=>
        {
            if(err)
            {
                console.log(err);
            }
            res.statusCode=302;
            res.setHeader('location','/')
            return res.end();
        });
    });
}
else{
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>hello from my node.js server</h1></body>');
    res.write('</html>');
    res.end();
}
}

module.exports=route;

