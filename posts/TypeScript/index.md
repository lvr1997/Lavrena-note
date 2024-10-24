# 介绍
> 系列笔记扩充自“尚硅谷”《TypeScript系列教学视频》在线笔记
>
> 学习视频： 尚硅谷TypeScript教程（李立超老师TS新课）_哔哩哔哩_bilibili
> 
> **最新：**[禹神：三小时快速上手TypeScript，TS速通教程](https://www.bilibili.com/video/BV1YS411w7Bf/?share_source=copy_web&vd_source=6582771ced8eee146aabc565f50f4ae7)
>
> 书籍：[TypeScript 教程 - 网道 阮一峰著](https://wangdoc.com/typescript/)

TypeScript是JavaScript的超集。

1. 它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。
2. TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。
3. TS完全兼容JS，换言之，任何的JS代码都可以直接当成TS使用。
4. 相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。

## 开发环境

1. 预置Node.js环境 [https://nodejs.org](https://nodejs.org/)
2. 使用npm全局安装typescript
    - 进入命令行
    - `npm i -g typescript`
3. 创建一个ts文件
4. 使用tsc对ts文件进行编译
    
```bash
#进入命令行
cd ts文件所在目录
# 执行命令
tsc xxx.ts
```
## 基本类型

### 类型声明

- 类型声明是TS非常重要的一个特点
- 通过类型声明可以指定TS中变量（参数、形参）的类型
- 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
- 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

```tsx
let str:String //声明一个String类型的变量
let str1:String = "你好";
//为函数传参指定类型
function fn(str:String, arr:Array) : Array {
    //do something
}
```

### 数据类型判断

- TS拥有自动的类型判断机制
- 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
- 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明

`JavaScript`中的数据类型: 
> [!note] `string` 、` number` 、 `boolean` 、 `null` 、 `undefined` 、 `bigint` 、 `symbol` 、 `object`

`TypeScript` 中的数据类型：
> [!tip] 
> 1. 以上所有 
> 2. 四个新类型： void 、 never 、 unknown 、 any 、 enum 、 tuple 
> 3. ⾃定义类型： type 、 interface

### Number 数字类型

```tsx
let decimal: number = 6;let hex: number = 0xf00d;let binary: number = 0b1010;let octal: number = 0o744;let big: bigint = 100n;
```

### String 字符串类型

```tsx
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.I'll be ${age + 1} years old next month.`;
```

### Boolean 布尔值

```tsx
let isDone: boolean = false;
```

### array 数组

```tsx
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; //指定数组泛型
```

### tuple

TS新增类型，固定长度的数组

```tsx
let x: [string, number];
x = ["hello", 10]; 
```

### enum

```tsx
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
```

### 字面量

**可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围**

```tsx
let color: 'red' | 'blue' | 'black';
let num: 1 | 2 | 3 | 4 | 5;
```

### any

当定义变量不指定任何类型时，他的类型就是any

声明为any时，可以在变量第一次赋值后，再次赋值其他类型

```tsx
let d:any = 4;d = 'hello';d = true;
```

### unknown

类型安全的any

```tsx
let notSure:unknown = 4;
notSure = 'hello';
```

### void

声明 unusable 为undefind

```tsx
let unusable: void = undefined;
```

### never

不能是任何值

```tsx
function error(message: string): never {
    throw new Error(message);
}
```

### 类型断言

有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型

断言有两种形式：

```tsx
//1
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

```tsx
//2
let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;
```

## 引用类型

[类Class](./Class.md)

[接口interface](./interface.md)

[泛型（Generic）](./Generic.md)
## 编译选项

- 自动编译文件
    - 编译文件时，使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。
    - `tsc xxx.ts -w`
- [自动编译整个项目](./tsc项目编译.md)
    - 如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。
    - 💡 但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 `tsconfig.json`
    - `tsconfig.json`是一个JSON文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译