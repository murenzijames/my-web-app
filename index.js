const http = require('http');

const server = http.createServer((req, res) => {
  // Check if the requested URL is /about
  if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page\n'); // Response for the /about route
  } else {
    // Default response for all other routes (e.g., / or anything else)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, this is a basic web app!\n'); // Original response
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
