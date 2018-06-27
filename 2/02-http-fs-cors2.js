const fs = require('fs');
const http = require('http');
const url = require("url");

function getFileType(resPath){
  const EXT_FILE_TYPES = {
    'default': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'text/json',

    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpg',
    '.png': 'image/png',
    //...
  }

  let path = require('path');
  let mime_type = EXT_FILE_TYPES[path.extname(resPath)] || EXT_FILE_TYPES['default'];
  return mime_type;
}

const server = http.createServer((req, res) => {
 


  let pathname = url.parse(req.url).pathname;





  if(pathname === '/') pathname = '/index.html';
  let resPath = '.' + pathname; 
  
  if(req.headers['origin'] ) {
    res.writeHead(200, { 
      'Access-Control-Allow-Origin': 'http://localhost:5000',
      'Content-Type': 'text/html'
    });
    return fs.createReadStream(resPath).pipe(res)
  };  

  if(!fs.existsSync(resPath)){
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end('<h1>404 Not Found</h1>');
  }

  res.writeHead(200, { 'Content-Type': getFileType(resPath)});
  fs.createReadStream(resPath).pipe(res)
})



server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(9088) 
