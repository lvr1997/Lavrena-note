// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Article from "./components/Article.vue";
import Layout from "./components/Layout.vue";
import './style/index.css';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({app}) {
    app.component('Article', Article)
  },
  setup() {}
} satisfies Theme
