const fs = require('fs');
const http = require('http');
const url = require("url");

const server = http.createServer((req, res) => {
  //pathname是取到端口号后面的地址
  let pathname = url.parse(req.url).pathname;
  if(pathname === '/') pathname = '/index.html';
  let resPath = '.' + pathname; 
  //判断路径是否存在
  if(!fs.existsSync(resPath)){
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end('<h1>404 Not Found</h1>');
  }
  //如果存在，将在路径下的文件返回给页面
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(resPath).pipe(res)
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(10080) 
