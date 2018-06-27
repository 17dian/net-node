const net = require('net');

let server = net.createServer((socket)=>{
   socket.on('data',function (res) {
      console.log(res.toString())
   });
});

server.listen({
   host: 'localhost',
   port: 8080
});
