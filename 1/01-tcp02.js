const net = require('net');

let responseDataTpl = `HTTP/1.1 200 OK
Connection:keep-alive
Date: ${new Date()}
Content-Length: 12
Content-Type: text/plain

Hello world!
`;

let server = net.createServer((socket)=>{
   socket.on('data',function (data) {
      console.log(data.toString())
      socket.write(responseDataTpl)
   });
});

server.listen({
   host: 'localhost',
   port: 8080
});


