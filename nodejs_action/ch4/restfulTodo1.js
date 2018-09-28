var http = require("http");
var url = require("url");

var items = [];
var server = http.createServer(function(req,res){
    switch (req.method){
        case "GET":
            items.forEach(function(item,i){
                res.write(i+")"+item+"\n");
            })
            res.end();
            break;
        case "POST":
            var item = "";
            req.on("data",function(chunck){
                item+=chunck;
            });
            req.on("end",function(chunck){
                items.push(item);
                res.end("OK");
            })
            break;
        case "DELETE":
            var urlObj = url.parse(req.url);
            var index= parseInt(urlObj.pathname.slice(1),10);
            if(isNaN(index)){
                res.statusCode = 400;
                res.end("Invalid item id");
            }else if(!items[index]){
                res.statusCode = 404;
                res.end("Item not found");
            }else{
                items.splice(index,1);
                res.end("delete success");
            }
            break;
    }

}).listen(8888)