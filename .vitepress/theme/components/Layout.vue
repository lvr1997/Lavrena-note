<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, provide, reactive } from 'vue';

const { Layout } = DefaultTheme
const { page, frontmatter } = useData()

const hitokoto = reactive({
  text: '',
  href: ''
})
const getOne = () => {
  if(page.value.relativePath.indexOf('index') !== -1) {
    fetch('https://v1.hitokoto.cn').then(response => response.json()).then(data => {
      hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
      hitokoto.text = data.hitokoto
    }).catch(console.error)
  }
}

onMounted(() => {
  getOne()
})

</script>
<template>
  <Layout>
    <template #home-hero-info-after>
      <p class="tagline pt-4 text-xl">
        <a :href="hitokoto.href">{{ hitokoto.text }}</a>
      </p>
    </template>
  </Layout>
</template>
