const http = require("http");

const PORT = 1000;

const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>This is not running in my machine </h1>");
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
