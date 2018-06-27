const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // let resStream = fs.createReadStream('index.html');
  // resStream.pipe(res);
  //流是可以支持链式操作的
  fs.createReadStream('index.html').pipe(res)
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(10080) 
