
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, onMounted, watch } from "vue";
// 引入第三方库
import mediumZoom from "medium-zoom";
import vitepressBackToTop from 'vitepress-plugin-back-to-top';
import 'vitepress-plugin-back-to-top/dist/style.css';
// 自定义组件
import Layout from "./components/Layout.vue";
import Linkcard from "./components/Linkcard.vue";
import Nav from "./components/nav/index.vue";
import "./style/index.css"; //自定义样式

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("Linkcard", Linkcard);
    app.component("Nav", Nav);
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
