/// <reference types="vitepress/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'markdown-it-mark'
declare module 'markdown-it-task-checkbox';
