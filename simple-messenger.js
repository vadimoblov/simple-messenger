var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    
    res.end('Hello from simple-messenger.\n');
    
}).listen(9080, "");
