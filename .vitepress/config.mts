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
      { text: "✏️其他", items: [
        { text: "obsidian", link: "/obsidian" }
      ] },
      { text: "✍随笔", link: "/essay" },
      { text: "🙋‍♀️关于我", link: "/about" },
    ],
    outline: [2, 3],
    outlineTitle: "ON THIS PAGE",
    socialLinks: [{ icon: "github", link: "https://github.com/lvr1997" }],
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/lvr1997/Lavrena-blog/edit/main/posts/:path",
    },
    search: {
      provider: "algolia",
      options: {
        appId: 'XWQKI7G1L6',
        apiKey: 'aa7d56aadc650956deefe01118fcb73e',
        indexName: 'lavrena_blog_pages',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
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
