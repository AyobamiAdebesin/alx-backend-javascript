const http = require('http');

/**
 * Create a small HTTP server using the http module
 */

// Set the port and hostname
const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
app.listen(port, hostname);

module.exports = app;
