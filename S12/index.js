import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Error loading HTML');
    }
    // Success: Serve the HTML content
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});