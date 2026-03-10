<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { useData, useRouter, inBrowser } from 'vitepress';
import { watchEffect, onMounted } from 'vue';

const { lang, site } = useData();
const router = useRouter();

watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Tue, 01 Jan 2030 00:00:00 GMT; path=/; SameSite=Lax`;
  }
});

onMounted(() => {
  if (!inBrowser) return;

  const { pathname } = window.location;
  const base = site.value.base; // Automatically gets '/horizon/' from your config

  // Checks if the user is at the root or the root index.html
  const isRoot = pathname === base || pathname === `${base}index.html`;

  if (isRoot) {
    // Uses router.go for a smoother SPA transition instead of a full page reload
    router.go(`${base}${lang.value}/`);
  }
});
</script>

<template>
  <DefaultTheme.Layout />
</template>