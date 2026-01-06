<script setup lang="ts">
import tag from './tag.vue'
import DocFooter from './DocFooter.vue';
import Visitor from './Visitor.vue';
import { useData } from "vitepress";
import { usePageId } from '../composables'
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, provide, reactive } from 'vue';

const { Layout } = DefaultTheme
const { isDark, page, frontmatter } = useData()
const pageId = usePageId()

const hitokoto = reactive({
  text: '',
  href: ''
})
const getOne = () => {
  if (page.value.relativePath.indexOf('index') !== -1) {
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
    <template #home-hero-image>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="rgb(255, 255, 255)"
        stroke="var(--vp-c-brand-1)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book"
        fill-opacity="0">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    </template>
    <template #nav-bar-title-after>
      <Visitor />
    </template>
    <template #doc-before>
      <tag />
    </template>
    <template #doc-after>
      <DocFooter />
    </template>
  </Layout>
</template>

<style>
.prev-next.prev-next {
  border-top: none;
}
</style>
