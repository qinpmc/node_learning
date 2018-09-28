var http = require("http");
var url = require("url");
var querystring = require("querystring");
//var buffer = require("buffer");

var items = [];
var server = http.createServer(function(req,res){
    //if("/" ==req.url){
        switch (req.method){
            case "GET":
                show(res);
                break;
            case "POST":
                add(req,res);
                break;
            case "DELETE":
                delItem(req,res);
                break;
            default:
                badRequest(res);
        }
   //}

    function show(res){
        var html =  "<!DOCTYPE html>"+
            "<html lang=\"en\">"+
            "<head>"+
            "<meta charset=\"UTF-8\">"+
            "<title>Todo List</title>"+
        "</head>"+
        "<body>"+
        "<h1> Todo List</h1>"+
        "<ul>"+
        items.map(function(item){
            return "<li>"+item+"</li>"
        }).join("")+
        "</ul>"+
        "<form action=\"/\" method=\"post\">"+
            "<input type=\"text\" name=\"item\"><br>"+
            "<input type=\"submit\" value=\"Add\">"+
            "</form>"+
            "</body>"+
            "</html>";
        res.setHeader("Content-type","text/html");
        res.setHeader("Content-Length",Buffer.byteLength(html));
        res.end(html);
    }
    function add(req,res){
        var body = "";
        req.setEncoding("utf8");
        req.on("data",function(chunck){
            body+= chunck;
        });
        req.on("end",function(chunck){
            var obj = querystring.parse(body);
            items.push(obj.item);
            console.log(items);
            show(res);
        });
    }
    function delItem(req,res){
        console.log("delItem",items);
        var urlObj = url.parse(req.url);
        var pathname = urlObj.pathname;
        var delIndex = parseInt(pathname.slice(1));
        items.splice(delIndex,1);

            show(res);
            //res.end("delete success");


    }
    function badRequest(res){
        res.statusCode = 400;
        res.setHeader("Content-type","text/plain");
        res.end("Bad request");
    }

}).listen(8888)