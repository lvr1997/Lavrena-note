<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed, ref, onMounted } from 'vue'
import { countWord } from '../utils/functions'

const { page } = useData()
const date = computed(
  () => new Date(page.value.lastUpdated!)
)

const wordCount = ref(0)
const imageCount = ref(0)

const wordTime = computed(() => {
    return ((wordCount.value / 275) * 60)
})

const imageTime = computed(() => {
    const n = imageCount.value
    if (imageCount.value <= 10) {
        // 等差数列求和
        return n * 13 + (n * (n - 1)) / 2
    }
    return 175 + (n - 10) * 3
})

// 阅读时间
const readTime = computed(() => {
    return Math.ceil((wordTime.value + imageTime.value) / 60)
})


function analyze() {
    document.querySelectorAll('.meta-des').forEach(v => v.remove())
    const docDomContainer = window.document.querySelector('#VPContent')
    const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>(
        '.content-container .main img'
    )
    imageCount.value = imgs?.length || 0
    const words = docDomContainer?.querySelector('.content-container .main')?.textContent || ''
    wordCount.value = countWord(words)
}

onMounted(() => {
    // 初始化时执行一次
    analyze()
})
</script>


<template>
    <div class="word">
        <p class="flex">
            <span class="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="xicon-icon" style="width: 18px; height: 18px; font-size: 18px;"><path d="M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 22H6V12h20v14zm0-16H6V6h4v2h2V6h8v2h2V6h4v4z" fill="currentColor"></path></svg>
                <span>{{ date.toLocaleDateString() }}</span>
            </span>
            <span class="mr-1">
                <svg t="1724571760788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6125" width="16" height="16"><path d="M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m307.2 607.573333l68.266667 191.146667c13.653333 27.306667 54.613333 27.306667 61.44 0l102.4-273.066667c6.826667-20.48 0-34.133333-20.48-40.96s-34.133333 0-40.96 13.653334l-68.266667 191.146666-68.266667-191.146666c-13.653333-27.306667-54.613333-27.306667-68.266666 0l-68.266667 191.146666-68.266667-191.146666c-6.826667-13.653333-27.306667-27.306667-47.786666-20.48s-27.306667 27.306667-20.48 47.786666l102.4 273.066667c13.653333 27.306667 54.613333 27.306667 61.44 0l75.093333-191.146667z" fill="#777777" p-id="6126"></path><path d="M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z" fill="#E0E0E0" opacity=".619" p-id="6127"></path></svg>
                <span>{{ wordCount }} 字</span>
            </span>
            <span class="mr-1">
                <svg t="1724572797268" class="icon" viewBox="0 0 1060 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15031" width="16" height="16"><path d="M556.726857 0.256A493.933714 493.933714 0 0 0 121.929143 258.998857L0 135.021714v350.390857h344.649143L196.205714 334.482286a406.820571 406.820571 0 1 1-15.908571 312.649143H68.937143A505.819429 505.819429 0 1 0 556.726857 0.256z m-79.542857 269.531429v274.907428l249.197714 150.966857 42.422857-70.070857-212.114285-129.389714V269.787429h-79.542857z" fill="#8a8a8a" p-id="15032"></path></svg>
                <span>{{ readTime }} 分钟</span>
            </span>
        </p>
    </div>
</template>

<style>
.word {
  color: var(--vp-c-text-2);
  font-size: 15px;
}

.icon {
    display: inline-block;
    transform: translate(0px , 2px);
}
</style>
