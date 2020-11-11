const http = require("http");

var obj = {
  phone: "18602100000",
  email: "guestcaredominos@jublfood.com"
};

http
  .createServer(function (req, res) {
    if (req.url === "/welcome") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Welcome to Dominos!");
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(8081);
