import markdownMark from 'markdown-it-mark';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { defineConfig } from "vitepress";
import { nav } from "./configs/nav";
import { tokenize } from "./configs/search";

export default defineConfig({
  lang: "zh-CN",
  title: "Riny's Notes",
  description: "前端搬砖日记",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  srcDir: "./posts",
  srcExclude: [".obsidian", 'templates', 'Clippings'],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/avatar.jpg",
    nav,
    outline: [2, 3],
    outlineTitle: "ON THIS PAGE",
    socialLinks: [{ icon: "github", link: "https://github.com/lvr1997" }],
    search: {
      provider: "local" as const,
      options: {
        detailedView: true,
        miniSearch: {
          options: { tokenize },
          searchOptions: {
            combineWith: 'AND',
            fuzzy: 0.1,
            prefix: true,
            boost: {
              title: 4,
              text: 2,
            },
          }
        },
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
      message: '',
      copyright:
        '<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a> Copyright © 2023-2025 LR powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a>',
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
        collapsed: true,
        // 侧边栏排序
        beforeCreateSideBarItems: (data) => {
          // console.log(data);

          function getOrder(item: string): number {
            let res = item.match(/(?<order>\d+)/);
            if (res && res.groups) {
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
