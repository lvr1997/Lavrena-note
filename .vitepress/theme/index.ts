import { EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import { inBrowser } from 'vitepress'
import { createMediumZoomProvider } from './composables/useMediumZoom'

import Layout from "./components/Layout.vue";
import "./style/index.css"; //自定义样式
import 'virtual:group-icons.css' //代码组图标
import 'nprogress-v2/dist/index.css' // 进度条样式

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }: EnhanceAppContext) {
    createMediumZoomProvider(app, router)

    app.provide('DEV', process.env.NODE_ENV === 'development')

    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      router.onAfterRouteChange = () => {
        NProgress.done() // 停止进度条
      }
    }
  }
};
