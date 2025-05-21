<template>
  <section class="py-16 px-6 md:px-12 ">
    <!-- Intro Section -->
    <div class="max-w-4xl mx-auto text-center mb-20 mt-20">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">We Are Here for You</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Whether you're looking for support, resources, or simply someone to talk to – we're ready to help. Reach out to us at any time.
      </p>
    </div>


<!-- Contact Info Section -->
<section class=" py-16 px-6 md:px-12">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12">
      <div
        v-for="person in contacts"
        :key="person.name"
        class="flex gap-6 items-start pl-20"
      >
        <!-- Profile image with fallback silhouette -->
        <div class="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shrink-0">
          <img
            v-if="person.image"
            :src="person.image"
            :alt="person.name"
            class="object-cover w-full h-full"
          />
          <img
            v-else
            src=""
            alt="No photo available"
            class="w-14 h-14 object-contain opacity-60"
          />
        </div>

        <!-- Info -->
        <div>
          <h3 class="font-bold text-xl text-gray-800 mb-1">{{ person.name }}</h3>
          <p class="text-sm text-gray-600 mb-1">{{ person.role }}</p>
          <p class="text-sm text-gray-600">
            📧 <a :href="`mailto:${person.email}`" class="underline">{{ person.email }}</a>
          </p>
          <p class="text-sm text-gray-600">📞 {{ person.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</section>







    <!-- Contact Form -->
    <div class="max-w-3xl mx-auto mb-16">
      <form
        action="https://formspree.io/f/mrbqljyq"
        method="POST"
        class="bg-gray-50 p-6 rounded shadow space-y-4"
      >
        <div class="grid md:grid-cols-2 gap-4">
          <input type="text" name="name" required placeholder="Your Name" class="bg-white border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-300" />
          <input type="email" name="email" required placeholder="Your Email" class="bg-white border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-300" />
        </div>
        <input type="text" name="subject" required placeholder="Subject" class="bg-white border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-300" />
        <textarea name="message" required rows="5" placeholder="Your Message" class="bg-white border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-300"></textarea>
        <button type="submit" class="bg-[var(--color-primary)] text-white px-6 py-2 rounded hover:bg-pink-600 transition">
          Send Message
        </button>
      </form>
    </div>

    <!-- Social Media Banner -->
    <div class="text-center mb-16">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Follow Us on Social Media</h2>
      <div class="flex justify-center gap-6">
        <a href="https://www.facebook.com/tidslerne" target="_blank" aria-label="Facebook">
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-blue-600 text-2xl" />
        </a>
        <a href="https://www.instagram.com/tidslerne" target="_blank" aria-label="Instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-pink-500 text-2xl" />
        </a>
      </div>
    </div>

    <!-- Map Section -->
    <div class="max-w-4xl mx-auto mb-16">
      <iframe
        title="Tidslerne Office Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2259.410062090141!2d8.402011777066503!3d55.50780467299451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b2083f067dfad%3A0x5777dc2443531a49!2s%C3%85dalsparken%2029%2C%206710%20Esbjerg%20Kommune!5e0!3m2!1scs!2sdk!4v1747596135091!5m2!1scs!2sdk"
        width="100%"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded shadow"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import MaiNielsenImg from '@/images/Mai-Nielsen2.jpg'
import HovedskouImg from '@/images/hovedskou_ny.jpg'
import DortheImg from '@/images/dorthehelbrink.jpg'


const contacts = [
  {
    name: 'Mai Nielsen',
    role: 'Chairwoman',
    email: 'formand@tidslerne.dk',
    phone: '+45 40 15 90 11',
    image: MaiNielsenImg
  },
  {
    name: 'Bo Christensen',
    role: 'Vice Chairman',
    email: 'naestformand@tidslerne.dk',
    phone: '+45 20 68 49 66',
    image: null // zobrazí se fallback
  },
  {
    name: 'Christina Hovedskou',
    role: 'Online Course Coordinator',
    email: 'zoom@tidslerne.dk',
    phone: '+45 23 37 33 63',
    image: HovedskouImg
  },
  {
    name: 'Dorthe Helbrink',
    role: 'Tidsellinjen Contact',
    email: 'tidsellinjen@tidslerne.dk',
    phone: '+45 51 27 01 76',
    image: DortheImg
  }
]
</script>


<style scoped>
</style>
