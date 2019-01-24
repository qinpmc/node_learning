var fs = require('fs');

fs.createReadStream('./foo1.txt').pipe(process.stdout);