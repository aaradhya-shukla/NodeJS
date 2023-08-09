// creating server
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("Aaradhya shukla")
    let url=req.url;
    console.log(url)
    res.setHeader('Content-type','text/html');
    res.write('<html>')
    res.write('<head><title>My First Node Js Page</title></head>')
    if (url==='/home'){
        res.write('<body><h1>Welcome home</h1></body>')
    }
    else if(url==='/about'){
        res.write('<body><h1>Welcome to About us Page</h1></body>')
    }
    else{
        res.write('<body><h1>Welcome to Node JS Page</h1></body>')
    }
    res.write('</html>')
    res.end();

});

server.listen(4000);