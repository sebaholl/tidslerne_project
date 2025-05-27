<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faFacebookF, faInstagram)
</script>

<template>
<footer class="bg-white text-gray-800 px-6 md:px-12 pt-10 pb-4 border-t border-gray-200">
  <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
    <!-- Logo -->
    <div class="flex flex-col items-center md:items-start">
      <!-- <img src="" alt="Tidslerne logo" class="w-32 mb-4" /> -->
      <p class="text-lg text-pink-700">Together for care, strength and healing.</p>
    </div>

    <!-- Navigace – horizontální, centrovaná -->
    <div class="flex flex-col items-center justify-center">
      <ul class="flex flex-wrap justify-center gap-4 text-sm font-medium">
        <li><router-link to="/" class="hover:underline text-pink-700">Home</router-link></li>
        <li><router-link to="/about" class="hover:underline text-pink-700">About Us</router-link></li>
        <li><router-link to="/events" class="hover:underline text-pink-700">Events</router-link></li>
        <li><router-link to="/articles" class="hover:underline text-pink-700">Articles</router-link></li>
        <li><router-link to="/contact" class="hover:underline text-pink-700">Contact</router-link></li>
      </ul>
    </div>

    <!-- Social media bannery bez nadpisu -->
    <div class="flex flex-col items-center md:items-end">
      <div class="flex flex-col sm:flex-row gap-4">
        <!-- Facebook -->
        <a
          href="https://www.facebook.com/tidslerne"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition"
        >
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-blue-600 w-5 h-5" />
          <span class="font-medium text-[var(--color-primary)]">Facebook</span>
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/tidslerne_demo"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-pink-500 w-5 h-5" />
          <span class="font-medium text-[var(--color-primary)]">Instagram</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Copyright -->
  <div class="mt-8 text-center text-xs text-gray-500">
    &copy; {{ new Date().getFullYear() }} Kræftforeningen Tidslerne. All rights reserved.
  </div>
</footer>

</template>
