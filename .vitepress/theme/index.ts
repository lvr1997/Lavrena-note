// https://vitepress.dev/guide/custom-theme
import { toRefs } from 'vue'
import { useData, useRoute } from 'vitepress';
import type { Theme } from 'vitepress'
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import DefaultTheme from 'vitepress/theme'
import Layout from "./components/Layout.vue";
import Article from "./components/Article.vue";
import './style/index.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({app}) {
    app.component('Article', Article)
  },
  setup() {
    const { frontmatter } = toRefs(useData());
    const route = useRoute();
    giscusTalk(
      {
        repo: 'lvr1997/Lavrena-blog',
        repoId: 'R_kgDOMnMr4A',
        category: 'Announcements', // 默认: `General`
        categoryId: 'DIC_kwDOMnMr4M4Ch3mj',
        mapping: 'pathname', // 默认: `pathname`
        inputPosition: 'bottom', // 默认: `top`
        lang: 'zh-CN', // 默认: `zh-CN`
        lightTheme: 'light', // 默认: `light`
        darkTheme: 'dark', // 默认: `transparent_dark`
        loading: 'eager',
      },
      {
        frontmatter,
        route,
      },
      // 是否全部页面启动评论区。
      // 默认为 true，表示启用，此参数可忽略；
      // 如果为 false，表示不启用。
      // 可以在页面使用 `comment: true` 前言单独启用
      true
    );
  }
} satisfies Theme
