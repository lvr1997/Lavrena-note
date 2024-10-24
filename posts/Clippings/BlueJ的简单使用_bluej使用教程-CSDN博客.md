---
title: BlueJ的简单使用_bluej使用教程-CSDN博客
source: https://blog.csdn.net/wang15877/article/details/105883397
author: 饭泡开水
published: "true"
created: 2024-10-23
description: 文章浏览阅读1.7w次，点赞18次，收藏82次。BluJ官网下载我也就是个半吊子，弄了半天才成功-_-||1、创建项目（铁定废话一句）选择项目，点击新项目就OK；【注意】项目名的结尾不能有空格，不然会报错；2、创建新类（害，又是废话）3、双击黄色框框进行编辑（右击也不是不可以）编辑：4、编译如果黄色框框里有n多的斜线，就是代表为编译..._bluej使用教程
tags:
  - clippings
---
# BlueJ的简单使用_bluej使用教程-CSDN博客

最新推荐文章于 2024-09-06 21:26:56 发布

作者：[饭泡开水](https://blog.csdn.net/wang15877 "饭泡开水")  于 2020-05-01 22:55:51 发布

版权声明：本文为博主原创文章，遵循 [CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) 版权协议，转载请附上原文出处链接和本声明。

[BluJ官网下载](https://www.bluej.org/)  
半路出家，弄了半天才知道怎么运行  

## 文章目录

[TOC]

## 1、创建项目

选择项目，点击新项目就OK；  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/da9ae743b4db3cafd61291525db1da65.png)  
【注意】  
项目名的结尾不能有空格，不然会报错；  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/b8dd83658411a062e823508b92c8af6b.png)

## 2、创建新类

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/30395d58749891c8c76b8aefc7b32e88.png)

## 3、双击黄色框框进行编辑（右击也不是不可以）

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a9ba7bca84b803c9e66e8c345d1b00c4.png)  
**编辑：**  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/06dfa1f998dcc3fcc0429f1603e90c8c.png)

## 4、编译

- 在编辑的时候点击左上角的编译
- 右击黄色框框选择编译
- 在菜单栏的工具里选择编译

如果黄色框框里有n多的斜线，就是代表未编译  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/89cfb2df5632a59c27d47a538c522422.png)

## 5、运行

- BlueJ是可以不需要主函数的
- 总的来说就是选择一个方法，若是有参数则输入参数运行该方法
- 若是无参数则直接运行该方法

右击黄色框框  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/48bbbae8c2e3585ee90c0f7993c5f2e9.png)

### （1）选择主函数

不需要输入内容，调用主函数不用输入参数嘛  
`public static void main(String args[])`  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/498644311edae14a6251fcae31b6de52.png)  
直接直接调用print\_1函数和print\_2函数，输出结果  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/528a9d2cf17fbb20a85e4eb5ea66ff02.png)

### （2）选择不带参数的void print1()与void count1()

直接输出结果  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/43f16b8a902a9274e0b82e2400352568.png)

### （3）选择带参数的void print2

会出现一个输入框，输入参数，点击确定输出结果  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/4546d218d877681c35c4d0dd688430d9.png)  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/91a87cdf8e5da0d1fe33814cdf00a24f.png)

### （4）选择new Hello()

1. 点击new hello()，创建一个实例hello1  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6e4e109b4409150f0c879fcae7d55076.png)  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/026c5d6ddb365691b9ec55501f4680ea.png)
2. 右击红色框  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a55c1685b21a86892298f96b9f08b21e.png)

#### 1 选择不带参数的void count\_2()与void print\_2()

会直接运行输出结果  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/16c9a38973b6576c33d190668224d810.png)

#### 2 选择带参数的void count3

需要输入参数，再输出结果  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/2bbc6d8f0cca53641a32ded73fdca54d.png)  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/415a0e2e1d5234f03428d5470f6546f5.png)

## 6、测试的代码

【注】BlueJ可以不用main方法

```
public class Hello
{
    public static void main(String args[]){
        print_1();
        print_2(21);
    }

    public static void print_1(){
        System.out.println("print_1");
    }
    
    public static void print_2(int i){
        System.out.println("print_2:"+i);
    }
    
    public void print_3(){
        System.out.println("print_2");
    }
    
    public static void count_1(){
        int a = 0,b = 1,c;
        c = a + b;
        System.out.println("count_1:"+c);
    }
    
    public void count_2(){
        int a = 1,b = 1,c;
        c = a + b;
        System.out.println("count_2:"+c);
    }
    
    public void count_3(int a,int b){
        int c;
        c = a + b;
        System.out.println("count_3:"+c);
    }
}
```