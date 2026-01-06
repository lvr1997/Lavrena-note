# I have 项目文档说明

## 科大二手工坊 <Badge type="danger">Old</Badge>

> 由于作者精力有限，老项目不再维护，现在全心投入到新项目的开发中。

- <Badge type="tip">V1.0</Badge> 项目是我19年毕业设计，采用SSM基础框架搭建 [项目地址](https://github.com/lvr1997/kd-second-hand-workshop) 
- <Badge type="tip">V1.5</Badge> 将项目升级到SpringBoot，虽然功能上没有太多更新，但是稳定运行是没问题的。也解决了1.0的一些问题。 [项目地址](https://github.com/lvr1997/kd-shop-fast)

## I have <Badge type="warning">开发中</Badge>

> 没错，我来填坑了...

突发奇想的`2.0`版本，前后端分离，项目前端分为两部分：一个是学生端前台（Vue3搭建），另一个是管理员端后台（Thymeleaf模板）

为方便代码管理，本项目将前后端存放在同一仓库下，[GitHub项目地址](https://github.com/lvr1997/i-have) 

### 环境准备
- 项目开发环境：`JDK21` `MAVEN 3.9.12` 
- 数据库：`MySQL8.0` `Redis`
- 项目开发工具：`IDEA2023` 或者 `VSCode`（我用的后者）

### 技术栈
- 后端：`SpringBoot3.5.9` `MyBatis3.3` `Thymeleaf2.5.2` 
- 前端：`Vue3` `ElementPlus`

### 框架搭建
本项目使用`spring-boot-starter` 初始化工程，多模块项目
- `ihave-common` 项目通用实体，工具类、自定义注解等
- `ihave-business` 业务代码模块
- `ihave-web` web启动模块
- `ihave-ui`  vue前端项目

#### 后端项目结构

```bash
ihave-bussiness
├── src/main/java/com/lvr/ihave/business/mapper/           # 数据库映射接口
├── src/main/java/com/lvr/ihave/business/service/          # 业务逻辑服务接口
├── src/main/java/com/lvr/ihave/business/service/impl/     # 业务逻辑服务实现类
├── src/main/java/com/lvr/ihave/business/utils/            # 工具函数
├── src/main/resources/mapper                              # 数据库映射文件
├── src/main/resources/application.yml                     # 应用配置文件
├── pom.xml                                                # Maven 项目配置文件
```

```bash
ihave-common
├── src/main/java/com/lvr/ihave/annotation/          # 自定义注解
├── src/main/java/com/lvr/ihave/common/              # 通用工具函数
├── src/main/java/com/lvr/ihave/constant/            # 常量定义
├── src/main/java/com/lvr/ihave/ex/                  # 自定义异常类
├── src/main/java/com/lvr/ihave/pojo/                # 数据传输对象 (DTO)
├── src/main/java/com/lvr/ihave/util/                # 通用工具函数
├── src/main/resources/application.yml               # 应用配置文件
├── pom.xml                                          # Maven 项目配置文件
```

```bash
ihave-web
├── src/main/java/com/lvr/ihave/web/config/                # 配置类
├── src/main/java/com/lvr/ihave/web/controller/            # 控制器类
├── src/main/java/com/lvr/ihave/web/interceptor/           # 拦截器类
├── src/main/java/com/lvr/ihave/web/util/                  # 通用工具函数
├── src/main/java/com/lvr/ihave/web/WebApplication.java    # 应用入口类
├── src/main/resources/i18n/                               # 国际化文件目录
├── src/main/resources/mybatis/                            # MyBatis 主配置文件
├── src/main/resources/static/                             # 静态资源目录
├── src/main/resources/templates/                          # Thymeleaf模板文件目录 (后台系统)
├── src/main/resources/application.yml                     # 应用配置文件
├── src/main/resources/logback.xml                         # 日志配置文件
├── pom.xml                                                # Maven 项目配置文件
logs/     # logback 输出日志
upload/   # 上传文件目录
```

### 前端项目结构

```bash
ihave-ui/
├── src/
│   ├── api/          # API 调用模块
│   ├── assets/       # 静态资源目录
│   ├── composables/  # 可组合函数
│   ├── components/   # 可复用组件
│   ├── pages/        # 页面组件
│   ├── utils/        # 工具函数
│   ├── store/        # 状态管理
│   ├── types/        # 类型定义
│   ├── router/       # 路由配置
│   ├── styles/       # 样式文件
```
