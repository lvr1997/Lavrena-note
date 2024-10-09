import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config["nav"] = [
    { text: '首页', link: '/' },
    { text: '随笔', link: '/article'},
    { text: '收藏', link: '/posts/links' },
    { text: '关于我', link: '/about' }
]