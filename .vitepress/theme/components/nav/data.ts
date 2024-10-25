export const NAV_DATA = {
    FrontEnd: [
        { icon: '', title: 'HTML+CSS+JS', desc: '前端三剑客', link: '/web' },
        { icon: '', title: 'TypeScript', desc: '有类型支持的JavaScript', link: '/TypeScript' },
        { icon: '', title: 'UI组件库', desc: '常见大厂UI组件库Ant Design Vue、Element使用踩坑', link: '/ui-modules' },
        { icon: '', title: 'Vue', desc: '工作中vue常用知识总结', link: '/vue' },
        { icon: '', title: 'React', desc: '还在学习中...', link: '/React' },
        { icon: '⚒️', title: 'Scaffold', desc: '常用的脚手架项目配置模板', link: '/scaffold' },
        { icon: '', title: 'CodeSnippet', desc: '平常用到的代码片段', link: '/CodeSnippet' },
        { icon: '', title: '无样式组件库', desc: '最近学到的无样式组件库相关知识', link: '/unheadless-ui' },
        { icon: '🧑‍🏫', title: '面试', desc: '背八股文的时候到了/(ㄒoㄒ)/~~', link: '/Interview' },
    ],
    BackEnd: [
        { icon: '', title: 'Nuxt', desc: '基于Vue的全栈框架', link: '/Nuxt3' },
        { icon: '', title: 'Nestjs', desc: '一个Nodejs框架，学过Java的我，看着它有点像熟悉的陌生人', link: '/Nestjs' },
        { icon: '', title: 'Java', desc: 'Java远古笔记', link: '/Java' },
    ],
    frontendEnvironment: [
        { icon: '📂', title: 'Clippings', desc: '我的网页收藏夹', link: '/Clippings' },
        { icon: 'https://vueuse.org/favicon.svg', title: 'VueUse', desc: 'VueUse 是一个 Vue 3 的工具库，它提供了一些常用的工具函数，如：useMousePosition、useDebounceFn、useThrottleFn 等。', link: 'https://vueuse.org/' },
        { icon: 'https://3x.antdv.com/assets/logo.1ef800a8.svg', title: 'Ant Deaign Vue', desc: '公司两个项目组都用它', link: 'https://www.antdv.com/' },
        { icon: 'https://element-plus.org/images/element-plus-logo.svg', title: 'Element Plus', desc: '饿了么出品', link: 'https://element-plus.org/zh-CN/' },
        { icon: 'https://vitepress.dev/vitepress-logo-mini.svg', title: 'VitePress', desc: 'Vue官方团队维护的静态站点生成器', link: 'https://vitepress.dev/zh/' },
        { icon: 'https://www.radix-vue.com/logo.svg', title: 'Radix Vue', desc: 'Vue 无样式组件库', link: 'https://www.radix-vue.com/' },
        { icon: 'https://lhammer.cn/You-need-to-know-css/static/logo.png', title: 'You need to know css', desc: '常见CSS实现的动画效果，这里都有', link: 'https://lhammer.cn/You-need-to-know-css/' },
        
        { icon: 'https://uiverse.io/assets/logo-png-BXFOQKfc.png', title: 'UIVERSE', desc: '一些炫酷的UI小组件', link: 'http://uiverse.io' },
        { icon: 'https://uilibhub.com/favicon.png', title: 'UILibHub', desc: '精选最优质的 React、Vue UI、小程序组件库', link: 'https://uilibhub.com/zh' },
        { icon: 'https://loading.io/favicon.ico', title: 'loading.io', desc: 'Your SVG + GIF + PNG Ajax Loading Icons and Animation Generator', link: 'https://loading.io/' },
        { icon: 'https://primevue.org/favicon.ico', title: 'PrimeVue', desc: 'PrimeVue 是一个与设计无关的库，与其他UI库不同，它不强制使用某种样式', link: 'https://primevue.org' }
    ],
    tools: [
        { icon: 'https://www.json.cn/favicon.ico', title: 'Json.cn', desc: '在线json解析工具', link: 'https://www.json.cn/' },
        { icon: 'https://apifox.com/favicon.ico', title: 'APIfox接口调试工具', desc: '比Postman好用', link: 'https://app.apifox.com/main' },
        { icon: 'https://vuejsexamples.com/favicon.ico', title: 'vue实用案例收集', desc: 'vue实用案例收集：', link: 'https://vuejsexamples.com/' }, 
        { icon: 'https://logofa.st/favicon.ico', title: 'LogoFast | Make Beautiful Logos Fast and Free', desc: '在线生成logo', link: 'https://logofa.st' },
        { icon: 'https://svg.wtf/favicon.svg', title: 'SVG在线', desc: '学习如何编写 SVG 代码的游乐场 - 包括一些有用的代码相关功能，如悬停查看属性的文档等。', link: 'https://svg.wtf/' },
        { icon: 'https://tool.lu/favicon.ico', title: '在线工具', desc: '在线工具箱', link: 'https://tool.lu/' }
    ],
    openSourceProjects: [
        { icon: '', title: 'GitHub 挑战Vuejs', desc: 'Collection of Vue.js challenges', link: 'https://github.com/webfansplz/vuejs-challenges' },
    ],
    bigData: [
        { icon: '🖊', title: 'Echarts使用总结', desc: '工作中遇到的echarts方面的问题', link: '/echarts' },
        { icon: '', title: 'Echarts', desc: 'Echarts官网', link: 'https://echarts.apache.org/zh/index.html' },
        { icon: '', title: 'Chartjs', desc: '轻量级，适用于现代 Web 的简单而灵活的 JavaScript 图表库', link: 'https://www.chartjs.org/' }
    ],
    web3D: [ { icon: '', title: 'Threejs学习记录', desc: '刚入门...', link: '/Threejs' } ],
    lowerCode: [
        { icon: '', title: 'Avuejs', desc: '基于Element的前端低代码组件库', link: '#' },
        { icon: '', title: 'Ideaz Element', desc: '基于element-plus，支持Vue3.x的中后台业务组件库.', link: '#' },
    ],
    slackingOff: [
        { icon: '', title: '', desc: '', link: '' },
    ]
}

const HERO_ARTICLE = [
    { logo: '', title: 'Easy Mock全解及使用_easymock使用方法-CSDN博客', description: 'Easy Mock的使用', url: 'https://blog.csdn.net/w1418899532/article/details/91951603' },
    { logo: '', title: 'nginx配置反向代理 proxy_pass URL末尾加与不加/(斜杠)的区别_nginx代理后加url后半部分-CSDN博客', description: 'Nginx配置', url: 'https://blog.csdn.net/willingtolove/article/details/108500198' },
    { logo: '', title: '', description: 'Vue3新语法', url: '' },
    { logo: '', title: '前端朽木白大神秘籍', description: '前端面试宝典', url: 'https://www.yuque.com/xiumubai/doc?mode=dark' }, 
    { logo: '', title: '页面循环请求优化方案', description: '循环请求优化方案', url: 'https://blog.csdn.net/weixin_40476233/article/details/121292970' },
    { logo: '', title: 'Vue | 带有左右点击按钮可控制滑动的列表', description: '', url: 'https://blog.csdn.net/weixin_44303404/article/details/123947427' },
    { logo: '', title: 'Vue3分段控制器（Segmented）', description: '（分段控制器是antdesignvue4才有的新功能）', url: 'https://blog.csdn.net/Dandrose/article/details/140664033' },
    { logo: '', title: '实战：用 Vue3 实现一个 Message 消息组件在大多数 web 产品中，全局的 Message 组件占有较大的使 - 掘金', description: 'Vue3 实现一个 Message 消息组件', url: 'https://juejin.cn/post/6975770170413776926' },
]