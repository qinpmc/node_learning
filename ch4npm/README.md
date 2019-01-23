# npm 包管理工具

- npm search  查找包
- npm view   查看包
- npm install 安装包,  npm install sax@latest  npm install sax@0.1.1
- npm install -g  全局安装包
- npm root -g 查看全局安装路径
- npm config set prefix "d:\global" 修改全局路径
- npm config list 查看所有 配置信息
- npm list查看当前项目所有的包
- npm list -g 显示全局下所有的包
- npm -v  查看 npm 的版本
- npm config list -l  查看 npm 的配置
- npm info 查看每个模块的具体信息 npm info underscore
- npm uninstall [-g] gulp 卸载[全局]下的gulp包
- npm update  [-g] gulp 更新[全局]gulp包
- npm update 更新当前项目下所有的包
- npm init 初始化项目，用了-f（代表force）、-y（代表yes），则跳过提问阶段，直接生成一个新的package.json文件。
- npm install mime --save package.json中没有记录
- npm set 设置环境变量 npm set init-author-name 'Your name' ,等于为npm init设置了默认值，以后执行npm init的时候，package.json的作者姓名自动写入预设的值


- npm shrinkwrap  生成npm-shrinkwrap.json,记录当前准确的版本（即当前正在使用的版本），
  下一次 npm install 时，会安装所有版本完全相同的模块；
  加上参数 --dev ，还可以记录devDependencies字段中模块的准确版本

- npm prune 修剪模块
  使用 npm shrinkwrap时，可能存在某个已经安装的模块不在dependencies字段内，使用 npm shrinkwrap会报错。
  使用npm prune 移除所有不在dependencies字段内模块，可以使用 npm prune [pakageName] 移除全部或某个模块
- npm run
- npm adduser 在npmjs.com注册一个用户。
- npm login 如已经注册过，就使用该命令登录
- npm publish 将当前模块发布到npmjs.com，需要向npmjs.com申请用户名


## 1 npm install--save 与 npm install –save-dev 区别

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


## 2 npm run

```
{
  "name": "myproject",
  "devDependencies": {
    "jshint": "latest",
    "browserify": "latest",
    "mocha": "latest"
  },
  "scripts": {
    "lint": "jshint **.js",
    "test": "mocha test/"
  }
}
```
上面代码中，scripts字段指定了两项命令lint和test(npm run是npm run-script的缩写):
npm run-script lint或者npm run lint，就会执行jshint **.js
输入npm run-script test或者npm run test，就会执行mocha test

- npm run如果不加任何参数，直接运行，会列出package.json里面所有可以执行的脚本命令
- npm内置了两个命令简写，npm test等同于执行npm run test，npm start等同于执行npm run start
- 如果希望一个操作的输出，是另一个操作的输入，可以借用Linux系统的管道命令，将两个操作连在一起。
  **先运行npm run build-js，然后再运行npm run build-css，两个命令中间用&&连接**。如果希望两个命令同时**平行执行，它们中间可以用&连接**
```
"build-js": "browserify browser/main.js | uglifyjs -mc > static/bundle.js"

//更方便的写法是引用其他npm run命令。
"build": "npm run build-js && npm run build-css"

```
-  npm run命令还可以添加参数,参数之前要加上两个连词线

```
"scripts": {
  "test": "mocha test/"
}

// 上面代码指定npm test，实际运行mocha test/。如果要通过npm test命令，将参数传到mocha，则参数之前要加上两个连词线。
$ npm run test -- anothertest.js

//等同于
$ mocha test/ anothertest.js
```

## 3 使用淘宝 NPM 镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install [name]


