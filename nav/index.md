---
layout: doc
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

> 参考 [茂茂物语](https://notes.fe-mm.com/) 大神做的导航站点，感谢！👉 [原文链接](https://notes.fe-mm.com/daily-notes/issue-38)

<style src="./index.scss"></style>

<script setup>
import MNavLinks from './components/MNavLinks.vue'
import { NAV_DATA } from './data'

const { A, B, C, D, E, F } = NAV_DATA
</script>
<style src="./index.scss"></style>

<MNavLinks title="前端生态" :items="A"/>
<MNavLinks title="工具相关" :items="B"/>
<MNavLinks title="大神文章" :items="C"/>
<MNavLinks title="技术提升" :items="D"/>
<MNavLinks title="大数据" :items="E"/>
<MNavLinks title="低代码" :items="F"/>

