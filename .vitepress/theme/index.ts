// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Article from "./components/Article.vue";
import Layout from "./components/Layout.vue";
import Tag from "./components/Tag.vue";
import './style/index.css';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({app}) {
    app.component('Article', Article)
    app.component('Tag', Tag)
  },
  setup() {}
} satisfies Theme
