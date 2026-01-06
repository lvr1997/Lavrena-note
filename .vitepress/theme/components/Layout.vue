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