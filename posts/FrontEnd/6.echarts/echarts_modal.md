# antd渲染echarts图表，打开Modal框时无法获取里面的dom节点

## 场景

封装通用弹窗组件，放大echarts图表
## 问题

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

