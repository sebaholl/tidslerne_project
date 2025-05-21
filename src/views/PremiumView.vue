<template>
  <div class="max-w-6xl mx-auto py-20 px-6">
    <!-- Přihlášený uživatel -->
    <section v-if="isLoggedIn" aria-label="Premium Content">
      <div class="flex justify-between items-center mb-10">
        <h1 class="text-4xl font-bold text-gray-800">Welcome, Premium Member</h1>
        <button
          @click="logout"
          class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          aria-label="Log out"
        >
          Log Out
        </button>
      </div>

      <!-- Exclusive Content -->
      <article class="grid md:grid-cols-2 gap-8 mb-16" aria-label="Exclusive Interview and Events">
        <section class="bg-white p-6 rounded-xl shadow" aria-labelledby="interview-heading">
          <h2 id="interview-heading" class="text-2xl font-semibold text-[var(--color-primary)] mb-4">Exclusive Interview</h2>
          <iframe
            class="w-full rounded"
            height="250"
            src="https://www.youtube.com/embed/f6rSuJ2YheQ"
            title="Interview with Tidslerne Members"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>

        <section class="bg-white p-6 rounded-xl shadow" aria-labelledby="events-heading">
          <h2 id="events-heading" class="text-2xl font-semibold text-[var(--color-primary)] mb-4">Upcoming Premium Events</h2>
          <ul class="text-gray-700 space-y-2">
            <li><font-awesome-icon icon="star" class="text-[var(--color-primary)] mr-2" /><strong>Online Q&A with Doctors</strong> – June 15</li>
            <li><font-awesome-icon icon="video" class="text-[var(--color-primary)] mr-2" /><strong>Webinar: Healing Journeys</strong> – July 10</li>
            <li><font-awesome-icon icon="book" class="text-[var(--color-primary)] mr-2" /><strong>Virtual Group Discussion</strong> – July 22</li>
            <li><font-awesome-icon icon="comments" class="text-[var(--color-primary)] mr-2" /><strong>Live Session with Survivors</strong> – August 1</li>
          </ul>
        </section>
      </article>

      <!-- Featured Articles -->
      <section class="bg-white p-6 rounded-xl shadow mb-16" aria-labelledby="articles-heading">
        <h2 id="articles-heading" class="text-2xl font-semibold text-[var(--color-primary)] mb-4">Featured Articles</h2>
        <article class="space-y-6">
          <div>
            <h3 class="text-lg font-bold text-gray-800">Nutrition & Recovery</h3>
            <p class="text-gray-600 mb-2">Insights from experts about healing and nutrition during treatment.</p>
            <a href="#" class="text-[var(--color-primary)] font-semibold hover:underline">Read More<span class="sr-only"> about Nutrition & Recovery</span> →</a>
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-800">Managing Stress After Diagnosis</h3>
            <p class="text-gray-600 mb-2">Tips and community stories on mental health and emotional balance.</p>
            <a href="#" class="text-[var(--color-primary)] font-semibold hover:underline">Read More<span class="sr-only"> about Managing Stress</span> →</a>
          </div>
        </article>
      </section>

      <!-- Downloadable Resources -->
      <section class="bg-white p-6 rounded-xl shadow mb-16" aria-labelledby="resources-heading">
        <h2 id="resources-heading" class="text-2xl font-semibold text-[var(--color-primary)] mb-4">Exclusive Resources</h2>
        <ul class="space-y-3">
          <li>
            <font-awesome-icon icon="file-alt" class="text-[var(--color-primary)] mr-2" />
            <span class="text-gray-800 font-medium">E-Book: Cancer Support Guide</span>
            <a href="#" class="ml-2 text-blue-600 hover:underline">Download</a>
          </li>
          <li>
            <font-awesome-icon icon="headphones" class="text-[var(--color-primary)] mr-2" />
            <span class="text-gray-800 font-medium">Audio Meditation Pack</span>
            <a href="#" class="ml-2 text-blue-600 hover:underline">Download</a>
          </li>
        </ul>
      </section>

      <!-- Message -->
      <footer class="text-center mt-12" aria-label="Thank you message">
        <p class="text-gray-600 italic">
          Thank you for being part of our premium community. Your membership helps us support even more people on their journey.
        </p>
      </footer>
    </section>

    <!-- Nepřihlášený uživatel -->
    <section
      v-else
      class="text-center bg-white p-12 rounded-xl shadow max-w-2xl mx-auto"
      aria-labelledby="locked-heading"
    >
      <h1 id="locked-heading" class="text-3xl font-bold text-gray-800 mb-4">Premium Content</h1>
      <p class="text-gray-600 mb-6">
        This area is reserved for premium members. Please log in or register to access exclusive content.
      </p>
      <div class="flex justify-center gap-4">
        <router-link
          to="/login"
          class="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          Login
        </router-link>
        <router-link
          to="/register"
          class="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition"
        >
          Register
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const router = useRouter()
const isLoggedIn = ref(false)

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
})

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('user')
  isLoggedIn.value = false
  router.push('/login')
}
</script>

<script>
export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
</style>





