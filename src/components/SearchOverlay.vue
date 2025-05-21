<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-white z-50 flex flex-col items-center justify-start p-8 overflow-y-auto"
  >
    <!-- Close Button -->
    <button
      @click="$emit('close')"
      class="absolute top-6 right-6 text-gray-500 hover:text-black text-2xl"
      aria-label="Close search"
    >
      &times;
    </button>

    <!-- Search Input -->
    <div class="w-full max-w-3xl mt-20 mb-8 relative">
      <input
        v-model="query"
        type="text"
        class="w-full py-4 pl-12 pr-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 text-lg"
        placeholder="Search for events or articles..."
      />
      <font-awesome-icon
        icon="search"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
    </div>

    <!-- Results -->
    <div class="w-full max-w-3xl space-y-6">
      <!-- Events -->
      <div v-if="filteredEvents.length">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Events</h3>
        <ul class="space-y-2">
          <li
            v-for="event in filteredEvents"
            :key="event.id"
            @click="goTo(`/events#event-${event.id}`)"
            class="p-4 bg-gray-100 rounded-lg hover:bg-pink-50 cursor-pointer transition"
          >
            {{ event.title }}
          </li>
        </ul>
      </div>

      <!-- Articles -->
      <div v-if="filteredArticles.length">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Articles</h3>
        <ul class="space-y-2">
          <li
            v-for="article in filteredArticles"
            :key="article.id"
            @click="goTo(`/articles#article-${article.id}`)"
            class="p-4 bg-gray-100 rounded-lg hover:bg-pink-50 cursor-pointer transition"
          >
            {{ article.title }}
          </li>
        </ul>
      </div>

      <!-- No Results -->
      <div v-if="!filteredArticles.length && !filteredEvents.length && query.length > 1" class="text-gray-500">
        No results found.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { articles, events } from '@/modules/usePageData'

defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])

const router = useRouter()
const query = ref('')

const filteredArticles = computed(() =>
  articles.filter(a =>
    a.title.toLowerCase().includes(query.value.toLowerCase())
  )
)

const filteredEvents = computed(() =>
  events.filter(e =>
    e.title.toLowerCase().includes(query.value.toLowerCase())
  )
)

function goTo(path) {
  emit('close')
  router.push(path).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}
</style>
