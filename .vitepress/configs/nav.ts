import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config["nav"] = [
    { text: '首页', link: '/' },
    { text: '归档', link: '/article'},
    { text: '标签', link: '/article?tags=true'},
    { text: '收藏', link: '/posts/links' },
    { text: '关于作者', link: '/about' }
]