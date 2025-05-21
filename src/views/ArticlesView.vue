<script setup>
import { ref, computed, onMounted } from 'vue'
import { articles } from '@/modules/usePageData'
import heroImage from '@/images/hero_image1.jpg'

const filterOptions = ['All', 'Nutrition', 'Recovery', 'Mental Health', 'Alternative']
const selectedFilter = ref('All')
const selectedArticle = ref(null)
const showHeroModal = ref(false)
const bannerVisible = ref(false)
const bannerTopOffset = ref(0)

onMounted(() => {
  const start = document.querySelector('#banner-start')
  const end = document.querySelector('#banner-end')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target.id === 'banner-start') {
        if (entry.isIntersecting) bannerVisible.value = true
      }
      if (entry.target.id === 'banner-end') {
        if (entry.isIntersecting) bannerVisible.value = false
      }
    })
  }, { threshold: 0 })

  if (start) observer.observe(start)
  if (end) observer.observe(end)

  // Set the banner position
  const anchor = document.querySelector('[data-banner-anchor]')
  if (anchor) {
    bannerTopOffset.value = anchor.getBoundingClientRect().top + window.scrollY
  }
})

const filteredArticles = computed(() => {
  if (selectedFilter.value === 'All') return articles
  return articles.filter(a => a.category === selectedFilter.value)
})

function openModal(article) {
  selectedArticle.value = article
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

</script>

<template>
  <!-- HERO SECTION -->
  <section class="py-16 px-6 md:px-12 relative mt-20">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <!-- Text -->
      <div class="md:flex-1 text-center md:text-left">
        <p class="text-sm text-gray-600 mb-2">Latest Post</p>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          A Survivor’s Journey: How I<br />
          Found Strength During<br />
          Chemotherapy
        </h1>
        <p class="text-sm text-gray-600 mb-6">May 13, 2025 • Recovery</p>
        <button
          @click="showHeroModal = true"
          class="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-3 rounded-md font-semibold hover:bg-pink-700 transition"
        >
          Read More
          <span aria-hidden="true">→</span>
        </button>
      </div>

    <!-- Image -->
    <div class="md:flex-1 relative w-full max-w-xl">
        <div class="absolute top-4 left-4 w-full h-full bg-gray-700 rounded-md opacity-90 -z-10"></div>
        <img
          :src="heroImage"
          alt="Survivor raising arms"
          class="w-full rounded-md border-4 border-zinc-500 object-cover"
        />
      </div>
    </div>


    <!-- Hero Modal -->
    <div
      v-if="showHeroModal"
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
    >
      <div class="bg-white max-w-2xl w-full rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          @click="showHeroModal = false"
          class="sticky top-0 right-0 bg-white z-10 float-right text-xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>
        <img
          :src= "heroImage"
          alt="Survivor raising arms"
          class="w-full mb-4 rounded-md border-4 border-zinc-700 object-cover"
        />
        <h2 class="text-2xl font-bold text-gray-800 mb-2">
          A Survivor’s Journey: How I Found Strength During Chemotherapy
        </h2>
        <p class="text-sm text-gray-500 mb-4">May 13, 2025 • Recovery</p>
        <div class="text-gray-700 leading-relaxed space-y-4">
          <p>Going through chemotherapy was one of the toughest experiences of my life. There were days I felt like giving up, days I couldn’t eat or even get out of bed.</p>
          <p>But with the support of my family, the Tidslerne community, and my own determination, I discovered strength I never knew I had. I learned to celebrate small wins, to take each day as it came, and to stay focused on the hope of recovery.</p>
          <p>This journey changed me forever — and if you’re reading this while going through treatment, know that you are not alone. There is strength in your story, too.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ARTICLES LIST -->
  <section class="px-6 md:px-12 py-12 relative" data-banner-anchor>
    <div id="banner-start" class="h-1 w-full absolute -top-20"></div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left side: content -->
      <div class="lg:col-span-2">
        <!-- Filters -->
        <div class="flex flex-wrap gap-4 mb-8">
          <button
            v-for="cat in filterOptions"
            :key="cat"
            @click="selectedFilter = cat"
            :class="[
              'px-4 py-2 rounded-full font-medium',
              selectedFilter === cat
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-white text-gray-800 border border-gray-300'
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Article Cards -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="article in filteredArticles"
            :key="article.id"
            class="bg-white rounded shadow p-4 flex flex-col justify-between transform transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            <img :src="article.image" :alt="article.title" class="rounded w-full h-48 object-cover mb-4" />
            <div>
              <h3 class="font-bold text-lg mb-1">{{ article.title }}</h3>
              <p class="text-sm text-gray-500 mb-2"><strong>Category:</strong> {{ article.category }}</p>
              <p class="text-sm text-gray-700 mb-2">{{ article.description }}</p>
              <p class="text-xs text-gray-500 mb-4">{{ formatDate(article.date) }}</p>
              <button
                @click="openModal(article)"
                class="text-[var(--color-primary)] font-semibold hover:underline"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fixed Banner (aligned with articles) -->
    <div
      v-if="bannerVisible"
      class="hidden lg:block fixed z-40"
      :style="{ top: bannerTopOffset + 'px', right: '3rem' }"
    >
      <div
        class="bg-white shadow p-6 rounded text-center w-72 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <h4 class="text-lg font-semibold mb-3">Get Access to Exclusive Stories</h4>
        <router-link
          to="/premium"
          class="inline-block bg-[var(--color-primary)] text-white font-semibold px-4 py-2 rounded hover:bg-pink-600 mb-4"
        >
          Join Premium
        </router-link>
        <p class="text-xs text-gray-500 mb-2">Follow Us</p>
        <div class="flex justify-center gap-4">
          <a href="https://facebook.com/tidslerne" target="_blank" aria-label="Facebook">
            <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-blue-600 text-xl" />
          </a>
          <a href="https://instagram.com/tidslerne" target="_blank" aria-label="Instagram">
            <font-awesome-icon :icon="['fab', 'instagram']" class="text-pink-500 text-xl" />
          </a>
        </div>
      </div>
    </div>

    <!-- Article Modal -->
    <div
      v-if="selectedArticle"
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <div class="bg-white max-w-2xl w-full rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          @click="selectedArticle = null"
          class="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
        >&times;</button>

        <img
          :src="selectedArticle.image"
          :alt="selectedArticle.title"
          class="w-full mb-4 rounded border-4 border-zinc-700 object-cover"
        />

        <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ selectedArticle.title }}</h2>
        <p class="text-sm text-gray-500 mb-4">{{ formatDate(selectedArticle.date) }} • {{ selectedArticle.category }}</p>

        <div class="text-gray-700 space-y-4 leading-relaxed">
          <p v-for="(para, idx) in selectedArticle.content" :key="idx">{{ para }}</p>
        </div>
      </div>
    </div>
    <div id="banner-end" class="h-1 w-full absolute -bottom-20"></div>
  </section>
</template>


<style scoped>
html, body {
  overflow-x: hidden;
}
</style>
