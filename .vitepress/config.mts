import { defineConfig } from "vitepress";
import { localSearchOptions, nav, sidebar } from "./configs";

export default defineConfig({
  lang: "zh-CN",
  title: "Lavrena's Notes",
  description: "知识积累、记录和总结",
  // appearance: "dark",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  // markdown: {
  //   lineNumbers: true,
  // },
  themeConfig: {
    logo: "/logo.svg",
    nav,
    sidebar,
    outline: [2, 3],
    outlineTitle: "ON THIS PAGE",
    socialLinks: [{ icon: "github", link: "https://github.com/lvr1997" }],
    editLink: {
      pattern: "https://github.com/lvr1997/Lavrena-blog/edit/main/docs/:path",
    },
    search: {
      provider: "local",
      options: localSearchOptions
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
});
