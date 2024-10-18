// https://vitepress.dev/guide/custom-theme
// import Theme from "vitepress/theme";
import mediumZoom from "medium-zoom";
import { useData, useRoute } from "vitepress";
import vitepressBackToTop from 'vitepress-plugin-back-to-top';
import 'vitepress-plugin-back-to-top/dist/style.css';
import DefaultTheme from "vitepress/theme";
import { h, nextTick, onMounted, watch } from "vue";
import Home from "./components/Home.vue";
import Layout from "./components/Layout.vue";
import Linkcard from "./components/Linkcard.vue";
import "./style/index.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(Layout, props);
  },
  enhanceApp({ app }) {
    app.component("Home", Home);
    app.component("Linkcard", Linkcard);
    vitepressBackToTop({
      // default
      threshold:300
    })
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg)" });
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
