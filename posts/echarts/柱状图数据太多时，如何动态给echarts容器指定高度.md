---
title: 柱状图数据太多时，如何动态给echarts容器指定高度
titleTemplate: Vue
isOriginal: false
date: 2022-10-23
tags:
  - vue
  - echarts
---

原文链接：[echarts容器动态设置高度 - 且行且思 - 博客园](https://www.cnblogs.com/Fooo/p/16050886.html)

要解决这个bug，首先想到的是让柱状图的容器自适应高度。于是，把原本div上写固定的高度去掉。

```html
 <div  id="myChart1" :style="{height:'600px',width:'650px'}" class="chart-css" ref="myEchart1"></div>
```

变成：

```html
<div  id="myChart1" :style="{width:'650px'}" class="chart-css" ref="myEchart1"></div>
```

这时，你会发现容器没有高度，柱状图根本就显示不出来。那么，如何给容器及其渲染完数据后的canvas动态加上高度呢？（红色框为setOption绘制图表后出现的）
解决方法：

```jsx
let chartName = this.$echarts.init(document.getElementById("myChart1"));          
this.autoHeight = counts.length * 35 + 50; // counst.length为柱状图的条数，即数据长度。35为我给每个柱状图的高度，50为柱状图x轴内容的高度(大概的)。          
chartName.resize({height:this.autoHeight});
```