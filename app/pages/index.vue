<script setup lang="ts">
import { type RecipeResponse } from "../../types/types";
const { data, error } = await useFetch<RecipeResponse>("https://dummyjson.com/recipes?limit=12");
useSeoMeta({
  title: 'Nuxtcipes',
  description: 'Recipes for you to cook',
  ogTitle:'Nuxtcipes',
  ogDescription: 'Recipes for you to cook',
  ogImage: '/shop.jpg',
  ogUrl: `https://localhost:3000/recipes/${data.value?.id}`,
  twitterTitle: 'Nuxtcipes',
  twitterDescription: 'Recipes for you to cook',
  twitterImage: '/shop.jpg',
  twitterCard: 'summary'
})
</script>
<template>
    <div>
        <section class="py-20 container">
            <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
            <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
            <div v-if='!error' class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                <RecipeCard v-for="recipe in data?.recipes" :key="recipe.id" :recipe="recipe" />
            </div>
            <p v-else class="text-xl">Opps, something went wrong. Please try again</p>
        </section> 
    </div>
    
</template>
<style scoped>

</style>