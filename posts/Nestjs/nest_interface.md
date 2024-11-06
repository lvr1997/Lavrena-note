# 有关Nestjs接口请求次数限制问题

> 在学[buqiyuan/nest-admin](https://github.com/buqiyuan/nest-admin)开源项目时遇到的，特地查了下

## Nestjs接口请求次数限制

```js
// app.module.ts 
import { APP_GUARD } from '@nestjs/core'; 
import { Module } from '@nestjs/common'; 
import { UserModule } from './modules/user/user.module'; 
//引入 
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler'; 

@Module({ 
	imports: [ 
		UserModule, 
		ThrottlerModule.forRoot({ 
			ttl: 60, //1分钟 
			limit: 10, //请求10次 
		}), 
	], 
	providers: [ 
	//全局使用 
	{ provide: APP_GUARD, useClass: ThrottlerGuard, }, 
	], 
}) 
export class AppModule { }
```


