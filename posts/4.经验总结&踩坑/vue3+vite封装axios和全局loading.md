# vue3+vite封装axios和全局loading

# vue3+vite封装axios和全局loading

## axios

**api.js** 封装的是api接口，在项目中大量用到接口不能分散写在各处、不易维护
**baseUrl.s** 匹配环境变量 比如开发环境则使用线上接口，生产环境则使用生产接口
**http.js** 创建axiso实例写入请求拦截响应拦截
**request.js** 封装的是请求方法，在项目中大量用到接口，所以将请求方法也封装

### baseUrl.js

```jsx
let baseURL = "";if (process.env.NODE_ENV === "development") {
    // 开发环境  因为我这里写了配置跨域的重定路径所以是api 如下图    baseURL = "/api";} else if (process.env.NODE_ENV === "production") {
    // 正式环境 真正的上线网址 不是跨域别名路径,在network不显示    baseURL = "";} else {
    // 测试环境    baseURL = "";}
export default baseURL;
```

vite.config.js中配置代理

```jsx
server: {
    host: '0.0.0.0',    hmr: true,    strictPort: false,    proxy: {
      '/api': {
        target: 'http://localhost:3000',        changeOrigin: true,        ws: false,        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
```

### http.js创建axiso实例

```jsx
import axios from "axios";// 导入element-ElMessage 弹框// import { ElMessage } from "element-plus";// 导入配置的环境变量urlimport baseURL from "./baseURL";// 导入路由，没有this，使用路由实例跳转import router from "../route/router.ts";// 导入main全局配置文件import app from "../../src/main";// 开启loadingapp.config.globalProperties.$loading.showLoading();// 创建axios实例const http = axios.create({
  baseURL, //配置了跨域,起了别名api,在baseBUL用了别名,这里使用baseURL,配置在下面vue.config.js  timeout: 6000,  withDirectives: true, // 是否携带cookies});// 请求拦截http.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理 config是axios的配置对象    // console.log(config);    //  携带token    config.headers["Authorization"] =      "Bearer " + JSON.parse(localStorage.getItem("remember_token")) || null;    // 配置完成将config返回    return config;  },  (err) => {
    // 当请求失败时做一些处理 抛出错误    throw new Error(err);  }
);// 响应拦截http.interceptors.response.use(
  (res) => {
    // 在返回响应之前做一些处理 res是axios的配置对象    // console.log(res);    // 关闭loading    app.config.globalProperties.$loading.hideLoading();    // 根据后台状态码统一封装提示信息 就不需要在页面接口在单独写了    // 这里根据实际接口的嵌套情况和状态码来写 这里只是我的接口嵌套情况    let { status, msg } = res.data.meta;    //key = value  status等于200就执行200下的代码 执行完break退出循环    switch (status) {
      case 200:        ElMessage({
          showClose: true,          message: msg,          type: "success",        });        break;      case 401:        ElMessage({
          showClose: true,          message: "未授权",          type: "error",        });        // console.log(this);        // this是undefined所以引入路由;        router.push("/login"); //未授权跳转到login        break;    }
    // 这里根据接口返回的数据嵌套结构来返回 比如我的接口返回的是{data:{message:{}}}    return res.data.message;  },  (err) => {
    // 当响应失败时做一些处理 抛出错误    throw new Error(err);  }
);// 导出 http实例 方便调用export default http;
```

### 另一种方案

vue3+vite项目引入axios

> 原文参考：前端架构带你 封装axios，一次封装终身受益「美团后端连连点赞」 - 掘金
>