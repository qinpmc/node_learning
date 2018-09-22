var http = require("1http");

http.createServer(function(req,res){
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.setHeader("myHeader","myValue");
    res.write(new Date().toString());
    res.end();

}).listen(8888);