import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: "🚩导航", link: "/nav" },
    { text: "🖥️Code", items: [
      { text: '前端', items: [
        { text: 'HTML+CSS+JS', link: '/web' },
        { text: 'TypeScript', link: '/TypeScript' },
        { text: 'Vue', link: '/vue' },
        { text: 'React', link: '/React' },
        { text: '小程序', link: '/miniprogram' },
        { text: '脚手架开发模板', link: '/scaffold' },
        { text: 'UI组件库', link: '/ui-modules' },
        { text: '无样式组件库', link: '/unheadless-ui' },
        { text: 'Echarts', link: '/echarts' },
        { text: 'Threejs', link: '/Threejs' },
        { text: '面试', link: '/Interview' },
        { text: "VitePress使用小记", link: "/vitepress" },
        { text: "VitePress官网", link: "https://vitepress.dev/zh/" }
      ]},
      { text: '后端', items: [
        { text: 'Java', link: '/Java' },
        { text: 'Node', link: '/node' },
        { text: 'Nest', link: '/Nestjs' },
      ] },
      { text: '全栈', items: [
        { text: 'Nuxt', link: '/Nuxt3' }
      ]},
      { text: '🗃️项目', items: [
        { text: '科大二手工坊', link: '/kd-shop' },
      ] },
    ]},
    { text: '📗读书笔记', link: '/Books' },
    { text: "✍️随笔", link: '/essay'}
  ]