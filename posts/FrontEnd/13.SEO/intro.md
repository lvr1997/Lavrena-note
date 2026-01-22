---
title: 关于SEO的探究
---
# 关于SEO的探究


## Open Graph 协议

> 浏览网页时发现：有的meta标签中property属性值前缀带og:   比如 ：property="og:description"是什么意思？

`og:` 前缀是 Open Graph 协议的标识，用于社交媒体分享优化。

### Open Graph 协议是什么？

Open Graph 协议是由 Facebook 创建的元数据标准，用于让网页内容在社交媒体上以更丰富的方式显示。当你在 Facebook、LinkedIn、Twitter 等平台分享链接时，这些平台会读取页面的 Open Graph 标签来生成预览卡片。

### 常见的 Open Graph 标签

```html

<!-- 基本OG标签 -->
<meta property="og:title" content="页面标题">
<meta property="og:description" content="页面描述">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page-url">
<meta property="og:type" content="website">

<!-- 更详细的OG标签 -->
<meta property="og:site_name" content="网站名称">
<meta property="og:locale" content="zh_CN">
<meta property="og:video" content="https://example.com/video.mp4">

```

### 为什么需要Open Graph标签？

- 社交媒体优化：确保链接在分享时有吸引人的预览
- 控制显示内容：精确控制标题、描述、图片的显示
- 提升点击率：丰富的预览卡片能吸引更多点击

### 测试Open Graph标签

使用以下工具测试你的Open Graph标签是否设置正确：
- [Facebook分享调试器](https://developers.facebook.com/tools/debug/)
- [Twitter卡片验证器](https://cards-dev.twitter.com/validator)
- [LinkedIn帖子检查器](https://www.linkedin.com/post-inspector/)




## 站长工具

> 站长工具是一个用于优化网站搜索排名的网站工具。

### Google Search Console

> Google Search Console 是 Google 的一个网站工具，用于优化网站搜索排名。

## Google Tag Manager

> [!NOTE] 什么是Google Tag Manager？
>
> Google Tag Manager（GTM）是一个用于管理和部署网站标签的工具。它允许你在不修改网站代码的情况下，添加、删除或更新网站上的标签。