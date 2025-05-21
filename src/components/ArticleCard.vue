<template>
  <div class="min-w-[280px] md:min-w-[320px] max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all snap-start">
    <!-- Optional image -->
    <img
      v-if="article.image"
      :src="article.image"
      alt="Article cover"
      class="w-full h-48 object-cover"
    />

    <div class="p-5">
      <h3 class="text-xl font-bold text-gray-800 mb-2">
        {{ article.title }}
      </h3>
      <p class="text-sm text-gray-500 mb-1">
        <span class="font-medium text-gray-700">Category:</span> {{ article.category }}
      </p>
      <p class="text-gray-700 text-sm mb-4 leading-relaxed">
        {{ article.summary }}
      </p>
      <router-link
        :to="`/articles/${article.id}`"
        class="inline-block text-[var(--color-primary)] hover:underline font-medium text-sm"
      >
        Read more →
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: Object
})
</script>
