import markdownMark from 'markdown-it-mark';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Lavrena's Notes",
  description: "知识积累、记录和总结",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  srcDir: "./posts",
  srcExclude: [".obsidian", 'templates', 'Clippings'],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "🚩导航", link: "/nav" },
      { text: '📚前端', items: [
        { text: 'HTML+CSS+JS', link: '/web' },
        { text: 'TypeScript', link: '/TypeScript' },
        { text: 'Vue', link: '/vue' },
        { text: 'React', link: '/React' },
        { text: '脚手架开发模板', link: '/scaffold' },
        { text: '代码片段', link: '/CodeSnippet' },
        { text: 'UI组件库', link: '/ui-modules' },
        { text: '无样式组件库', link: '/unheadless-ui' },
        { text: 'Echarts', link: '/echarts' },
        { text: 'Threejs', link: '/Threejs' },
        { text: '面试', link: '/Interview' }
      ]},
      { text: '📚后端', items: [
        { text: 'Node', link: '/node' },
        { text: 'Java', link: '/Java' },
        { text: 'Nest', link: '/Nestjs' },
      ] },
      { text: '📚全栈', items: [
        { text: 'Nuxt', link: '/Nuxt3' }
      ]},
      { text: '🗃️项目', items: [
        { text: '科大二手工坊', link: '/kd-shop' },
      ] },
      { text: "✍随笔", link: "/essay" },
      { text: "🙋‍♀️关于我", link: "/about" },
    ],
    outline: [2, 3],
    outlineTitle: "ON THIS PAGE",
    socialLinks: [{ icon: "github", link: "https://github.com/lvr1997" }],
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/lvr1997/Lavrena-blog/edit/main/docs/:path",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                displayDetails: "显示详情",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      }
    },
    footer: {
      message:
        '<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a>❤<a href="http://beian.miit.gov.cn" target="_blank">冀ICP备2024067902号</a>',
      copyright:
        'Copyright © 2023-2024 Lavrena powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a>',
    },
  },
  markdown: {
    config: (md) => {
      md.use(markdownMark)
    },
  },
  sitemap: {
    hostname: "https://rgbyove.top",
  },
  ignoreDeadLinks: true,
  vite: {
    plugins: [
      AutoSidebar({
        path: '/posts',
        ignoreList: ['public', 'assets', '.obsidian', 'templates', 'Clippings'],
        ignoreIndexItem: true,
        titleFromFile: true
      })
    ]
  }
});
