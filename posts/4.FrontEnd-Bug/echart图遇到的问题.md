---
title: echart图遇到的问题
titleTemplate: Vue
publish: true
date: 2022-10-21
tags:
  - vue
  - echarts
---

## 动态改变echarts柱状图颜色

需求：上面复选框选择的内容，下方柱图对应显示彩色，未选择的则置灰

```jsx
color: function (params) {
if (selectedSupplier.indexOf(params.seriesName) != -1) {
     return colors[params.componentIndex];  } else if (
    //selectedSupplier选中的名字数组 //gongyingshangData全部名字    selectedSupplier.length == gongyingshangData.length  ) {
     return colors[params.componentIndex];   } else {
    return "#CCCCCC";  }
 },
```

## 处理减少series数组长度时，图表不发生变化的问题。

[echarts中setOption第二个参数的作用。处理减少series数组长度时，图表不发生变化的问题。_下一次就是永远的博客-CSDN博客_setoption第二个参数](https://blog.csdn.net/weixin_46557501/article/details/117120733)

## 封装通用弹窗组件，放大echarts图表

**解决Vue3.0使用antd时，打开Modal框时无法获取里面的dom节点**

**问题：打开模态框之前，如果原本后台存有值需要，如何填写到编辑框里面？**

测试方法1：在打开模态框的方法里面，获取dom节点然后innerHTML，比如

```jsx
  showModalList() {
        data.fxModel = true;        document.getElementById("info")?.insertAdjacentHTML("afterbegin", props.fxValue);  },
```

报错document.getElementById(“info”)找不到

解决方法1：Modal中有forceRender属性强制渲染Modal

```html
<a-modal v-model:visible="fxModel" :forceRender="true" @ok="fxFunHandleOk" title="公式编辑" width="900px" >
```

测试方法1的问题：因为我用到的模态框不止一处，所以我需要关闭时销毁 Modal 里的子元素，又用了

```jsx
:destroyOnClose="true"
```

的属性，这样一来就冲突了，我还是获取不到document.getElementById(“info”)

**最终解决方法：加destroyOnClose属性+nextTick方法**

```html
<a-modal v-model:visible="fxModel" :destroyOnClose="true" @ok="fxFunHandleOk" title="公式编辑" width="900px" >
```

```jsx
showModalList() {
    data.fxModel = true;      nextTick(() => {
        document.getElementById("info")?.insertAdjacentHTML("afterbegin", props.fxValue);      });  },
```

## 柱状图数据太多时，如何动态给echarts容器指定高度

[echarts容器动态设置高度 - 且行且思 - 博客园](https://www.cnblogs.com/Fooo/p/16050886.html)

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
let chartName = this.$echarts.init(document.getElementById("myChart1"));          this.autoHeight = counts.length * 35 + 50; // counst.length为柱状图的条数，即数据长度。35为我给每个柱状图的高度，50为柱状图x轴内容的高度(大概的)。          chartName.resize({height:this.autoHeight});
```