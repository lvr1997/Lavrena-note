---
title: MyBatis
date: 2017-11-01 16:09
lastUpdated: false
---
# MyBatis

MyBatis 是支持定制化 SQL、存储过程以及高级映射的优秀的持久层框架。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以 及获取结果集。MyBatis 可以对配置和原生Map使用简单的 XML 或注解，将接口和 Java 的 POJOs(Plain Old Java Objects,普通的 Java对象)映射成数据库中的记录。

1. mybatis的由来

MyBatis的前身就是iBatis,iBatis本是由Clinton Begin开发，后来捐给Apache基金会，成立了iBatis开源项目。2010年5月该项目由Apahce基金会迁移到了Google Code，并且改名为MyBatis。

1. mybatis介绍

MyBatis是一个数据持久层(ORM)框架。把实体类和SQL语句之间建立了映射关系，是一种半自动化的ORM实现。

MyBatis的优点：

基于SQL语法，简单易学。

能了解底层组装过程

SQL语句封装在配置文件中，便于统一管理与维护，降低了程序的耦合度。

程序调试方便。

1. 与传统的JDBC比较

减少了大量的代码量

最简单的持久化框架

架构级性能增强

SQL代码从程序代码中彻底分离，可重用

增强了项目中的分工

增强了移植性
## mybatis的基本要素

- configuration.xml 全局配置文件
- mapper.xml 核心映射文件
- SqlSession接口