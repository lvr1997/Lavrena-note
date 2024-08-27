<script setup lang="ts">
import { ref } from 'vue'
const tagColor = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'] //0-7
const selectTag = ref('')

const toggleTag = (tagTitle: string) => {

}

// Math. floor(Math.random()*8)
</script>
<template>
  <section class="container mx-auto xl:px-10">
    <!-- 头部 -->
    <section class="py-6 mb-6">
        <span class="inline-block w-8 h-8 rounded-full border-solid border border-gray-400 align-middle text-center relative">
            <svg class="fill-gray-400 absolute left-1/2 top-1/2 -ml-2 -mt-2" role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" style="width: 16px; min-width: 16px; height: 16px;"><defs></defs><path d="M527.744 32c20.8 0.192 40.32 8.32 55.04 23.04l386.112 386.24c14.912 14.848 23.104 34.56 23.104 55.68 0 20.992-8.192 40.704-23.04 55.552l-416.512 416.512c-14.784 14.784-34.624 22.976-55.68 22.976a78.08 78.08 0 0 1-55.616-23.04L55.104 582.784A78.272 78.272 0 0 1 32 527.552V110.72C32 67.2 67.2 32 110.72 32h417.024zM267.136 267.136a128.064 128.064 0 1 0 181.184 181.12 128.064 128.064 0 0 0-181.184-181.12z"></path></svg>
        </span>
        <span class="text-base ml-3">我的标签</span>
    </section>
    <!-- 内容 -->
    <section>
        <!-- 标签列表 -->
        <section>
            <span class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset cursor-pointer
                        bg-green-50 text-green-600 ring-green-500/10"
                  >
                {{'Badge'}}
            </span>
        </section>
    </section>
  </section>
</template>