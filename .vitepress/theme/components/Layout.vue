<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, provide, reactive } from 'vue';

const { isDark } = useData()
const { Layout } = DefaultTheme
const { page, frontmatter } = useData()

/**
 * 深浅色过渡效果
 * 
 */
const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})

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

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
