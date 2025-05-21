<template>
  <div class="min-w-[280px] md:min-w-[320px] max-w-sm bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg snap-start">
    <img :src="event.image" alt="event.title" class="w-full h-48 object-cover" />

    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-800 !mb-2">{{ event.title }}</h3>
      <p class="text-sm text-gray-500">{{ event.date }} • {{ event.location }}</p>
      <p class="text-gray-700 !mt-2">{{ event.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: Object
})
</script>


