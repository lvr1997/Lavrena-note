import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Lavrena's Notes",
  description: "知识积累、记录和总结",  //<meta name="algolia-site-verification"  content="5E2071B9EF43BA49" />
  head: [["link", { rel: "icon", href: "/favicon.ico" }], ["meta", { name: 'algolia-site-verification', content: "5E2071B9EF43BA49" }]],
  srcDir: "./posts",
  srcExclude: [".obsidian", 'templates'],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "🚩导航", link: "/nav" },
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
      provider: 'algolia',
      options: {
        appId: 'XWQKI7G1L6',
        apiKey: 'aa7d56aadc650956deefe01118fcb73e',
        indexName: 'notes',
      }
    },
    footer: {
      message:
        '<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a>❤<a href="http://beian.miit.gov.cn" target="_blank">冀ICP备2024067902号</a>',
      copyright:
        'Copyright © 2023-2024 Lavrena powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a>',
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
        ignoreList: ['public', 'assets', '.obsidian', 'templates'],
        ignoreIndexItem: true,
        titleFromFile: true
      })
    ]
  }
});
