var http = require('http'); 
http.createServer(function (req, res) 
{ 
res.writeHead(200, {'Content-Type': 'text/plain'}); 
res.end(req.headers["accept-language"]); 
}).listen(3000,'0.0.0.0'); 
