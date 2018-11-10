// index.js is called upon app initialization (running node index.js)
/* * Primary file for the Api * */

// Dependencies
const http = require("http");

// Server initialization on port 3010
const server = http.createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
