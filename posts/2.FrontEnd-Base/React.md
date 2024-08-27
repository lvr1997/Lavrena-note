[B站学习视频](https://www.bilibili.com/video/BV1wy4y1D7JT?p=17&spm_id_from=333.880.my_history.page.click&vd_source=0ac7746e9ece1179baaedba6f1b41114)

## jsx语法规则

1. 创建虚以D0M时，不要写引号：
2. 标签中要混入js表达式，要是用 {}
3. 标签中样式的类名要用className指定
4. 标签中的内联样式要用sty1e=({color:‘white’)},注意属性名转为小驼峰
5. 只能有一个根标签
6. 标签必须闭合
7. 关于标签首字母

**注意**

- 若首字母小写，那么React.就会去寻找与之同名的htm1标签，若找见，直接转为html同名元素；若未找见，报错
- 若首字母大写，那么React.就会去寻找与之同名的组件；若找见，那么就是用组件；若未找见，报错

## 组件

### 函数式组件

通过定义函数的方式创建组件

_执行了ReactDOM.render(…,后发生了什么？_

1. React解析组件标签，寻找Demo组件的定义位置
2. React发现Demo组件是用函数定义的，随后React去直接调用Demo函数，将返回的虚拟DON渲染到页面

### 类式组件

通过创建类的方式，定义组件（常用）

```jsx
class MyComponent extends React.Component {
  render(){
    //render是放在哪里的？一MyComponent的原型对象上，供实例使用。    
    //render中的this是谁？一yComponent的实例对象<=>MyComponent组件实例对象。    
    console.log('render中的this:',this);    
    return <h2>我是用类定义的组件（适用于【复杂组件】的定义）</h2>  
  }
}
//2.渲染组件到页面
ReactDOM.render('组件名标签形式',document.getElementById('test')
```

_执行ReactDOM.render(……)后发生了什么？_

1. React解析组件标签，找到MyComponent组件
2. 发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
3. 将render返回的虚拟DOM转为真实DOM，随后呈现在页面上。

## State

组件中用来维护其内部的状态数据，组件的状态数据改变时，组件会再次调用 render() 方法重新渲染对应的标记。

## 案例应用

实现鼠标点击页面空白处，今天天气切换的功能

```jsx
class Weather extends React.Component {
  constructor(props) {
    super(props);    
    this.changeWeather = this.changeWeather.bind(this);    
    this.state = {isHot:true}
  }
  render() {
    //读取状态    
    const { isHot } = this.state    
    return (
      <div className="weather_container">        
	      今天的天气是：{isHot? "☀️": "🌥️"}        
	      <button onClick={this.changeWeather}>切换天气</button>      
	  </div>    
	);  
  }
  changeWeather() {
    this.setState({isHot:!this.state.isHot});  
  }
}
//渲染组件
ReactDOM.render(`<Weather/>`, document.getElementById("root"))
```


> [!NOTE] 案例总结
> changeWeather方法放在了哪里？—— Weather的原型对象上，供实例使用 
> 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用 
> 类中的方法默认开启了局部的严格模式，所以changeWeather中的this是undefind
