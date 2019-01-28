# Path
path 模块用于处理文件与目录的路径。

## 1 属性

## 1.1 path.delimiter
返回 \<string\>
返回平台特定的路径分隔符：
- Windows 上是 ;。
- POSIX 上是 :。

## 1.2 path.sep
返回平台特定的路径片段分隔符：

- Windows 上是 \。
- POSIX 上是 /。


## 2 方法
path.basename(path[, ext])

```
> path <string>
> ext <string> 文件的扩展名。
> 返回: <string>
```
返回 path 的最后一部分，类似于 Unix 中的 basename 命令。









