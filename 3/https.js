const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./key/server.key'),
  cert: fs.readFileSync('./key/server.crt')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);

