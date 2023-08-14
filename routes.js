const fs=require('fs');
const routHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if (url==='/'){
      return fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
        if (err){
          console.log(err);
        }
        else{
          console.log(data)
          res.write('<html>')
          res.write('<head><title>Enter a message</title></head>');
          res.write(`<body>${data}<form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>`)
          res.write('</html>')
          res.end();
          
        }
      })
      
    }
    if (url==='/message' && method==='POST'){
      // we want to redirect and we want to read data
      //writefilesync stops
      const body=[];
      req.on('data',(chunks)=>{
        //console.log(chunks);
        body.push(chunks);
      })
      return req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const message=parsedBody.split('=')[1];
        fs.writeFile('message.txt',message,{flag:'a+'},(err)=>{
              res.statusCode=302;
              res.setHeader('Location','/');
              res.end()
        })

      })

    }
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<body><h1>welcome to NodeJs</h1></body>')
    res.write('</html>')
    res.end();
}

module.exports={
    handler:routHandler
}