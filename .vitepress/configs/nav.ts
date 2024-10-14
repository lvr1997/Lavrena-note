import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config["nav"] = [
    { text: '前端', link: '/posts/FrontEnd', activeMatch: '/posts/FrontEnd' },
    { text: '后端', link: '/posts/BackEnd/Java/intro', activeMatch: '/posts/BackEnd' },
    { text: '随笔', link: '/posts/essay', activeMatch: '/posts/essay' },
    // { text: '书籍', link: '/posts/book', activeMatch: '/posts/book' },
]