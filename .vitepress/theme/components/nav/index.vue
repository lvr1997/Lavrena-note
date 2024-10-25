<template>
    <MNavLinks title="前端" :items="FrontEnd">
        <Badge type="tip">笔记</Badge>
    </MNavLinks>
    <MNavLinks title="全栈？" :items="BackEnd">
        <Badge type="tip">笔记</Badge>
    </MNavLinks>
    <MNavLinks title="前端生态" :items="frontendEnvironment">
        <Badge type="warning">常用网站</Badge>
    </MNavLinks>
    <MNavLinks title="工具相关" :items="tools">
        <Badge type="warning">实用工具</Badge>
    </MNavLinks>
    <MNavLinks title="有趣的开源项目" :items="openSourceProjects">
        <Badge type="info">GitHub</Badge>
    </MNavLinks>
    <MNavLinks title="大数据" :items="bigData">
        <Badge type="info">柱状图、条形图、各种图</Badge>
    </MNavLinks>
    <MNavLinks title="3D可视化" :items="web3D" >
        <Badge type="danger">三维世界</Badge>
    </MNavLinks>
    <MNavLinks title="低代码" :items="lowerCode">
        <Badge type="danger">效率神器</Badge>
    </MNavLinks>
</template>

<script setup lang="ts">
import MNavLinks from './MNavLinks.vue';
import { NAV_DATA } from './data';

const { frontendEnvironment, tools, openSourceProjects, bigData, web3D,lowerCode, FrontEnd, BackEnd } = NAV_DATA
</script>