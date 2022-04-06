const http = require('http');
const path = require('path');
const port = 5000;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(port, ()=>console.log(`Server listening on port ${port}`);
