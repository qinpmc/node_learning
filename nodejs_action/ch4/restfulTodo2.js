var http = require("http");
var url = require("url");
var querystring = require("querystring");
var items = [];
var server = http.createServer(function(req,res){
    if("/" ==req.url){
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
    }

    function show(res){
        var html = 
    }
    function add(req,res){

    }
    function delItem(req,res){

    }
    function badRequest(res){

    }

}).listen(8888)