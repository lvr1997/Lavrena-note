<script setup>
import { useData } from "vitepress";
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme
const { page, frontmatter } = useData()

if(page.value.relativePath.indexOf('index') !== -1) {
  fetch('https://v1.hitokoto.cn')
  .then(response => response.json())
  .then(data => {
    const hitokoto = document.querySelector('#hitokoto_text')
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
    hitokoto.innerText = data.hitokoto
  })
  .catch(console.error)
}

</script>
<template>
  <Layout>
    <template #home-hero-info-after>
      <p class="tagline pt-4 text-xl" id="hitokoto">
        <a href="https://hitokoto.cn/?uuid=ee0ebb2a-a5a3-4ccc-84f0-94a109066727" id="hitokoto_text">:D 获取中...</a>
      </p>
    </template>
    <template #doc-before>
      <h1 class="text-3xl font-bold my-2">{{ frontmatter.title }}</h1>
    </template>
  </Layout>
</template>
