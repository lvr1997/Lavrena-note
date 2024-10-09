import type { DefaultTheme } from "vitepress";

// #region 
const sidebarHome = () => {
  return [
    {
      text: "前端",
      collapsed: false,
      items: [
        { text: "HTML+CSS", items: [
          { text: "HTML", link: "/posts/FrontEnd/HTML+CSS/HTML" },
          { text: "CSS", link: "/posts/FrontEnd/HTML+CSS/CSS" },
        ] },
        { text: "JavaScript", items: [
            { text: "JavaScript 基础", link: "/posts/FrontEnd/javascript/基础" },
            { text: "JavaScript 高级", link: "/posts/FrontEnd/javascript/高级" },
            { text: "JavaScript WedAPIs", link: "/posts/FrontEnd/javascript/WebAPIs" },
          ] 
        },
        { text: "TypeScript", collapsed: true, items: [
            { text: "TypeScript 介绍", link: "/posts/FrontEnd/typescript/intro" },
            { text: "类", link: "/posts/FrontEnd/typescript/Class" },
            { text: "接口", link: "/posts/FrontEnd/typescript/interface" },
            { text: "泛型", link: "/posts/FrontEnd/typescript/Generic" },
          ], },
        { text: "前端工程化", link: "/posts/FrontEnd/前端工程化" },
        { text: "Vue", link: "/posts/FrontEnd/vue/Vue3_fast" },
        { text: "React", link: "/posts/FrontEnd/React" },
        { text: "Nuxt", items: [
          { text: "初识Nuxt3", link: "/posts/FrontEnd/Nuxt3/Nuxt" },
          { text: "实现仿bilibili移动端", link: "/posts/FrontEnd/Nuxt3/Nuxt3-bilibili" },
        ] },
        { text: "Radix Vue", link: "/posts/FrontEnd/RadixVue" },
        { text: "脚手架", items: sidebarScaffold() }
      ]
    },
    {
      text: "后端",
      collapsed: true,
      items: [
        { text: "Java", link: "/posts/BackEnd/Java" },
        { Text: "Nodejs", link: "/posts/BackEnd/Nodejs" }
      ]
    },
    {
      text: "项目",
      collapsed: false,
      items: [{ text: "kd-shop", link: "/posts/Project/kd-shop" }],
    },
    {
      text: "面试",
      collapsed: true,
      items: [{ text: "Vue", link: "/interview/vue" }],
    },
  ]
}

const sidebarProjectKdShop = () => {
  return [
    {
      text: "项目介绍",
      collapsed: false,
      items: [
        { text: "项目介绍", link: "/posts/Project/kd-shop/intro" },
        { text: "项目技术栈", link: "/posts/Project/kd-shop/tech" },
        { text: "项目功能", link: "/posts/Project/kd-shop/function"},
      ]
    }
  ]
}

const sidebarNetwork = () => {
  return [
    {
      text: "计算机网络",
      collapsed: true,
      items: [
        { text: "HTTP", link: "/network/http" },
        { text: "HTTP 请求响应过程", link: "/network/require" },
      ],
    },
  ];
};


/**
 * 代码片段
 * @returns
 */
const sidebarCode = () => {
  return [
    {
      text: "简介",
      collapsed: false,
      items: [
        { text: "为什么要做这个？", link: "/posts/CodeSnippet/intro" },
        { text: "如何使用？", link: "/posts/CodeSnippet/how-to-use" },
      ],
    },
    {
      text: "html 代码片段",
      collapsed: true,
      items: [
        { text: "按钮", link: "/posts/CodeSnippet/HtmlSnippet/button" },
      ],
    },
    {
      text: "经验总结&踩坑",
      collapsed: true,
      items: [
        { text: "如何在vue中使用svg图标", link: "/posts/CodeSnippet/如何在vue中使用svg图标" },
        { text: "项目自适应方案", link: "/posts/CodeSnippet/项目自适应方案" },
        { text: "echart图遇到的问题", link: "/posts/CodeSnippet/echart图遇到的问题" },
        { text: "Nuxt3实现哔哩哔哩移动端实战", link: "/posts/CodeSnippet/Nuxt3实现哔哩哔哩移动端实战" },
        { text: "vue+elementui表格的增删改，行的上移下移，指定位置添加行", link: "/posts/CodeSnippet/vue+elementui表格的增删改，行的上移下移，指定位置添加行" },
        { text: "vue+input文件上传", link: "/posts/CodeSnippet/vue+input文件上传" },
        { text: "vue3+vite封装axios和全局loading", link: "/posts/CodeSnippet/vue3+vite封装axios和全局loading" },
        { text: "vue3+vite项目按需引入AntDesign", link: "/posts/CodeSnippet/vue3+vite项目按需引入AntDesign" },
        { text: "vue3按需引入echarts", link: "/posts/CodeSnippet/vue3按需引入echarts" },
        { text: "vue3使用图片查看器", link: "/posts/CodeSnippet/vue3使用图片查看器" },
        { text: "vue3子组件监听不到props值的变化", link: "/posts/CodeSnippet/vue3子组件监听不到props值的变化" },
        { text: "vue表单自动保存（页面缓存）", link: "/posts/CodeSnippet/vue表单自动保存（页面缓存）" },
      ],
    }
  ];
};

/**
 * 脚手架
 * @returns
 */
const sidebarScaffold = () => {
  return [
    { text: "Vue3 开发模板（一）", link: "/scaffold/chapter-1" },
    { text: "Vue2 开发模板（二）", link: "/posts/FrontEnd/scaffold/chapter-2" },
  ];
};
// #region 读书笔记
const sidebarBookHttp = () => {
  return [
    {
      text: "图解 HTTP",
      collapsed: true,
      items: [{ text: "了解 Web 及网络基础", link: "/book/http/chapter-1" }],
    },
  ];
};

// #endregion

/**
 * 侧边栏配置
 */
export const sidebar: DefaultTheme.Config["sidebar"] = {
    "/posts": sidebarHome(),
    "/posts/CodeSnippet": sidebarCode(),
    "/posts/Project/kd-shop": sidebarProjectKdShop(),
  };