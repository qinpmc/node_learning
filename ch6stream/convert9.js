var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./lantern-installer.exe');
var out = fs.createWriteStream('./lantern-installer.exe.gz');

inFile.pipe(gzip).pipe(out);