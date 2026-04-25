const http = require("http");

const server = http.createServer((req, res) => {    
 console.log(req, 'req');
 res.writeHead(200, { "Content-Type": "text/plain" });  
 res.end("Hello nodejs from http module");
 
}   
);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});