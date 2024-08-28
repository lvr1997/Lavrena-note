---
title: 动态改变echarts柱状图颜色
titleTemplate: Vue
isOriginal: true
date: 2022-10-21
tags:
  - vue
  - echarts
---

## 动态改变echarts柱状图颜色

需求：上面复选框选择的内容，下方柱图对应显示彩色，未选择的则置灰

```jsx
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

## 解决Vue3.0使用antd时，打开Modal框时无法获取里面的dom节点

场景：封装通用弹窗组件，放大echarts图表

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

