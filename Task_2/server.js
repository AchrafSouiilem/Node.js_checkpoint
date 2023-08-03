var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('index.html',function (err, data){
        if(err) {
            console.error(err);
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000');