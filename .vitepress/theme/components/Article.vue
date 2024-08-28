<script setup lang="ts">
import { data as posts } from '../posts.data'
import { formatDate } from "../utils/common";

</script>

<template>
  <!-- 归档列表 -->
  <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
    <ul class="divide-y divide-gray-200 dark:divide-slate-200/5 max-w-2xl mx-auto">
      <li class="py-12" v-for="{ title, url, date, excerpt, tags } of posts">
        <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <a class="text-gray-900 dark:text-white" :href="url">{{ title }}</a>
              </h2>
              <div
                v-if="excerpt"
                class="prose dark:prose-invert max-w-none text-gray-500 dark:text-gray-300"
                v-html="excerpt"
              ></div>
            </div>
            <div class="text-base leading-6 font-medium">
              <span class="text-base leading-6 font-medium text-gray-500 dark:text-gray-300">🕛{{ formatDate(date.string) }}</span>
              <span class="text-base leading-6 font-medium text-gray-500 dark:text-gray-300 ml-2">
                🏷️
              </span>
              <span class="whitespace-nowrap rounded-md bg-orange-50 px-2 py-1 mr-1 text-xs text-orange-400" v-for="tag in tags">{{ tag }}</span>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>