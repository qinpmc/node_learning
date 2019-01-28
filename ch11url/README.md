# Url
URL 'http://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash' 上方的是遗留对象属性：
下方的则是 WHATWG标准的 的 URL 对象的属性
WHATWG 的 origin 属性包括 protocol 和 host，但不包括 username 或 password,且没有path

```
┌───────────────────────────────────────────────────────────┐
│                                              href                                                                    │
├─────┬──┬───────────────────────────┬─────────────────────-┤
│ protocol │    │        auth          │          host               │           path                   │ hash   │
│          │    │                      ├────────────── ┬────── ┼───────── ┬        |
│          │    │                      │    hostname       │ port   │ pathname    │     search       │         │
│          │    │                      │                   │        │             ├─┬──────  ┤        │
│          │    │                      │                   │        │             │  │    query     │        │
"  https:     //    user       :   pass    @ sub.example.com   : 8080      /p/a/t/h       ?   query=string    #hash   "
│          │    │          │          │    hostname      │ port    │             │                 │        │
│          │    │          │          ├────────────── ┴             │                 │        │
│ protocol │    │ username │ password │          host               │             │                 │        │
├─────┴──┼───────────┴───────────── ─|              |                  |         │
│   origin       │                      │         origin             │ pathname   │     search      │ hash     │
├────────┴───────────┴──────────────┴──────────┴────────-----┤
│                                              href                                                               --│
└────────────────────────────────────────────────────────---┘

```




## 1 URL 类
遵从 WHATWG标准的URL 类

## 1.1 属性
属性的内容可参见上图，基本含义比较简单。
- url.hash
- url.host
- url.hostname
- url.href
- url.origin
- url.password
- url.pathname
- url.port
- url.protocol
- url.search
- url.searchParams
- url.username

```
var urlObj1 = new url.URL("https://admin:323@sub.host.com:8080/p/a/t/h?query=where&addr=pl&addr=sh#hash11");
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

```

## 1.2 方法

- url.toString()
- url.toJSON()


## 2 URLSearchParams 类

- urlSearchParams.append(name, value)  附加一个新的键值对
- urlSearchParams.delete(name)
- urlSearchParams.entries()
- urlSearchParams.forEach(fn[, thisArg]) 回调中参数：value, name, searchParams
- urlSearchParams.get(name)
- urlSearchParams.getAll(name)
- urlSearchParams.has(name)
- urlSearchParams.keys()
- urlSearchParams.set(name, value)
- urlSearchParams.sort()  现有名称就地排列所有的名称-值对
- urlSearchParams.toString()
- urlSearchParams.values()

## 3 遗留的 URL 接口
该部分遗留的接口，后续不推荐使用。
- url.format(urlObject)
- url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
- url.resolve(from, to)

























