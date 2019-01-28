# Path
path 模块用于处理文件与目录的路径。
path 在不同操作系统上的组成：

```
在 POSIX 上:
┌─────────────────────┬────────────┐
│          dir                             │    base                │
├──────┬                            ├──────┬─────┤
│ root       │                            │ name       │ ext      │
"  /             home/user/dir               / file          .txt     "
└──────┴──────────────┴──────┴─────┘


在 Windows 上:
┌─────────────────────┬────────────┐
│          dir                             │    base                │
├──────┬                            ├──────┬─────┤
│ root       │                            │ name       │   ext    │
" C:\                path\dir                \ file          .txt     "
└──────┴──────────────┴──────┴─────┘
```


## 1 属性

## 1.1 path.delimiter    获取操作系统的分隔符
返回 \<string\>
返回平台特定的路径分隔符：
- Windows 上是 ;。
- POSIX 上是 :。

## 1.2 path.sep   获取路径分隔符
返回平台特定的路径片段分隔符：

- Windows 上是 \。
- POSIX 上是 /。


## 2 方法
### 2.1 path.basename(path[, ext]) 获取文件

```
> path <string>
> ext <string> 文件的扩展名。
> 返回: <string>

path.basename("/foo/bar/baz/index.html") ;// index.html
```
返回 path 的最后一部分，类似于 Unix 中的 basename 命令。

### 2.2 path.dirname(path) 获取目录名

```
path <string>
返回: <string>

path.dirname("/foo/bar/baz/index.html");  // /foo/bar/baz
```
### 2.2 path.extname(path) 获取文件扩展名

```
path.extname('index.html'); // 返回: '.html'
```


### 2.3 path.format(pathObject) 根据对象解析为路径

```
pathObject <Object>
    - dir <string>
    - root <string>
    - base <string>
    - name <string>
    - ext <string>
返回: <string>
```
pathObject 的属性有不同的优先级：
- 如果指定了 pathObject.dir，则忽略 pathObject.root。
- 如果指定了 pathObject.base，则忽略 pathObject.ext 和 pathObject.name。

转化成路径过程中会 **根据操作系统使用不同的分隔符**。

### 2.4 path.isAbsolute(path) 判断 path 是否绝对路径


### 2.5 path.join([...paths]) 拼接路径

```
...paths <string> 路径片段。
返回: <string>

```
空字符串的 path 片段会被忽略。 如果连接后的路径是一个空字符串，则返回 '.'，表示当前工作目录。


### 2.6 path.normalize(path)  规范化 path

```
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); //  \foo\bar\baz\asdf
console.log(path.normalize('/foo/bar//baz/asdf/quux')); //  \foo\bar\baz\asdf\quux
console.log(path.normalize('/foo/bar//baz/asdf/quux/.')); //  \foo\bar\baz\asdf\quux
console.log(path.normalize('/foo/bar//baz/asdf/quux/idex.html')); //  \foo\bar\baz\asdf\quux\idex.ht
```

### 2.7 path.parse(path) path 解析为对象，format的逆操作

### 2.8 path.resolve([...paths])  构造绝对路径
path 从右到左依次处理，直到构造出绝对路径。

- 如果处理完全部 path 片段后还**未产生绝对路径，则加上当前工作目录**。
- 生成的路径**会进行规范化**，并且删除末尾的斜杠，除非路径是根目录。
- **空字符串**的 path 片段会**被忽略**。
- 如果**没有指定** path，则**返回当前工作目录的绝对路径**。

### 2.9 path.relative(from, to) 返回从 from 到 to 的相对路径

```
from <string>
to <string>
返回: <string>
```

- 返回从 from 到 to 的相对路径（基于当前工作目录）。 如果 from 和 to 分别调用 path.resolve() 之后解析到同一路径，则返回空字符串。
- 如果 from 或 to 是空字符串，则视为传入当前工作目录。

























