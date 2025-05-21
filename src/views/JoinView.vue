<template>
  <!-- Hero Section -->
  <section class="relative py-20 px-6 md:px-12">
    <div class="max-w-5xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
        Become a Member of Tidslerne
      </h1>
      <p class="text-lg text-gray-700 mb-10">
        Join our caring community and get access to events, knowledge, and a support system that empowers you.
      </p>
      <a
        href="#form"
        class="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-600 transition"
      >
        Apply for Membership
      </a>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="bg-gray-50 py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Membership Benefits</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="bg-white p-6 rounded-xl shadow text-center"
        >
          <div class="text-4xl text-[var(--color-primary)] mb-4" aria-hidden="true">
            <i :class="benefit.iconClass"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ benefit.title }}</h3>
          <p class="text-gray-600">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial Video Section -->
  <section class="bg-white py-20 px-6 md:px-12">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Hear from Our Members</h2>
      <div class="relative w-full pb-[56.25%]">
        <iframe
          class="absolute top-0 left-0 w-full h-full rounded-xl shadow-md"
          src="https://www.youtube.com/embed/f6rSuJ2YheQ?si=Ru8u6tXmaMoQoQo9"
          title="Testimonial from a member"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>

  <!-- Membership Form (Registration) -->
  <section id="form" class="bg-gray-50 py-20 px-6 md:px-12">
    <div class="max-w-xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Membership Application</h2>
      <form @submit.prevent="handleRegister" class="space-y-4" aria-label="Membership Registration Form">
        <label for="name" class="sr-only">Full Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          placeholder="Full name"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          autocomplete="name"
        />

        <label for="email" class="sr-only">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="Email address"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          autocomplete="email"
        />

        <label for="password" class="sr-only">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          placeholder="Create a password"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          autocomplete="new-password"
        />

        <button
          type="submit"
          class="w-full bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-600 transition"
        >
          Join Now
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = () => {
  const user = { name: name.value, email: email.value, password: password.value }
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('isLoggedIn', 'true')
  router.push('/premium')
}

const benefits = [
  {
    iconClass: 'fas fa-book-open',
    title: 'Educational Resources',
    description: 'Access to articles, guides, and expert knowledge.',
  },
  {
    iconClass: 'fas fa-hands-helping',
    title: 'Community Support',
    description: 'Join a group of people who understand and support you.',
  },
  {
    iconClass: 'fas fa-calendar-check',
    title: 'Exclusive Events',
    description: 'Participate in workshops, webinars and more.',
  },
]
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>


