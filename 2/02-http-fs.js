const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // 同步
  // let  data = fs.readFileSync('index.html');
  // res.write(data);    
  // res.end();     //  发送响应数据 
  
  // 异步
  fs.readFile('index.html', function (err, data) {
     res.write(data);    
     res.end();     //  发送响应数据 
  })
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(8088) 
