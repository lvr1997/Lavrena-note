# 动态改变echarts柱状图颜色

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
