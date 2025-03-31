import markdownMark from 'markdown-it-mark';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { defineConfig } from "vitepress";
import { algoliaSearchOption } from "./configs/search";

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
    logo: "/icon.svg",
    nav: [
      { text: "🚩导航", link: "/nav" },
      { text: '📚前端', items: [
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
      { text: '📚后端', items: [
        { text: 'Java', link: '/Java' },
        { text: 'Node', link: '/node' },
        { text: 'Nest', link: '/Nestjs' },
      ] },
      { text: '📚全栈', items: [
        { text: 'Nuxt', link: '/Nuxt3' }
      ]},
      { text: '🗃️项目', items: [
        { text: '科大二手工坊', link: '/kd-shop' },
      ] },
      { text: "🙋‍♀️关于我", link: "/about" },
    ],
    outline: [2, 3],
    outlineTitle: "ON THIS PAGE",
    socialLinks: [{ icon: "github", link: "https://github.com/lvr1997" }],
    editLink: {
      pattern: "https://github.com/lvr1997/Lavrena-blog/edit/main/posts/:path",
    },
    search: algoliaSearchOption,
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
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    plugins: [
      AutoSidebar({
        path: '/posts',
        ignoreList: ['public', 'assets', '.obsidian', 'templates', 'Clippings'],
        ignoreIndexItem: true,
        titleFromFile: true,
        // 侧边栏排序
        beforeCreateSideBarItems: (data) => {
          console.log(data);

          function getOrder(item: string): number {
            let res = item.match(/(?<order>\d+)/);
            if (res) {
              return parseInt(res.groups.order);
            }
            return 0;
          }

          data.sort((a, b) => {
            return getOrder(a) - getOrder(b);
          });

          return data;
        },
      })
    ]
  }
});
