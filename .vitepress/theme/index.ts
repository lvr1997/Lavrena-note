import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { App, nextTick, onMounted, watch } from "vue";
// 引入第三方库
import mediumZoom from "medium-zoom";
// 自定义组件
import Layout from "./components/Layout.vue";
import "./style/index.css"; //自定义样式

export default {
  extends: DefaultTheme,
  Layout,
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
