import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: "i-have项目文档", link: "/i-have" },
    { text: "搬砖日记", items: [
        { text: "FrontEnd", link: "/FrontEnd" },
        { text: "BackEnd", link: "/BackEnd" },
    ] },
    { text: "VitePress", link: "https://vitepress.dev/zh/" }
  ]