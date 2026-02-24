<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps<{ error: NuxtError }>()
function goHome() {
  clearError({ redirect: '/' }) // ✅ 重點：清掉錯誤狀態再導回首頁
}
</script>

<template>
  <div>
    <section class="flex min-h-screen flex-col items-center justify-center">
      <h1 class="mb-2 text-9xl font-bold">
      {{ error?.statusCode }}
      </h1>
      <p class="mb-10 text-xl sm:text-3xl">{{ error?.statusMessage }}</p>
      <NuxtLink
          to="/"
          class="px-4 py-2 text-white bg-yellow-400 rounded-md text-lg cursor-pointer"
          @click="goHome">
          Go home
      </NuxtLink>
    </section>
  </div>
</template>