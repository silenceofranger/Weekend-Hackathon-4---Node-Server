const http = require("http");

http.createServer(function (req, res) {
    if(req.url === '/welcome')
    {
        res.write("Welcome to Dominos!");
        res.end();
    }
    else if(req.url === '/contact')
    {
        res.write("{phone: '18602100000', email: 'guestcaredominos@jublfood.com'}")
        res.end();
    }
    else
    {
        res.writeHead(404);
        res.end();
    }
}).listen(8081);
