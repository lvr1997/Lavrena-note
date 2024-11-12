<template>
    <section :class="$style.giscus">
        <Giscus 
            v-if="giscusOptions.show" 
            repo="lvr1997/Lavrena-Blog" 
            :repo-id="giscus.repo_id" 
            category="Announcements" 
            :category-id="giscus.category_id" 
            mapping="title" 
            strict="1"
            reactions-enabled="1" 
            emit-metadata="0" 
            input-position="top" 
            :theme="giscusOptions.theme" 
            lang="en"
        />
    </section>
</template>

<script setup lang="ts">
import Giscus from "@giscus/vue";
import { onContentUpdated, useData } from "vitepress";
import { ref } from "vue";

const { isDark, theme, page } = useData();

const giscus = {
    repo_id: 'R_kgDOMnMr4A',
    category_id: 'DIC_kwDOMnMr4M4Ch3mj'
};

function getGiscusTheme() {
    return isDark.value ? "dark" : "light";
}

const giscusOptions = ref({
    theme: getGiscusTheme(),
    show: false,
});

function reloadGiscus() {
    // I cannot tolerate the color flash when switching, so I choose to reload it.
    giscusOptions.value = {
        theme: getGiscusTheme(),
        show: false
    };
    setTimeout(() => {
        //只在关于我页面上加载评论
        giscusOptions.value.show = page.value.relativePath === 'about.md';
    }, 1);
}

onContentUpdated(() => {
    reloadGiscus();
    const observer = new MutationObserver(reloadGiscus);
    const element = document.querySelector("button.VPSwitchAppearance");
    if (!element) return;
    observer.observe(element, { attributes: true });
});
</script>

<style module scoped>
.giscus {
    margin-top: 1.5rem;
    display: grid;
    grid-row-gap: 8px;
}
</style>
