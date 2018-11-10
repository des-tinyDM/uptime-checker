// index.js is called upon app initialization (running node index.js)
/* * Primary file for the Api * */

// Dependencies
const http = require("http");
const url = require("url");

// Server initialization on port 3010
const server = http.createServer((req, res) => {
  // Parse url request
  const parsedUrl = url.parse(req.url, true);

  //Get the path from url
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Get query string as an object
  const queryStringObject = parsedUrl.query;

  const headers = req.headers;
  //Get the http method
  const method = req.method.toLowerCase();

  //Send response
  res.end("Hello World\n");

  //Log path
  console.log(
    "request received on path:",
    trimmedPath,
    "with method:",
    method,
    "and these query string parameters:",
    queryStringObject,
    ". Request received with these headers:",
    headers
  );
});

server.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
