---
title: Nuxt3实现哔哩哔哩移动端实战
titleTemplate: Vue
isOriginal: true
date: 2024-06-12
tags:
  - vue
  - Nuxt3
---

> 项目学习视频：黑马前端Nuxt3原理到实战视频教程，nuxt构建B站哔哩哔哩移动端项目_哔哩哔哩_bilibili

<iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=620070911&bvid=BV1u84y1R7d1&cid=1308448621&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## ①页面搭建

按照Nuxt的目录结构新建目录
首页：`pages/index.vue` 
`<header/>` 封装到 `components/AppHeader.vue` 

导航组件`<van-tab></van-tab>` 封装到 `components/AppTabs.vue` 
视频列表`pages/vadio/index.vue` 视频页

在`app.vue`中使用`<NuxtPage/>`渲染页面

## ②安装vant组件库

安装后无需手动导入，直接就可以使用

### 安装和配置

- 安装 nuxt 版 vant-ui

```bash
npm i @vant/nuxt
```

- 添加配置

::: code-group 
```ts {4} [nuxt.config.ts]
export default defineNuxtConfig({   
	// 调试工具   
	devtools: { enabled: true },  
	// 应用模块   
	modules: ['@vant/nuxt'], 
})
```
:::

- 使用

::: code-group
```html
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
```
:::


> [!TIP] PS
> 在 Nuxt 项目中，vant 组件会自动按需导入（需重启服务）。

### 修改主题色

在 `app.vue` 的样式全局生效。

```html
<style lang="scss">
/* vant-ui 主题定制 */
:root {
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>
```

**参考链接**

- [vant-nuxt](https://github.com/vant-ui/vant-nuxt)
- [vant 样式变量](https://vant-ui.github.io/vant/#/zh-CN/config-provider#bian-liang-lie-biao)

## ③后端接口部分

在Nuxt中无需安装axios
`server/api`目录
`server/api/channel.get.ts` 获取频道信息接口
defineEventHandler定义接口
组件里面 `const { data: channelList } = await useFetch('/api/channel')`
解构出来的data就是响应式的，可以直接用于页面渲染
`server/api/vadio/index.get.ts`

> [!TIP] 拓展
> ts类型处理，通过后端返回值json，转换成ts类型声明文件（json2Ts）
> 在 src/types 目录创建 vadio.ts 类型声明文件
> import type { VadioItem } from "@/types/vadio"
> 请求接口获取列表时 
> const list = ref<VadioItem[]>([])

## SEO 优化

通过设置网页 title 和 description 等 SEO 优化信息，由服务端渲染，可提高网页在搜索引擎结果页面中的排名和可见性 。

```html
<script setup lang="ts">
// SEO 优化信息
useSeoMeta({
  // 网站标题
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  // 网站描述
  description:
    'bilibili是国内知名的在线视频弹幕网站，拥有最棒的ACG氛围，哔哩哔哩内容丰富多元，涵盖动漫、电影、二次元舞蹈视频、在线音乐、娱乐时尚、科技生活、鬼畜视频等。下载客户端还可离线下载电影、动漫。',
  // 搜索关键词
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
})
</script>
```

参考链接：

- [SEO 和 Meta](https://nuxt.com/docs/getting-started/seo-meta#seo-and-meta)

## 项目中的 vw 适配

**安装依赖**

```bash
npm i postcss-px-to-viewport -D
```

**添加配置**

::: code-group  
```ts {4-10} [nuxt.config.ts]
export default defineNuxtConfig({   
	// ...省略   
	// 移动端适配   
	postcss: {     
		plugins: {       
			'postcss-px-to-viewport': {         
				viewportWidth: 375,       
			},     
		},   
	}, 
})
```
:::

### 组件封装

基于首页的静态结构，抽离到 `components` 目录。

- **头部组件** `components/AppHeader.vue`
- **视频组件** `components/AppVideo.vue`

抽离到 `components` 目录的组件可自动导入，在首页、视频详情页中直接使用即可，页面也变得更简洁。
::: code-group
```html [App.vue]
<template>
  <!-- 公共头部 -->
  <AppHeader />
  <!-- 频道模块 -->
  <van-tabs>
    <van-tab v-for="item in 10" :key="item" title="频道" />
  </van-tabs>
  <!-- 视频列表 -->
  <div class="video-list">
    <AppVideo v-for="item in 20" :key="item" />
  </div>
</template>
```
:::
**参考链接**

- [components 目录](https://nuxt.com/docs/guide/directory-structure/components)

## 接口服务器

Nuxt 支持在 `server` 目录写服务器接口，用于数据请求。

为了让大家更好地了解 Nuxt 接口服务器，我们仅提供了静态数据，但这个 `server` 目录可以用于对接数据库等更复杂的操作。这样，您可以通过编写自定义的服务器接口来满足项目的需求。

### 频道接口

**静态数据**

`database/chnnel.ts`

**频道接口**

**Nuxt 基于文件生成接口**，在 `server` 目录下的 `/api/channel.get.ts`，会自动生成接口 `/api/channel`，请求方式为 `get`。

```tsx
import chnnel from '@/database/chnnel'
export default defineEventHandler(() => {
  return chnnel
})
```

可通过 `http://localhost:3000/api/channel` 访问以上频道接口， 文件名的后缀可以是 `.get`, `.post`, `.put`, `.delete` 等，以匹配请求的 HTTP 方法 。

参考资料：

- [server 目录](https://nuxt.com/docs/guide/directory-structure/server)

### 渲染频道列表

- 通过 useFetch 发送请求

获取频道列表数据

::: code-group 
```jsx [index/index.vue]
// 获取频道列表
const { data: channelList } = await useFetch('/api/channel')
```

```html [渲染列表]
<!-- 频道列表 -->
<van-tabs>
	<van-tab v-for="item in 10" :key="item" title="频道" />   
	<van-tab v-for="item in channelList" :key="item.id" :title="item.name" /></van-tabs>
```
:::


### 视频列表接口

**静态数据**

`database/video.ts`

**视频列表接口**
::: code-group
```ts [server/api/video/index.get.ts]
// get  /api/video
import video from '@/database/video'

export default defineEventHandler(() => {
  return video
})
```
:::
### 动态渲染视频

获取视频列表数据

::: code-group
```tsx [index/index.vue]
// 获取视频列表数据
const { data: videoList } = await useFetch('/api/video')
```
:::
v-for 循环展示
::: code-group 
```html 
<!-- 视频列表 -->
<div class="video-list">  
	<NuxtLink class="v-card"
	    v-for="item in videoList" // [!code focus]
	    :key="item.aid" // [!code focus]
	    :to="`/video`"  // [!code focus]
  >
    <div class="card">
      <div class="card-img">
        <img class="pic" :src="item.pic" :alt="item.title" />  
	  </div>
      <div class="count">
        <span>
          <i class="iconfont icon_shipin_bofangshu"></i>
          {{ item.stat.view }}      
		</span>
        <span>
          <i class="iconfont icon_shipin_danmushu"></i>
          {{ item.stat.danmaku }} 
		</span>
      </div>
    </div>
	<p class="title">{{ item.title }}</p>
	</NuxtLink>
</div>
```
:::

参考链接：

- [utils 目录](https://nuxt.com/docs/guide/directory-structure/utils)

## 分页加载

### 分页组件

通过 [vant-list 列表](https://vant-contrib.gitee.io/vant/#/zh-CN/list) 实现滚动触底，加载分页数据。

```vue
<!-- 视频列表 -->
<van-list    
	v-model:loading="loading"    
	:finished="finished"    
	finished-text="去 bilibili App 看更多"    
	@load="onLoad">    
	<div class="video-list">
      ...省略
    </div>
</van-list>
```

滚动触底，触发 onLoad 事件，加载完成，处理 finished 结束。

```ts
// 显示的列表
const list = ref<any[]>([])
// 加载状态
const loading = ref(false)
// 是否加载完成
const finished = ref(false)
// 页码 和 页容量
let page = 1let pageSize = 20
// 滚动触底触发
const onLoad = () => {
  // 表示正在加载  
  loading.value = false  
  // 根据当前页码提取数据  
  const data = videoList.value?.slice(
    (page - 1) * pageSize,    
    page * pageSize,  ) as any[]
  // 追加到用于渲染的数组中  
  list.value.push(...data)
  // 页码累加  
  page++  
  // 加载结束  
  if (videoList.value?.length === list.value.length) {
    finished.value = true  
    }
}
// 初始化加载 - 主动请求前 20 条数据，用于服务端首屏渲染，方便 SEO 抓取到数据
onLoad()
```

### 类型处理

指定正确的 TypeScript 类型可以让项目更安全，在 VS Code 中可通过 `json2ts` 插件，快速基于 JSON 生成 TS 类型声明文件。

**类型声明文件**

::: code-group 
```ts [types/video.d.ts]
export interface Author {
  mid: number  
  name: string  
  face: string
}
export interface Stat {
  aid: number  
  view: number  
  danmaku: number  
  reply: number  
  favorite: number  
  coin: number  
  share: number  
  now_rank: number  
  his_rank: number  
  like: number  
  dislike: number  
  vt: number  
  vv: number
}
export interface VideoItem {
  aid: number  
  type_id: number  
  tname: string  
  pic: string  
  title: string  
  pubdate: number  
  ctime: number  
  tags: any[]
  duration: number  
  author: Author
  stat: Stat
  hot_desc: string  
  corner_mark: number  
  bvid: string  
  enable_vt: number
}
```
:::
**类型升级**

```ts
// 导入类型
// 显示的列表 - 指定类型
import type { VideoItem } from '@/types/video'  // [!code focus]
const onLoad = () => {
// 根据当前页码提取数据
const data = videoList.value?.slice((page - 1) * pageSize,page * pageSize) as VideoItem[]} // [!code focus]
```

## 视频详情-动态路由传参

### 跳转路由传参

修改详情的目录结构

```jsx
pages/video/index.vue => pages/video/[id].vue
//其中 [id].vue  表示动态路由
```

点击跳转 `video/index.vue`

```html
  <NuxtLink
    class="v-card"
    v-for="item in list"
    :key="item.aid"
    :to="`/video/${item.bvid}`"> // [!code focus]
  </NuxtLink>
```

页面中获取参数

```html
<script setup lang="ts">
const { params } = useRoute()

console.log('动态路由id', params.id)
</script>

<template>
  <h2>视频页 {{ $route.params.id }}</h2>
</template>
```

### 视频详情接口
::: code-group
```tsx [server/api/video/[id].get.ts]
// get /api/video/id
import video from '@/database/video'
export default defineEventHandler((event) => {
  // 获取路由参数  
  const { id } = event.context.params || {}
  // 根据 id 查找视频  
  return video.find((v) => v.bvid === id)
})
```
:::
### 代码实现

::: code-group 
```html [pages/video/[id].vue]
<script setup lang="ts">
import type { BarrageInstance } from 'vant'

// 弹幕相关
const barrageList = ref([
  { id: 100, text: '轻量' },
  { id: 101, text: '可定制的' },
  { id: 102, text: '移动端' },
  { id: 103, text: 'Vue' },
  { id: 104, text: '组件库' },
  { id: 105, text: 'VantUI' },
  { id: 106, text: '666' },
])

const barrageRef = ref<BarrageInstance>()

const onPlay = () => {
  barrageRef.value?.play()
}

const onPause = () => {
  barrageRef.value?.pause()
}

// 通过路由参数获取视频id
const { params } = useRoute()
const { data: detail } = await useFetch(`/api/hot/${params.id}`)

// 获取视频列表数据
const { data: videoList } = await useFetch('/api/video')

// 动态设置标题
useSeoMeta({
  title: `${detail.value?.title}_哔哩哔哩bilibili_${detail.value?.author.name}`,
})
</script>

<template>
  <!-- Sticky 粘性布局 -->
  <van-sticky>
    <!-- 头部 -->
    <AppHeader />
    <!-- 弹幕 -->
    <van-barrage v-model="barrageList" :auto-play="false" ref="barrageRef">
      <!-- 视频 -->
      <video
        controls
        class="video-play"
        ref="videoRef"
        @play="onPlay"
        @pause="onPause"
        :poster="detail?.pic"
        src="https://video.pearvideo.com/mp4/third/20230706/cont-1784445-12033417-151259-hd.mp4"
      ></video>
    </van-barrage>
  </van-sticky>
  <!-- 标题作者信息 -->
  <div class="info">
    <h1 class="title-text">{{ detail?.title }}</h1>
    <div class="body">
      <div class="author">
        <img class="avatar" :src="detail?.author.face" />
        <span class="name">{{ detail?.author.name }}</span>
      </div>
    </div>
  </div>
  <!-- 相关推荐 -->
  <div class="relate">
    <h3 class="relate-title">相关推荐</h3>
    <div class="relate-list">
      <AppVideo v-for="item in videoList" :key="item.aid" :item="item" />
    </div>
  </div>
</template>

```
:::
## 页面缓存

没有做页面缓存的话，切换页面时会重新发送请求，用户体验不友好，开启 keepalive 优化体验。

```html
<template>
  <!-- keepalive 设置页面缓存 -->
  <NuxtPage :keepalive="{ max: 10 }" />
</template>
```

- [NuxtPage 开启 keepalive](https://nuxt.com/docs/guide/directory-structure/pages#keepalive)
- [keepalive issues](https://github.com/nuxt/nuxt/issues/15214)

## 打包发布

nuxt 脚手架只是开发过程中，协助开发的工具，当真正开发完了 => 脚手架不参与上线

参与上线的是 => 打包后的源代码

打包：

- 语法解析，ts 解析成 js，scss 解析成 css 等
- 代码分割，代码压缩，tree-shaking （树摇）
- ….

打包后，可以生成，浏览器能够直接运行的网页 => 就是需要上线的源码！

### 打包命令

nuxt 脚手架工具已经提供了打包命令，直接使用即可。

```bash
# 生成用于服务器端运行的优化代码
pnpm build
# 生成静态网站，将应用程序预渲染成静态 HTML 文件，无需服务器端渲染
pnpm generate
```

### 部署上线

- 部署公司的服务器
- 部署到第三方平台，如：[vercel (免费)](https://vercel.com/)

## 项目中遇到的问题

### Q1: 初始化项目失败怎么办？

> 解决方案一：修改 host 文件
> 由于国内访问受限，通过命令行下载可能会失败。
> 映射关系为访问 `raw.githubusercontent.com` 映射到 IP 地址 `185.199.108.133`。

```bash
# Windows 系统 C:\Windows\System32\drivers\etc 增加以下代码
185.199.108.133 raw.githubusercontent.com
```

解决方案参考： [Windows 修改 hosts](https://zhuanlan.zhihu.com/p/563171304) [Mac 修改 hosts](https://zhuanlan.zhihu.com/p/461884595)

> 解决方案二：去GitHub手动下载初始化项目模板 nuxt/starter at v3 (github.com)

## 总结&收获

**完成带数据交互的 哔哩哔哩移动端 项目**，包括以下知识点的实战应用。

- 使用pnpm包管理器
- SEO 优化
- 基于文件的路由系统
- 自动导入
- Nuxt DevTools 调试工具
- 自定义组件
- @vant/nuxt 组件库
- 移动端 vw 适配
- 接口服务器
- 数据获取
- 分页加载
- 动态路由传参
- 项目打包上线