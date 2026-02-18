<script setup lang="ts">
import { type RecipeResponse } from "../../types/types";
const { data, error } = await useFetch<RecipeResponse>("https://dummyjson.com/recipes?limit=12");
</script>
<template>
    <div>
        <section class="py-20 container">
            <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
            <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                <div v-for="recipe in data?.recipes" class="flex flex-col shadow rounded-md">
                <NuxtImg :src="recipe.image" :alt="recipe.name" class="rounded-t-md" />
                <div class="flex flex-col py-6 px-4 flex-1">
                    <p class="text-xl lg:text-2xl font-semibold mb-2">Recipe Name</p>
                    <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
                    <div class="flex items-center gap-1">
                        <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
                        <span>Cook Time</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <Icon name="mdi:fire" style="color: #f79f1a" />
                        <span>Calories</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <Icon name="mdi:star" style="color: #f79f1a" />
                        <span>Rating (Review Count)</span>
                    </div>
                    </div>
                    <NuxtLink
                      :to="`/recipes/${recipe.id}`"
                      class="px-4 py-2 text-white self-start bg-yellow-400 rounded-md text-base lg:text-lg cursor-pointer"
                    >
                    View
                    </NuxtLink>
                </div>
                </div>
            </div>
        </section> 
    </div>
    
</template>
<style scoped>

</style>