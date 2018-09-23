"use strict";

var fs = require("fs");

try{
    var data = fs.readFileSync("sample1.txt","utf-8");
    console.log(data);
}catch (e){
    console.log("error...");
}