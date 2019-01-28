# Querystring

## 1

## 1.1 querystring.parse(str[, sep[, eq[, options]]])

```
    str <string> 要解析的 URL 查询字符串。
    sep <string> 用于界定查询字符串中的键值对的子字符串。默认为 '&'。
    eq <string> 用于界定查询字符串中的键与值的子字符串。默认为 '='。
    options <Object>
        - decodeURIComponent <Function> 解码查询字符串的字符时使用的函数。默认为 querystring.unescape()。
        - maxKeys <number> 指定要解析的键的最大数量。指定为 0 则不限制。默认为 1000。


```
该方法会把一个 URL 查询字符串 str 解析成一个键值对的集合。


### 1.2 querystring.stringify(obj[, sep[, eq[, options]]]) 根据对象生成URL