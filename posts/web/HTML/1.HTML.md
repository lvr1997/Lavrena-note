# HTML

> 系统学习，查缺补漏
> 
> 文档：[MDN Web Docs (mozilla.org)](https://developer.mozilla.org/zh-CN/)
>
> [尚硅谷前端入门html+css零基础教程，零基础前端开发html5+css3视频](https://www.bilibili.com/video/BV1p84y1P7Z5/?share_source=copy_web&vd_source=6582771ced8eee146aabc565f50f4ae7)

HTML是一个超文本标记语言，遵循了W3C规范

## 标签(HTML元素)

- 排版标签 （标题h1-h6 段落p）
- 语义化标签（header/footer/article/section/main/audio/video）有实际含义的标签
- 块级元素与行内元素 块级元素就像盒子一样会占一整行，行内元素默认水平排列，一行占满才会换行
- 常用的文本标签 span em i
- 不常用的文本标签
- HTML图片标签
- 相对路径/绝对路径
- 常见图片格式
- 超链接
    - 跳转页面
    - 跳转文件
    - 跳转锚点
    - 唤起指定应用
- 超文本真正含义
- 列表 ol ul dl
- 表单 form   
- 框架标签 iframe
- marquee div input等等

### 表格

- 基本结构
- 常用属性
- 跨行/跨列`colspan` 跨列 `rowspan` 跨行
- 表格的独有属性
- table-layout 控制表格的列宽
- 控制单元格之间的间距 border-spacing: 0;
- 合并相邻的单元格的边框 border-collapse: collapse;
- 隐藏没有内容的单元格 empty-cells: hide;
- caption-side: top 控制表格标题的位置

### 表单

#### 基本结构

#### 文本框、密码框

#### 单选框、复选框

input type=radio input type=checkbox

#### 隐藏域

```html
<input type=“hidden” >
```

#### 提交与重置

提交：通过表单的action提交到指定位置，input type=“submit” 触发提交

重置：input type=“reset” 恢复表单中的默认值，即value中定义的内容

#### 普通按钮

button

#### 文本域和下拉框

textarea cols=列数 rows=行数 select 下拉框

#### 禁用表单控件

disabled

#### label

for=“input的ID名字”

```html
<label for=“abc”/><input id=“abc”></input>
```

点label标签的文字，input会获得焦点

#### fieldset和legend

对表单信息进行分类

#### 标签的属性

每个标签都有自身的属性 通用的/特有的 HTML结构

## HTML注释

## HTML文档声明 

`<!DocType html>`

## 字符编码

## 设置语言

## 标准结构

- HTML字符实体  空格
- HTML全局属性 id，class，style, dir(文字的方向), title, lang

## 网页元信息
> 用途：对网页的SEO进行优化

配置字符编码

```html
<meta charset="UTF-8">
```

针对IE浏览器的兼容性设置

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

移动端兼容设置

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"
```

## HTML5新玩具

> 新增了布局标签、状态标签、列表标签、文本标签、表单控件标签、input新增type属性值、视频标签、音频标签 全局属性、兼容性处理

### popover

不同于`Dialog`，这个弹出后页面没有遮罩，类似`tooltip`那种效果

> 消息提示框，使用方法类似dialog

```html
<popover id="myPopover">
    <p>content....</p>
</popover>
```

### dialog

> 原生HTML也有弹框啦，哈哈哈~~~~，不想用组件库的弹窗可以用这个

```html
<button onclick="openDialog">打开Dialog</button>
<dialog id="loginDialoog">
    <p>content....</p>
</dialog>
```

```js
//打开弹窗
function openDialog(){
    document.getElementById("loginDialog").showModal();
}
//关闭弹窗
function closeDialog(){
    document.getElementById("loginDialog").close();
}
```