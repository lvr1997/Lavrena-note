---
title: vue3子组件监听不到props值的变化
titleTemplate: Vue
publish: true
date: 2024-07-20
tags:
  - vue
---

> 项目使用版本：`vue3.2`

子组件监听父组件通过props传过来的值，接收到的不是响应式的
要通过toRefs转为响应式对象才可以被watch监听到

```ts
const props = defineProps<{ spacePath: string, groupPath: string, state: string }>()

const { spacePath, groupPath, state } = toRefs(props)

watch([spacePath, groupPath, state], (newVal, oldVal) => { getAirDeviceList(newVal[0], newVal[1], newVal[2]) })
```


> [!tip] Vue3.4更新
> 通过`defineModel`声明这个宏可以用来声明一个双向绑定 prop，通过父组件的 `v-model` 来使用。
> [组件 `v-model`](https://cn.vuejs.org/guide/components/v-model.html) 指南中也讨论了示例用法

```js
// 声明 "modelValue" prop，由父组件通过 v-model 使用
const model = defineModel()
// 或者：声明带选项的 "modelValue" prop
const model = defineModel({ type: String })

// 在被修改时，触发 "update:modelValue" 事件
model.value = "hello"

// 声明 "count" prop，由父组件通过 v-model:count 使用
const count = defineModel("count")
// 或者：声明带选项的 "count" prop
const count = defineModel("count", { type: Number, default: 0 })

function inc() {
  // 在被修改时，触发 "update:count" 事件
  count.value++
}
```