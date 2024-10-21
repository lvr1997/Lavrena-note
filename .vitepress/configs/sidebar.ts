import type { DefaultTheme } from "vitepress";

// #region 
const sidebarFrontEnd = () => {
  return [
    { 
      text: "HTML+CSS", items: [
        { text: "HTML", link: "/posts/FrontEnd/HTML+CSS/HTML" },
        { text: "CSS", link: "/posts/FrontEnd/HTML+CSS/CSS" },
      ] 
    },
    { text: "JavaScript", items: [
        { text: "JavaScript 基础", link: "/posts/FrontEnd/javascript/base" },
        { text: "JavaScript 高级", link: "/posts/FrontEnd/javascript/高级" },
        { text: "JavaScript WebAPIs", link: "/posts/FrontEnd/javascript/WebAPIs" },
      ] 
    },
    { text: "TypeScript", items: [
        { text: "TypeScript 介绍", link: "/posts/FrontEnd/typesript/intro" },
        { text: "类", link: "/posts/FrontEnd/typesript/Class" },
        { text: "接口", link: "/posts/FrontEnd/typesript/interface" },
        { text: "泛型", link: "/posts/FrontEnd/typesript/Generic" },
      ], },
    { text: "前端工程化", items: [
        { text: 'webpack', link: "/posts/FrontEnd/前端工程化/webpack" },
        { text: 'pnpm包管理工具', link: "/posts/FrontEnd/前端工程化/pnpm" }
      ] 
    },
    { text: "Vue", items: [
        { text: '响应式原理', link: "/posts/FrontEnd/vue/vue-base" },
        { text: 'Vue3', link: "/posts/FrontEnd/vue/Vue3_fast" }
      ] 
    },
    { text: "React", link: "/posts/FrontEnd/React" },
    { text: "Nuxt", items: [
      { text: "初识Nuxt3", link: "/posts/FrontEnd/Nuxt3/Nuxt" },
      { text: "实现仿bilibili移动端", link: "/posts/FrontEnd/Nuxt3/Nuxt3-bilibili" },
    ] },
    { text: "Radix Vue", link: "/posts/FrontEnd/RadixVue" },
    { text: "代码片段", items: sidebarCode() },
    {
      text: "经验总结&踩坑",
      collapsed: true,
      items: [
        { text: "如何在vue中使用svg图标", link: "/posts/FrontEnd/bugs/如何在vue中使用svg图标" },
        { text: "项目自适应方案", link: "/posts/FrontEnd/bugs/项目自适应方案" },
        { text: "echart图遇到的问题", link: "/posts/FrontEnd/bugs/echart图遇到的问题" },
        { text: "vue+elementui表格的增删改，行的上移下移，指定位置添加行", link: "/posts/FrontEnd/bugs/vue+elementui表格的增删改，行的上移下移，指定位置添加行" },
        { text: "vue+input文件上传", link: "/posts/FrontEnd/bugs/vue+input文件上传" },
        { text: "vue3+vite封装axios和全局loading", link: "/posts/FrontEnd/bugs/vue3+vite封装axios和全局loading" },
        { text: "vue3+vite项目按需引入AntDesign", link: "/posts/FrontEnd/bugs/vue3+vite项目按需引入AntDesign" },
        { text: "vue3按需引入echarts", link: "/posts/FrontEnd/bugs/vue3按需引入echarts" },
        { text: "vue3使用图片查看器", link: "/posts/FrontEnd/bugs/vue3使用图片查看器" },
        { text: "vue3子组件监听不到props值的变化", link: "/posts/FrontEnd/bugs/vue3子组件监听不到props值的变化" },
        { text: "vue表单自动保存（页面缓存）", link: "/posts/FrontEnd/bugs/vue表单自动保存（页面缓存）" },
      ],
    }
  ]
}

const sidebarBackEnd = () => {
  return [
    { text: "Java远古笔记", items: [
        { text: '介绍', link: "/posts/BackEnd/Java/intro" }
      ] 
    },
    { text: "Nodejs框架", items: [
        { text: "Nest学习记录", link: "/posts/BackEnd/Nestjs/notes" }
      ] 
    }
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
        { text: "为什么要做这个？", link: "/posts/FrontEnd/CodeSnippet/intro" },
        { text: "如何使用？", link: "/posts/FrontEnd/CodeSnippet/how-to-use" },
      ],
    },
    {
      text: "html 代码片段",
      collapsed: true,
      items: [
        { text: "按钮", link: "/posts/FrontEnd/CodeSnippet/HtmlSnippet/button" },
      ],
    },
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
    "/posts/FrontEnd": sidebarFrontEnd(),
    "/posts/BackEnd": sidebarBackEnd(),
    // "/posts/Project/kd-shop": sidebarProjectKdShop(),
  };