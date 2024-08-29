> 学而时习之，不亦说乎

## 前言

准备node环境，以及npm镜像

node环境，是开发vue项目的基本条件，[Node传送门](http://nodejs.cn/download/)，下载安装包，一路下一步即可

检查：
```
node -v --出现版本号信息即安装成功
```

```
npm -v  --出现版本号信息即安装成功
```
安装镜像：（解决npm下载速度慢的问题）
```
npm config set registry https://registry.npm.taobao.org
或
npm install -g cnpm --registry=https://registry.npm.taobao.org --使用cnpm代替npm
```
安装vue

```
npm install vue
```

养成习惯，每次安装后检查一下，安装成功了吗
```
vue --version
```
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d21b0e9b60c0435fa233c478b1e7e177~tplv-k3u1fbpfcp-watermark.image)

vue最新版本可以使用`vue ui`图形化界面创建一个项目

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/746e16f6248145c0a3d0da419bb24a81~tplv-k3u1fbpfcp-watermark.image)

启动之后页面

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ade772032b534a2da80012ba0683552b~tplv-k3u1fbpfcp-watermark.image)

上方选择一个路径，点击在此创建新项目

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13e12c26e6e4425dab195157340ee80a~tplv-k3u1fbpfcp-watermark.image)

输入项目名，其它的默认即可，点击下一步

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8951d4847004941b6ed03cab78bdec6~tplv-k3u1fbpfcp-watermark.image)

选择手动配置，下一步

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7351f4164224bc8bbcc7e54c83143c5~tplv-k3u1fbpfcp-watermark.image)

下一步

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c09e5d9bb12e43a7ada34c5e617141be~tplv-k3u1fbpfcp-watermark.image)

ok，我们创建项目，耐心等一下...

项目创建成功后，使用`npm run serve`启动项目，默认访问地址为`localhost:8080`

## 