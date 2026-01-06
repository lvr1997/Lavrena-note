<script setup lang="ts">
import { useData } from "vitepress";

const { frontmatter } = useData()
const date = new Date(frontmatter.value.date)

const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`

</script>
<template>
    <span v-if="frontmatter.date" class="flex items-center">🔥&nbsp;更新时间：
        <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="xicon-icon"><path
                d="M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 22H6V12h20v14zm0-16H6V6h4v2h2V6h8v2h2V6h4v4z"
                fill="currentColor"></path></svg> -->
        {{ dateStr }}
    </span>
</template>
<style>
.xicon-icon {
    width: 18px;
    height: 18px;
    font-size: 18px;
}
</style>
