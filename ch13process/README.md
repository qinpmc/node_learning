# Process
process 对象是一个全局变量，提供 Node.js 进程的有关信息以及控制进程。

## 1 事件

- 'beforeExit' 事件：当 Node.js 清空了事件循环且不再添加额外的工作时触发。如果进程被显式地终止，比如调用 process.exit() 或抛出未捕获的异常，则不会触发 'beforeExit' 事件。
- 'exit' 事件：Node.js 进程即将退出时会触发 'exit' 事件：'exit' 事件监听器的回调函数只允许**同步**操作。

## 2 属性

1. process.arch
表示操作系统CPU架构的字符串。 例如 'x32', 或 'x64'等。

2. process.argv：
返回进程启动时的命令行参数。
第一个元素是 process.execPath。 使用 process.argv0 可以获取 argv[0] 原始的值。
第二个元素是当前执行的 JavaScript 文件的路径。 剩余的元素都是额外的命令行参数。

3. process.argv0
返回进程启动时传入的 argv[0] 的原始值。

4. process.config
process.config 属性返回一个Javascript对象。此对象描述了用于编译当前Node.js执行程序时涉及的配置项信息。 这与执行./configure脚本生成的config.gypi文件结果是一样的。

5. process.env
返回用户的环境信息.

6. process.debugPort
debugger 调试器使用的端口。

7. process.execArgv
返回当Node.js进程被启动时，Node.js特定的命令行选项
node --harmony script.js   //['--harmony']

8. process.execPath
返回启动进程的可执行文件的绝对路径。如：D:\Program Files\nodejs\node.e

9. process.exitCode

10. process.pid
返回进程的PID。

11. process.platform
进程运行其上的操作系统平台.

12. process.ppid
当前父进程的进程ID.

13. process.stderr/process.stdin/process.stdout

错误/输入/输出流。


## 3 方法

1. process.cpuUsage([previousValue])
返回包含当前进程的用户CPU时间和系统CPU时间的对象.
上一次调用process.cpuUsage()方法的结果，可以作为参数值传递给此方法，得到的结果是与上一次的差值。
```
previousValue <Object> 上一次调用此方法的返回值 process.cpuUsage()
Returns: <Object>
   - user <integer>
   - system <integer>

```

2. process.cwd()
返回进程的当前工作目录


3. process.exit([code])

process.exit()方法以结束状态码code指示Node.js同步终止进程。 如果code未提供，此exit方法要么使用'success' 状态码 0

4. process.getegid()
:有效数字标记的组身份
process.geteuid():有效数字标记的用户身份
process.getgid():数字标记的组身份
process.getgroups()：组ID数组
process.getuid()：数字标记的用户身份
process.initgroups(user, extraGroup)：读取/etc/group文件，并且初始化组访问列表，该列表包括了用户所在的所有组

**POSIX平台可用**. 还有对应的set方法。

5. process.kill(pid[, signal])
将signal发送给pid标识的进程。它其实只是发送信号。

6. process.memoryUsage()

```
返回: <Object>
    - rss <integer>
    - heapTotal <integer>
    - heapUsed <integer>
    - external <integer>

```
- heapTotal 和 heapUsed 代表V8的内存使用情况。
- external代表V8管理的，绑定到Javascript的C++对象的内存使用情况。
- rss, 驻留集大小, 是给这个进程分配了多少物理内存(占总分配内存的一部分) 这些物理内存中包含堆，栈，和代码段。
对象，字符串，闭包等存于堆内存。 变量存于栈内存。 实际的JavaScript源代码存于代码段内存.

7. process.nextTick(callback[, ...args])

8. process.uptime()
进程运行时间秒长