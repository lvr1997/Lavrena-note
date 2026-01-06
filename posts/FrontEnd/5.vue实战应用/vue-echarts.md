---
title: vue+echarts
date: 2022-11-20 16:09
lastUpdate: false
---

# vue+echarts实战应用

> 2022年11月20日，我司项目在使用echarts的情景

## 动态改变echarts柱状图颜色

需求：上面复选框选择的内容，下方柱图对应显示彩色，未选择的则置灰

```js
let selectedSupplier = [] //选中的名字数组
let gongyingshangData = [] //全部名字
let colors = [] //柱子颜色数组
// echarts color函数回调
color: function (params) {
	if (selectedSupplier.indexOf(params.seriesName) != -1) {
	     return colors[params.componentIndex];  
	} else if (selectedSupplier.length == gongyingshangData.length) {     
	     return colors[params.componentIndex];   
	} else {
	    return "#CCCCCC";  
	}
 },
```

## 柱状图数据太多时，如何动态给echarts容器指定高度

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

## antd渲染echarts图表，打开Modal框时无法获取里面的dom节点

### 场景

封装通用弹窗组件，放大echarts图表

### 问题

解决Vue3.0使用antd时，打开Modal框时无法获取里面的dom节点

在打开模态框的方法里面，获取dom节点然后innerHTML，比如

```js
showModal() {
    this.dialog = true;        
	document.getElementById("info") 
},
```

报错document.getElementById(“info”)找不到

解决方法：Modal中有forceRender属性强制渲染Modal

```html
<a-modal v-model:visible="fxModel" :forceRender="true" @ok="fxFunHandleOk" title="查看" width="900px" >
```

问题：因为我用到的模态框不止一处，所以我需要关闭时销毁 Modal 里的子元素，又用了`:destroyOnClose="true"`属性，这样一来就冲突了，我还是获取不到 `document.getElementById(“info”)`

**最终解决方法：加destroyOnClose属性+nextTick方法**

```html
<a-modal v-model:visible="fxModel" :destroyOnClose="true" @ok="fxFunHandleOk" title="查看" width="900px" >
```

```jsx
showModalList() {
    this.dialog = true;      
    nextTick(() => {
		document.getElementById("info")
		//根据id渲染eachats     
	});  
},
```

## 处理减少series数组长度时，图表不发生变化的问题

原文参考：[echarts中setOption第二个参数的作用。处理减少series数组长度时，图表不发生变化的问题。下一次就是永远的博客-CSDN博客_setoption第二个参数](https://blog.csdn.net/weixin_46557501/article/details/117120733)

`setOption`是echarts中常被人们忽视的一个API，通常大家只会使用第一个参数，用于为图表设置配置项。然而有些场景，却需要用到第二个参数，也就是`notMerge`，取值为`true`或`false`。

实际上series配置项发生改变时，图表进行了渲染，只是与之前设置的options合并（覆盖）了。

也就是说，之前设置的options还在，当刷新页面的时候，只是将新的options合并上去。

是否不跟之前设置的 option 进行合并，由setOption第二个参数notMerge决定。默认为 false，即表示合并。如果为 true，表示所有组件都会被删除，然后根据新 option 创建所有新组件。

