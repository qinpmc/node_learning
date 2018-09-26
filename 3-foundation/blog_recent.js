var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    if(req.url =="/"){
        fs.readFile("./titles.json",function(err,data){
            if(err) console.log(err);
            else{
                var titles = JSON.parse(data.toString());
                fs.readFile("./template.html",function(err,data){
                    if(err) console.log(err);
                    else{
                        var tmpl = data.toString();
                        console.log(titles)
                        var html = tmpl.replace("%",titles.join("</li><li>"));
                        res.writeHead(200,{"Content-Type":"text/html"});
                        res.end(html);
                    }
                })
            }
        })
    }
}).listen(8888);