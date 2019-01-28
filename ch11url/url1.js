var url = require("url");

var urlAddr = "https://admin:323@sub.host.com:8080/p/a/t/h?query=where&addr=pl&addr=sh#hash11";
console.log(url.parse(urlAddr));
/*

     Url {
     protocol: 'https:',
     slashes: true,
     auth: 'admin:323',
     host: 'sub.host.com:8080',
     port: '8080',
     hostname: 'sub.host.com',
     hash: '#hash11',
     search: '?query=where&addr=pl&addr=sh',
     query: 'query=where&addr=pl&addr=sh',
     pathname: '/p/a/t/h',
     path: '/p/a/t/h?query=where&addr=pl&addr=sh',
     href: 'https://admin:323@sub.host.com:8080/p/a/t/h?query=where&addr=pl&addr=sh
     #hash11' }
3
.   `1

 */

 var urlObj1 = new url.URL(urlAddr);
console.log(urlObj1);

/*
URL {
    href: 'https://admin:323@sub.host.com:8080/p/a/t/h?query=where&addr=pl&addr=sh
#hash11',
    origin: 'https://sub.host.com:8080',
        protocol: 'https:',
        username: 'admin',
        password: '323',
        host: 'sub.host.com:8080',
        hostname: 'sub.host.com',
        port: '8080',
        pathname: '/p/a/t/h',
        search: '?query=where&addr=pl&addr=sh',
        searchParams: URLSearchParams { 'query' => 'where', 'addr' => 'pl', 'addr' =>
        'sh' },
    hash: '#hash11' }

    */

var keyValues = urlObj1.searchParams.entries();

for(let [key,value] of keyValues ){
    console.log(key+" : "+ value);
}
/*
query : where
addr : pl
addr : sh
*/
