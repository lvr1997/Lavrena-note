<template>
    <MNavLinks title="前端笔记" :items="FrontEnd" />
    <MNavLinks title="全栈？" :items="BackEnd" />
    <MNavLinks title="前端生态" :items="frontendEnvironment" />
    <MNavLinks title="工具相关" :items="tools" />
    <MNavLinks title="有趣的开源项目" :items="openSourceProjects" />
    <MNavLinks title="大数据" :items="bigData" />
    <MNavLinks title="3D可视化" :items="web3D" />
    <MNavLinks title="低代码" :items="lowerCode" />
</template>

<script setup lang="ts">
import MNavLinks from './MNavLinks.vue';
import { NAV_DATA } from './data';

const { frontendEnvironment, tools, openSourceProjects, bigData, web3D,lowerCode, FrontEnd, BackEnd } = NAV_DATA
</script>