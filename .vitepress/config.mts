import { defineConfig } from 'vitepress'
import { sidebar } from './configs';

export default defineConfig({
  lang: 'zh-CN',
  title: "Lavrena's Blog",
  description: "A VitePress Site",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于作者', link: '/about' }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lvr1997' }
    ],
    editLink: {
      pattern: 'https://github.com/lvr1997/Lavrena-blog/edit/main/docs/:path'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                displayDetails: '显示详情',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    footer: {
      message: '<a href="https://wjk.usst.edu.cn/2024/0821/c16753a325268/page.htm">CC BY-SA 4.0</a>❤<a href="http://beian.miit.gov.cn">冀ICP备2024067902号</a>',
      copyright: 'Copyright © 2023-2024 Lavrena powered by <a href="https://vitepress.dev/">VitePress</a>'
    }
  },
})
