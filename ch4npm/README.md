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


### npm install--save 与 npm install –save-dev 区别

--save 会把依赖包名称添加到 package.json 文件 dependencies 键下，    
--save-dev 则添加到 package.json 文件 devDependencies 键下，譬如：

{
 "dependencies": {
    "vue": "^2.2.1"
  },
  "devDependencies": {
    "babel-core": "^6.0.0",
    "babel-loader": "^6.0.0",
    "babel-preset-latest": "^6.0.0",
    "cross-env": "^3.0.0",
    "css-loader": "^0.25.0",
    "file-loader": "^0.9.0",
    "vue-loader": "^11.1.4",
    "vue-template-compiler": "^2.2.1",
    "webpack": "^2.2.0",
    "webpack-dev-server": "^2.2.0"
  }
}
npm文档说dependencies是运行时依赖，devDependencies是开发时的依赖。  
即devDependencies 下列出的模块，是我们开发时用的，比如 我们安装 js的压缩包gulp-uglify 时，我们采用的是 “npm install –save-dev gulp-uglify ”命令安装，    
因为在发布后用不到它，只在开发才用到它。  
dependencies 下的模块，则是发布后还需要依赖的模块，譬如像jQuery库或者Angular框架类似的。    
此外，正常使用npm install时，会下载dependencies和devDependencies中的模块。 