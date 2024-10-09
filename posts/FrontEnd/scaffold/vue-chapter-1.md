## 技术选型

前端：vue3.4 antdesignvue4 unocss(备选) 构建工具vite5.x TS

## 前端配置

- [x]  配置eslint https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
- [x]  配置prettier https://www.prettier.cn/docs/install.html
- [x]  配置sass预处理器 https://www.sass.hk/docs/
- [x]  配置stylelint https://github.com/prettier/stylelint-config-prettier
- [x]  配置husky 在提交代码之前 检查代码规范 https://typicode.github.io/husky/how-to.html
- [x]  配置commitlint 配置代码提交规范
- [x]  统一包管理器工具

### 强制使用pnpm包管理器工具

团队开发项目的时候，需要统一包管理器工具,因为不同包管理器工具下载同一个依赖,可能版本不一样,导致项目出现bug问题,因此包管理器工具需要统一管理!!!
在根目录创建scripts/preinsta11.js 件

- [x]  配置src别名
- [x]  配置多环境
新建三个文件
.env.development .env.production .env.test
“build:test”:“vue-tsc && vite build –mode test”,
“build:pro”:“vue-tsc && vite build –mode production’
- [x]  svg图标组件集成
安装 pnpm i vite-plugin-svg-icons -D
- [x]  封装项目中的全局组件
- [x]  集成mockjs模拟数据 vite-plugin-mock

## 安装插件

```bash
# 安装unplugin-vue-components插件
npm i unplugin-vue-components -D
```

## vite.config.js配置

```jsx
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),   
    Components({
      dts: true,      
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less', // 一定要开启这个配置项        
        }),      
      ],   
    })
  ],  
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { // 在这里自定义主题色等样式          
	        'primary-color': '#32B87D',          
	        'link-color': '#333',          
	        'border-radius-base': '2px',       
         },        
         javascriptEnabled: true,      
	  },    
    },  
  },  
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),   
    },  
  },
});
```

## 根据需要将提示类组件全局注册的组件在main.js中

```jsx
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
//挂载到全局配置中
app.config.globalProperties.$message = message;
```

## 后端配置

## 项目中遇到的问题

### 修改svg图标颜色不生效

问题: 封装完SvgIcon组件后， 使用color=“blue” 不生效

```html
<SvgIcon name="plus" color="blue" width="50px" height="50px"/>
```

原因：你导入的 `icons/plus.svg` 图标中存在fill属性 这个属性中设置的颜色会覆盖掉你设置的颜色
解决办法：`icons/plus.svg` 去掉 fill属性

首页搭建
要使用收缩与展开，el-aside必须设置width=“collapse”，否则收缩展开会出现收缩后，el-aside宽度不变窄
需要使用动态改变展开收缩值 :collapse=“isCollapse”
@open=“handleOpen”展开后改变isCollapse的值（@close=“handleClose”不生效也不影响效果）
// 设置菜单栏可折叠

```tsx
const isCollapse = inject('isCollapse', ref(false))
const handleOpen = (key, keyPath) => {
	isCollapse.value = false;
}
```

el-menu-item中的菜单项必须放在template中，且solt为title否则，展开收缩的会不包含菜单文字

```html
<template #title>{{menu.authName}}</template>
```

[[使用easy-mock模拟接口数据]]
## 项目的全局状态管理

> 用户数据中有一个关键的数据叫做**token（用来标识当前用户是否登录）**，而Token**持续一段时间才会过期**

而Pinia的存储是基于内存的，刷新就会丢失，为了**保持登录状态**，就要做到刷新不丢失，**需要配合持久化进行存储**
1. 使用localStorage进行持久化存储
2. 使用pinia插件[pinia-plugin-persistedstate | 官网地址](https://links.jianshu.com/go?to=https%3A%2F%2Fprazdevs.github.io%2Fpinia-plugin-persistedstate%2Fzh%2F)
该插件的特点：
- 与 [`vuex-persistedstate`](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Frobinvdvleuten%2Fvuex-persistedstate) 相似的 API
- 所有 Store 均可单独配置
- 自定义 storage 和数据序列化
- 恢复持久化数据前后的 hook
- 每个 Store 具有丰富的配置
- 兼容 Vue 2 和 3
- 无任何外部依赖
###### ①. 安装 pinia-plugin-persistedstate 插件：
`npm i pinia-plugin-persistedstate`
###### ②. 将插件添加到 pinia 实例上

```jsx
import { createPinia } from 'pinia'import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
```

**③. 创建 userStore 时，将 persist 选项设置为 true**

```tsx
import { defineStore } from 'pinia'
import { ref } from 'vue'
// 导入请求登录的接口
import { loginAPI } from '@/apis/user'
export const useUserStore = defineStore('user', () => {
    //定义管理用户数据的state
    const userInfo = ref({})
    // 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
    }
    // 以对象的形式把state和action return出去
    return { userInfo, getUserInfo }
}, {
    persist: true
})
```

### 6. 请求拦截器携带Token

> 为什么要在请求拦截器携带Token？
> Token作为用户标识，在很**多个接口中都需要携带Token**才可以正确获得数据，所以需要在接口调用时携带Token。另外，为了**统一控制**采取请求拦截器携带的方案

如何配置？

Axios请求拦截器可以在接口正式发起之前对请求参数做一些事情，通常Token数据会被注入到**请求header**中，格式按照**后端要求的格式进行拼接处理**

在 `src/utils/http.js` 中配置

```tsx
//axios 请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1. 从pinia里面获取token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    // 2. 按照后端的要求拼接token数据
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))
```

### 7. 退出功能实现

逻辑：点击确定退出按钮时，清除当前用户信息，触发action，然后跳转到登陆页面

```jsx
const confirm = () => {
  // 退出登录业务逻辑实现  // 清除用户信息，触发action 
  userStore.clearUserInfo()
  // 跳转到登录页面  
  router.push('/login')
}
```

在src/stores/user.js中添加clearUserInfo清除用户信息方法

```tsx
import { defineStore } from 'pinia'
import { ref } from 'vue'
// 导入请求登录的接口
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
    //定义管理用户数据的state
    const userInfo = ref({})
    // 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
    }
    // 退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    // 以对象的形式把state和action return出去
    return { userInfo, getUserInfo, clearUserInfo }
}, {
    persist: true
})
```

### 8. Token失效401拦截

> Token的有效性可以保持一定时间，如果用户一段时间不做任何处理，Token就会失效，使用失效的Token再去请求一些接口，接口会报401状态码错误，需要我们做额外处理

解决方案：**在axios响应拦截器做统一处理**

逻辑： 失败回调中拦截401，清除掉过期的用户信息，然后跳转到登录页

在 src/utils/http.js 中配置

```tsx
//axios 响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // 1. 从pinia里面获取token数据
    const userStore = useUserStore()
    // 统一错误提示
    ElMessage({ type: 'warning', message: e.response.data.msg })
    // 401 token 失效处理
    // 清除本地用户数据
    // 跳转到登录页
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})
```

至此，vue使用pinia实现用户登录，退出功能就全部完成了。