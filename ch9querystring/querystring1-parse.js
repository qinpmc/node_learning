var querystring = require("querystring");

console.log(querystring.parse("foo=bar&abc=xyz&abc=123"));
// { foo: 'bar', abc: [ 'xyz', '123' ] }

console.log(querystring.parse("name=qin pmc"));  //{ name: 'qin pmc' }
console.log(querystring.parse("name=qin%20pmc")); // { name: 'qin pmc' }



console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));
// 返回 'foo=bar&baz=qux&baz=quux&corge='

console.log(querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':'));
// 返回 'foo:bar;baz:qux'


