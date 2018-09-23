## npm 包管理工具

- npm search gulp 查找包
- npm view gulp 查看包
- npm install gulp  安装包
- npm install -g express-generator 全局安装包
- npm root -g 查看全局安装路径
- npm config set prefix "d:\global" 修改全局路径
- npm config list 查看所有 配置信息
- npm list查看当前项目所有的包
- npm list -g 显示全局下所有的包
- npm uninstall [-g] gulp 卸载[全局]下的gulp包
- npm update  [-g] gulp 更新[全局]gulp包
- npm update 更新当前项目下所有的包
- npm init 初始化项目
- npm install mime --save package.json中没有记录

- npm shrinkwrap  生成npm-shrinkwrap.json,记录当前准确的版本（即当前正在使用的版本），
  下一次 npm install 时，会安装所有版本完全相同的模块；
  加上参数 --dev ，还可以记录devDependencies字段中模块的准确版本

- npm prune 修剪模块
  使用 npm shrinkwrap时，可能存在某个已经安装的模块不在dependencies字段内，使用 npm shrinkwrap会报错。
  使用npm prune 移除所有不在dependencies字段内模块，可以使用 npm prune [pakageName] 移除全部或某个模块

- npm adduser
- npm publish

