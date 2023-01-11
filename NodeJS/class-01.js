var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, 
        {'Content-Type':'text/html', 'Content-Length':'100'});
    res.end("<h1 style='background-color:gray;'>Hello World!</h1>");
}).listen(3000);
