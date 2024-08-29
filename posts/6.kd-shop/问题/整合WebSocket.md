需求描述：实现当用户登录后，与发布人进行在线聊天完成商品的交易

###  先来介绍下 `WebSocket`

> `websocket`是一种**网络通信协议**。RFC6455定义了它的通讯标准
> `websocket`是从`HTML5`开始提供的一种在单个`TCP`连接上进行的全双工通讯的协议

与`HTTP`协议不同的是：`http`协议是一种无状态、无连接的单向的**应用层协议**。*采用的是请求/响应模型，通信请求只能由客户端发起，服务端对请求作出应答*。`HTTP`协议无法实现服务器主动向客户端发起信息。

解释：如果服务器有连续的状态变化，客户端要获知就非常麻烦。大多数`web`应用程序将通过频繁的异步`ajax`请求实现长轮询。效率低也很浪费资源（因为需要不停连接，或者`HTTP`始终打开）

图解：

`http`协议：

![](https://gitee.com/lvr1997/PicGioRepository/raw/master/img/httpwebsocket图解.png)

`websocket`协议：

![](https://gitee.com/lvr1997/PicGioRepository/raw/master/img/websocket.png)

`websocket`协议分为两部分：握手和数据传输

握手是基于`Http`协议的。