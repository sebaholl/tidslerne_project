<script setup>
import { ref, onMounted } from 'vue'
import { events } from '../modules/usePageData.js'
import { articles } from '../modules/usePageData.js'
import EventCard from '../components/EventCard.vue'
import ArticleCard from '../components/ArticleCard.vue'
import flower from '@/images/websiteFlower.svg'



const carouselRef = ref(null)
const scrollLeft = () => carouselRef.value.scrollBy({ left: -300, behavior: 'smooth' })
const scrollRight = () => carouselRef.value.scrollBy({ left: 300, behavior: 'smooth' })

const articlesRef = ref(null)
const scrollArticlesLeft = () => articlesRef.value.scrollBy({ left: -300, behavior: 'smooth' })
const scrollArticlesRight = () => articlesRef.value.scrollBy({ left: 300, behavior: 'smooth' })

const email = ref('')
onMounted(() => {
  email.value = ''
})
</script>

<template>
  <main>
    <section class="relative min-h-screen flex items-center justify-center px-6 md:px-12 text-center overflow-hidden" aria-label="Welcome section">

<!-- ORNAMENTY -->
<div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
  <img
    v-for="(item, index) in [
      // DESKTOP ORNAMENTS
      { pos: 'top-[5%] left-[5%]', size: 'w-64 h-64', rotate: 'rotate-3', mobile: false },
      { pos: 'top-[10%] right-[8%]', size: 'w-72 h-72', rotate: '-rotate-12', mobile: false },
      { pos: 'top-[35%] left-[30%]', size: 'w-60 h-60', rotate: 'rotate-45', mobile: false },
      { pos: 'top-[60%] right-[20%]', size: 'w-56 h-56', rotate: 'rotate-[75deg]', mobile: false },
      { pos: 'bottom-[10%] left-[10%]', size: 'w-64 h-64', rotate: '-rotate-3', mobile: false },
      { pos: 'bottom-[8%] right-[8%]', size: 'w-72 h-72', rotate: 'rotate-12', mobile: false },
      { pos: 'top-[50%] left-[50%]', size: 'w-96 h-96', rotate: '-rotate-[35deg]', mobile: false },
      { pos: 'top-[25%] right-[35%]', size: 'w-64 h-64', rotate: 'rotate-[130deg]', mobile: false },
      { pos: 'bottom-[30%] left-[45%]', size: 'w-72 h-72', rotate: '-rotate-[20deg]', mobile: false },
      { pos: 'top-[15%] left-[50%]', size: 'w-52 h-52', rotate: 'rotate-[200deg]', mobile: false },

      // MOBILE-FRIENDLY ORNAMENTS
      { pos: 'top-[10%] left-[5%]', size: 'w-32 h-32', rotate: 'rotate-6', mobile: true },
      { pos: 'top-[35%] right-[5%]', size: 'w-40 h-40', rotate: '-rotate-12', mobile: true },
      { pos: 'bottom-[10%] left-[30%]', size: 'w-36 h-36', rotate: 'rotate-3', mobile: true },
      { pos: 'top-[50%] left-[20%]', size: 'w-32 h-32', rotate: 'rotate-[145deg]', mobile: true },
      { pos: 'bottom-[20%] right-[15%]', size: 'w-28 h-28', rotate: '-rotate-[70deg]', mobile: true }
    ]"
    :key="index"
    :src="flower"
    alt="Decorative thistle"
    :class="[
      'absolute opacity-10',
      item.pos,
      item.size,
      item.rotate,
      item.mobile ? 'block sm:hidden' : 'hidden sm:block'
    ]"
  />
</div>

<!-- OBSAH -->
<div class="max-w-4xl z-10">
  <h1 class="text-4xl md:text-5xl font-bold text-primary mb-8">
    Welcome to Tidslerne
  </h1>
  <p class="text-lg md:text-xl text-gray-700 mb-6">
    A supportive community for cancer patients and their families. Learn, connect, and grow together.
  </p>
  <router-link
    to="/join"
    class="inline-block px-6 py-3 bg-pink-700 text-white font-semibold rounded-xl hover:bg-pink-500 transition"
  >
    Join Us
  </router-link>
</div>
</section>

    <!-- About Section -->
    <!-- <section class="relative bg-gray-50 py-16 px-6 md:px-12" aria-label="About Tidslerne">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Tidslerne</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          We are an independent, volunteer-run cancer association founded in 1991. Tidslerne supports patients and their relatives with information, community, and personal stories.
        </p>
      </div>
    </section> -->

    <!-- Events Section -->
    <section class="relative py-16 px-6 md:px-12" aria-label="Upcoming events">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between !mb-6">
          <h2 class="text-3xl font-bold text-gray-800">Upcoming Events</h2>
          <router-link to="/events" class="text-[var(--color-primary)] font-medium hover:underline">
            View all →
          </router-link>
        </div>

        <div class="relative">
          <button @click="scrollLeft" aria-label="Scroll events left" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">←</button>
          <div ref="carouselRef" class="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory px-8">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
          </div>
          <button @click="scrollRight" aria-label="Scroll events right" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">→</button>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 px-6 md:px-12 text-center">
  <h2 class="text-3xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h2>
  <p class="text-gray-600 mb-6 max-w-xl mx-auto">
    Stay informed about upcoming events, inspiring articles, and community updates from Tidslerne.
  </p>
  <form
    action="https://formspree.io/f/mrbqljyq"
    method="POST"
    class="max-w-xl mx-auto flex flex-col sm:flex-row gap-4"
  >
    <input
      type="email"
      name="email"
      required
      placeholder="Your email address"
      class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
    />
    <button
      type="submit"
      class="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
    >
      Subscribe
    </button>
  </form>
</section>


    <!-- Articles Section -->
    <section class="relative bg-gray-50 py-16 px-6 md:px-12" aria-label="Articles and resources">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-3xl font-bold text-gray-800">Articles & Information</h2>
          <router-link to="/articles" class="text-[var(--color-primary)] font-medium hover:underline">
            View all →
          </router-link>
        </div>

        <div class="relative">
          <button @click="scrollArticlesLeft" aria-label="Scroll articles left" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">←</button>
          <div ref="articlesRef" class="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory px-8">
            <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
          </div>
          <button @click="scrollArticlesRight" aria-label="Scroll articles right" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">→</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[var(--color-primary)] text-white py-16 px-6 md:px-12 text-center" aria-label="Call to action">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Join Our Supportive Community</h2>
        <p class="text-lg mb-6">
          Become a member of Tidslerne and access valuable knowledge, events, and shared experiences.
        </p>
        <router-link
          to="/join"
          class="inline-block bg-white text-[var(--color-primary)] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Become a Member
        </router-link>
      </div>
    </section>

    <!-- Video Section -->
    <section class=" py-16 px-6 md:px-12 text-center" aria-label="Video library">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Patient Stories & Video Library</h2>
        <p class="text-lg text-gray-700 mb-10">
          Real voices from our community sharing their journeys, experiences, and advice.
        </p>
        <div class="relative w-full pb-[56.25%] mb-6">
          <iframe
            class="absolute top-0 left-0 w-full h-full rounded-xl shadow-md"
            src="https://www.youtube.com/embed/f6rSuJ2YheQ?si=Ru8u6tXmaMoQoQo9"
            title="Patient Story Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <blockquote class="italic text-gray-600 max-w-xl mx-auto">
          “Being part of Tidslerne helped me find clarity and strength during the hardest part of my life.”
        </blockquote>
      </div>
    </section>



  </main>
</template>

<style scoped>
</style>

