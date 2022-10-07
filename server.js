const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.httpVersion);
    res.setHeader('Content-Type', 'text/html');

    let path= './newfolder/';
    switch(req.url){
        case '/':
            path+='bootstrap.html';
            break;
        case '/a':
            path+='a.html';
            break;
        case '/b':
            path+='b.html';
            break;
        default:
            path+='404.html';
            break;
    }



    
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log('listening requests from port 3000');
})


