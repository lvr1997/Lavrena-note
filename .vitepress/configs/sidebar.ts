import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/BackEnd/": [
    {
      text: "Java",
      collapsed: false,
      items: [
        {
          text: "Java基础",
          link: "/BackEnd/Java/01-JAVA基础/"
        },
        {
          text: "Java高级",
          link: "/BackEnd/Java/02-JAVA高级/"
        },
        {
          text: "JavaEE",
          link: "/BackEnd/Java/03-JAVAEE/"
        },
        {
          text: "SSH&SSM",
          link: "/BackEnd/Java/04-SSH&SSM/"
        }
      ]
    },
    {
      text: "Nestjs",
      collapsed: false,
      items: [
        {
          text: "Nestjs记录",
          link: "/BackEnd/Nestjs/1.nest_record"
        },
        {
          text: "Nestjs接口",
          link: "/BackEnd/Nestjs/2.nest_interface"
        }
      ]
    }
  ],

  "/FrontEnd/": [
    {
      text: "HTML+CSS+JS",
      collapsed: false,
      items: [
        {
          text: "HTML",
          link: "/FrontEnd/1.HTML+CSS+JS/1.HTML"
        },
        {
          text: "HTML5新特性",
          link: "/FrontEnd/1.HTML+CSS+JS/2.HTML5_new_toys"
        },
        {
          text: "CSS",
          link: "/FrontEnd/1.HTML+CSS+JS/3.CSS"
        },
        {
          text: "JavaScript基础",
          link: "/FrontEnd/1.HTML+CSS+JS/4.js_base"
        },
        {
          text: "JavaScript进阶",
          link: "/FrontEnd/1.HTML+CSS+JS/5.js_step"
        },
        {
          text: "JavaScript API",
          link: "/FrontEnd/1.HTML+CSS+JS/6.js_apis"
        },
        {
          text: "JavaScript代码片段",
          link: "/FrontEnd/1.HTML+CSS+JS/7.js_snippet"
        }
      ]
    },
    {
      text: "TypeScript",
      collapsed: false,
      items: [
        {
          text: "TypeScript介绍",
          link: "/FrontEnd/2.TypeScript/0.intro"
        },
        {
          text: "类",
          link: "/FrontEnd/2.TypeScript/1.Class"
        },
        {
          text: "接口",
          link: "/FrontEnd/2.TypeScript/2.interface"
        },
        {
          text: "泛型",
          link: "/FrontEnd/2.TypeScript/3.Generic"
        },
        {
          text: "TypeScript编译器",
          link: "/FrontEnd/2.TypeScript/4.tsc"
        },
        {
          text: "Webpack+TypeScript",
          link: "/FrontEnd/2.TypeScript/5.webpack_ts"
        }
      ]
    },
    {
      text: "Vue",
      collapsed: false,
      items: [
        {
          text: "Vue基础",
          link: "/FrontEnd/3.Vue/1.vue-base"
        },
        {
          text: "MVVM模式",
          link: "/FrontEnd/3.Vue/2.mvvm"
        },
        {
          text: "Vue SVG",
          link: "/FrontEnd/3.Vue/3.vue_svg"
        },
        {
          text: "Vue3 ViewerJS",
          link: "/FrontEnd/3.Vue/4.vue3_viewerjs"
        },
        {
          text: "Vue3 Props",
          link: "/FrontEnd/3.Vue/5.vue3_props"
        },
        {
          text: "Vue表单自动保存",
          link: "/FrontEnd/3.Vue/7.vue_form_autosave"
        },
        {
          text: "Vue Flexible",
          link: "/FrontEnd/3.Vue/8.vue_flexible"
        },
        {
          text: "自定义日期组件",
          link: "/FrontEnd/3.Vue/9.custom_date_components"
        },
        {
          text: "多条件组件",
          link: "/FrontEnd/3.Vue/10.muti_condition_components"
        },
        {
          text: "多条件组件2",
          link: "/FrontEnd/3.Vue/11.muti_condition_components2"
        }
      ]
    },
    {
      text: "React",
      collapsed: false,
      items: [
        {
          text: "React基础",
          link: "/FrontEnd/4.React/1.base"
        },
        {
          text: "井字棋游戏",
          link: "/FrontEnd/4.React/2.toc-toe"
        }
      ]
    },
    {
      text: "Vue实战应用",
      collapsed: false,
      items: [
        {
          text: "Vue+ElementUI",
          link: "/FrontEnd/5.vue实战应用/vue+elementui"
        },
        {
          text: "Vue+AntDesign",
          link: "/FrontEnd/5.vue实战应用/vue-antdesign"
        },
        {
          text: "Vue+ECharts",
          link: "/FrontEnd/5.vue实战应用/vue-echarts"
        }
      ]
    },
    {
      text: "无样式组件库",
      collapsed: false,
      items: [
        {
          text: "RadixVue",
          link: "/FrontEnd/6.无样式组件库/1.RadixVue"
        }
      ]
    },
    {
      text: "小程序",
      collapsed: false,
      items: [
        {
          text: "微信小程序",
          link: "/FrontEnd/7.小程序/1.wx-miniprogram"
        },
        {
          text: "UniApp",
          link: "/FrontEnd/7.小程序/2.uniapp"
        }
      ]
    },
    {
      text: "Nuxt3",
      collapsed: false,
      items: [
        {
          text: "Nuxt3介绍",
          link: "/FrontEnd/8.Nuxt3/1.intro"
        },
        {
          text: "Nuxt3 B站项目",
          link: "/FrontEnd/8.Nuxt3/2.Nuxt3-bilibili"
        }
      ]
    },
    {
      text: "Three.js",
      collapsed: false,
      items: [
        {
          text: "Three.js介绍",
          link: "/FrontEnd/9.Threejs/1.intro"
        }
      ]
    },
    {
      text: "面试宝典",
      collapsed: false,
      items: [
        {
          text: "面试常见问答",
          link: "/FrontEnd/10.面试宝典/1.面试常见问答"
        },
        {
          text: "面试问题",
          link: "/FrontEnd/10.面试宝典/2.question"
        }
      ]
    },
    {
      text: "VitePress",
      collapsed: false,
      items: [
        {
          text: "VitePress+Obsidian",
          link: "/FrontEnd/11.VitePress/about"
        }
      ]
    }
  ],

  "/i-have/": [
    {
      text: "文档",
      collapsed: false,
      items: [
        {
          text: "需求文档",
          link: "/i-have/01-Documents/1.requirement"
        },
        {
          text: "后端框架",
          link: "/i-have/01-Documents/2.backend-framework"
        },
        {
          text: "前端框架",
          link: "/i-have/01-Documents/3.frontend-framework"
        },
        {
          text: "接口文档",
          link: "/i-have/01-Documents/4.interaface"
        }
      ]
    }
  ]
};