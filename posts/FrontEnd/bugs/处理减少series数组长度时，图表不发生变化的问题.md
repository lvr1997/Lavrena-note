---
title: 处理减少series数组长度时，图表不发生变化的问题
titleTemplate: Vue
isOriginal: false
date: 2022-10-22
tags:
  - vue
  - echarts
---
原文参考：[echarts中setOption第二个参数的作用。处理减少series数组长度时，图表不发生变化的问题。下一次就是永远的博客-CSDN博客_setoption第二个参数](https://blog.csdn.net/weixin_46557501/article/details/117120733)

`setOption`是echarts中常被人们忽视的一个API，通常大家只会使用第一个参数，用于为图表设置配置项。然而有些场景，却需要用到第二个参数，也就是`notMerge`，取值为`true`或`false`。

实际上series配置项发生改变时，图表进行了渲染，只是与之前设置的options合并（覆盖）了。也就是说，之前设置的options还在，当刷新页面的时候，只是将新的options合并上去。
是否不跟之前设置的 option 进行合并，由setOption第二个参数notMerge决定。默认为 false，即表示合并。如果为 true，表示所有组件都会被删除，然后根据新 option 创建所有新组件。