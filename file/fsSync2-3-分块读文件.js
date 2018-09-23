"use strict";

var fs = require("fs");
var buffer = new Buffer(20);
fs.open("sample1.txt","r",function(err,fd){
    fs.read(fd,buffer,0,10,0,function(err,bytesRead){
        console.log("bytesRead",bytesRead); //bytesRead 10
        fs.read(fd,buffer,10,5,10,function(err,bytesRead){
            console.log("bytesRead",bytesRead); //bytesRead 5
            console.log(buffer.toString()); //This is sample1
        })
    })
});
