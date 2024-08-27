

> 作者：隐约雷鸣
> 链接：https://juejin.cn/post/7301522657664630810
> 来源：稀土掘金
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

问题：`ant-design-vue 4.x` + `postcss-pxtorem`，dev下（也就是`npm run serve`）ant的组件单位没转`rem`，还是`px`为单位，这导致开发和打包样式不一致，很难进行开发。想想看，dev开发的时候，css的单位都是px，只有build之后才是rem，而我实际上需要看的是rem的效果，这要怎么开发呢，难道每改一次都要build之后再看效果吗？

原因：`ant-design-vue 4.x`使用`cssinjs`，所以dev下`postcss-pxtorem`不会对ant的组件生效[github.com/vueComponen…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FvueComponent%2Fant-design-vue-nuxt%2Fissues%2F11) ，也就是说，dev下的css代码根本不会形成css文件，都是嵌入js文件里，所以`postcss-pxtorem`根本无从作用。

解决：`ant-design-vue`的开发同学加了个`px2remTransformer`，用上就行了。在App.vue里，加上`a-style-provider`（我是`ant-design-vue 4.0.6`）：

```
<template>
  <a-style-provider :transformers="[px2rem]">
      <div class="app">
        <Header/>
        <router-view/>
        <Footer/>
      </div>
  </a-style-provider>
</template>

<script setup>
import { px2remTransformer } from 'ant-design-vue';

const px2rem = px2remTransformer({
  rootValue: 16, // @default 16
});

</script>
<style>
</style>
```