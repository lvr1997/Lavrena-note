<script setup lang="ts">
import MNavLinks from './MNavLinks.vue';
import { NAV_DATA } from './data';
</script>

<template>
  <MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
</template>

<style scoped>

</style>
