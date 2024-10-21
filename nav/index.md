---
layout: doc
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<style src="./index.scss"></style>

<script setup>
import MNavLinks from './components/MNavLinks.vue'
import { NAV_DATA } from './data'

const { A, B, C, D, E } = NAV_DATA
</script>
<style src="./index.scss"></style>

<MNavLinks title="前端生态" :items="A"/>
<MNavLinks title="工具相关" :items="B"/>
<MNavLinks title="有趣的开源项目" :items="C"/>
<MNavLinks title="大数据" :items="D"/>
<MNavLinks title="低代码" :items="E"/>



