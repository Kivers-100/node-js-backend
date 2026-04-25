const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the home page!');       
  } else if ( url === "/projects"){
     res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the projects page!');  
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});