<template>
  <section class="px-6 md:px-12 py-16 min-h-screen">
    <div class="max-w-6xl mx-auto">

      <!-- Hero Section -->
      <div class="mb-12 mt-20">
        <h1 class="text-4xl font-bold text-center text-gray-800 !mb-8">Support. Share. Heal.</h1>
        <p class="text-center text-lg text-gray-600 max-w-2xl mx-auto">
          “Our events connect patients, survivors, and professionals in a space of compassion, knowledge, and community.”
        </p>
      </div>

      <!-- Filter Section -->
      <div class="!mb-8">
        <div class="flex justify-start gap-4">
          <button
            v-for="option in filterOptions"
            :key="option"
            :class="[
              'px-4 py-2 rounded-full font-medium transition-colors duration-200',
              selectedFilter === option
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
            ]"
            @click="selectedFilter = option"
          >
            {{ option }}
          </button>
        </div>
      </div>

      <!-- Event Cards Section -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="event in filteredEvents"
          :key="event.id"
          class="bg-white rounded-lg shadow p-4"
        >
          <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover rounded" />
          <span class="inline-block mt-3 px-3 py-1 bg-gray-100 text-sm font-medium rounded">{{ event.type }}</span>
          <h2 class="mt-2 text-xl font-bold text-gray-900">{{ event.title }}</h2>
          <p class="text-gray-600 mt-1">{{ event.description }}</p>
          <div class="mt-4 text-sm text-gray-500 flex flex-wrap gap-4">
            <span><strong>By:</strong> {{ event.author }}</span>
            <span><strong>Date:</strong> {{ formatDate(event.date) }}</span>
            <span><strong>Start:</strong> {{ event.time }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { events as allEvents } from '../modules/usePageData.js' // Ujisti se, že cesta odpovídá

const filterOptions = ['All Events', 'Nearest Events', 'Latest Events']
const selectedFilter = ref('All Events')
const today = new Date()

const filteredEvents = computed(() => {
  if (selectedFilter.value === 'Nearest Events') {
    return [...allEvents]
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
  } else if (selectedFilter.value === 'Latest Events') {
    return [...allEvents].sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  return allEvents
})

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateStr).toLocaleDateString(undefined, options)
}
</script>


