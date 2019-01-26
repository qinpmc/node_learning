var fs = require("fs");

var rs = fs.createReadStream("./READMEtest.md","utf8");

function readByLine(rs,cb){
    var remaining = "";
    var lineNumber = 1;
    rs.on("data",function(chunck){
        remaining += chunck;
        var index = remaining.indexOf("\n");
        var last = 0;
        while(index>-1){
            var lineCotent = remaining.substring(last,index);
            last=index+1;
            cb(lineNumber++,lineCotent);
            index = remaining.indexOf("\n",last);
        }
        remaining = remaining.substring(last); // 处理最后一行，最后一行无 换行符
    });
    rs.on("end", function () {
        if (remaining.length > 0) {
            callback(lineNumber, remaining);
        }
    })
}

function callback(lineNumber,data){
    console.log(lineNumber+" : "+data);
}

readByLine(rs,callback);
