import type { DefaultTheme } from "vitepress";

// #region 
const sidebarHome = () => {
  return [
    {
      text: "主页",
      collapsed: true,
      items: [
        { text: "目录", link: "/home/introduction" },
        { text: "vitepress 折腾记（一）", link: "/home/vitepress-1" },
        { text: "本地文档搜索", link: "/home/local-search" },
        { text: "giscus 评论系统", link: "/home/giscus" },
        { text: "部署到 github pages", link: "/home/github-pages" },
        { text: "天气图标", link: "/home/weather-icon" },
        { text: "Emoji 表情", link: "/home/emoji" },
      ],
    },
  ];
};

const sidebarInterview = () => {
  return [
    {
      text: "前端面试题",
      collapsed: true,
      items: [{ text: "Vue", link: "/interview/vue" }],
    },
  ];
};

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

const sidebarTypeScript = () => {
  return [
    {
      text: "TypeScript",
      collapsed: true,
      items: [
        { text: "TypeScript 介绍", link: "/typescript/intro" },
        { text: "基础类型", link: "/typescript/basic-types" },
        { text: "元组类型", link: "/typescript/tuple" },
        { text: "枚举类型", link: "/typescript/enum" },
        { text: "接口", link: "/typescript/interface" },
        { text: "函数", link: "/typescript/function" },
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
      collapsed: true,
      items: [
        { text: "为什么要做这个？", link: "/codes/intro" },
        { text: "如何使用？", link: "/codes/how-to-use" },
      ],
    },
    {
      text: "html 代码片段",
      collapsed: true,
      items: [
        {
          text: "按钮",
          items: [
            { text: "彩虹按钮", link: "/codes/front/button/rainbow-button" },
            {
              text: "新拟态风格按钮",
              link: "/codes/front/button/neumorphism-button",
            },
          ],
        },
      ],
    },
  ];
};

const sidebarWebpack = () => {
  return [
    {
      text: "webpack 4 基础",
      collapsed: true,
      items: [
        { text: "Webpack 简介", link: "/webpack/webpack4-basic/chapter-1" },
        { text: "Webpack 的初体验", link: "/webpack/webpack4-basic/chapter-2" },
        {
          text: "Webpack 开发环境的基本配置",
          link: "/webpack/webpack4-basic/chapter-3",
        },
        {
          text: "Webpack 生产环境的基本配置",
          link: "/webpack/webpack4-basic/chapter-4",
        },
        { text: "Webpack 优化配置", link: "/webpack/webpack4-basic/chapter-5" },
        { text: "Webpack 配置详情", link: "/webpack/webpack4-basic/chapter-6" },
        { text: "拓展内容", link: "/webpack/webpack4-basic/chapter-7" },
      ],
    },
    {
      text: "webpack 4 进阶",
      collapsed: true,
      items: [],
    },
  ];
};
/**
 * 脚手架
 * @returns
 */
const sidebarScaffold = () => {
  return [
    {
      text: "Vue3 开发模板",
      collapsed: true,
      items: [
        { text: "Vue3 开发模板（一）", link: "/scaffold/chapter-1" },
        { text: "Vue3 开发模板（二）", link: "/scaffold/chapter-2" },
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

export const sidebar: DefaultTheme.Config["sidebar"] = {
    "/home/": sidebarHome(),
    "/interview/": sidebarInterview(),
    "/network/": sidebarNetwork(),
    "/typescript/": sidebarTypeScript(),
    "/codes": sidebarCode(),
    "/webpack": sidebarWebpack(),
    "/scaffold": sidebarScaffold(),
    "/book/http": sidebarBookHttp(),
  };