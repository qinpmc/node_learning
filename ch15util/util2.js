const util = require('util');

const debuglog = util.debuglog('foo');
debuglog('hello from foo [%d]', 123); //FOO 38260: hello from foo [123]

var logger = util.debuglog('foo');
logger('hello');  // FOO 36828: hello