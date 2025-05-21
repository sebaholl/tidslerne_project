<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow z-50" role="banner">
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-22 w-full"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div class="flex items-center justify-between w-full">
        <!-- Logo -->
<router-link
  to="/"
  class="flex items-center"
  aria-label="Go to homepage"
>
  <span class="sr-only">Tidslerne homepage</span>
  <img
    src="@/images/Logonew.svg"
    alt="Tidslerne logo"
    class="h-40 w-auto"
  />
</router-link>

        <!-- Desktop menu -->
        <div class="hidden md:flex gap-x-6 items-center">
          <!-- Premium link (vždy zobrazený) -->
          <router-link
            to="/premium"
            aria-label="Premium Membership Section"
            class="relative px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] transition font-medium
                   after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full
                   after:h-[2px] after:bg-[var(--color-primary)] after:transition-all after:duration-300"
          >
            Members
          </router-link>

          <!-- Ostatní odkazy -->
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.to"
            :aria-label="link.name"
            class="relative px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] transition font-medium
                   after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full
                   after:h-[2px] after:bg-[var(--color-primary)] after:transition-all after:duration-300"
          >
            {{ link.name }}
          </router-link>

          <!-- Auth buttons with icon and dropdown -->
          <!-- User Icon with Dropdown -->
<div class="relative" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
  <font-awesome-icon
    icon="user"
    class="text-[var(--color-primary)] w-5 h-5 cursor-pointer"
  />

  <transition name="fade">
    <div
      v-if="showDropdown"
      class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50"
    >
      <router-link
        v-if="!isAuthenticated"
        to="/login"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Login
      </router-link>
      <router-link
        v-if="!isAuthenticated"
        to="/register"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Register
      </router-link>
      <button
        v-if="isAuthenticated"
        @click="logout"
        class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  </transition>
</div>

          <!-- Search icon -->
          <font-awesome-icon
  icon="search"
  class="text-[var(--color-primary)] w-5 h-5 cursor-pointer ml-4"
  @click="emit('open-search')"
/>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden text-[var(--color-primary)] ml-4"
          @click="isOpen = !isOpen"
          aria-label="Toggle Mobile Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile dropdown -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 bg-white shadow space-y-2" role="menu" aria-label="Mobile Navigation">
      <router-link
        to="/premium"
        class="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] transition font-medium"
        @click="isOpen = false"
      >
        Premium
      </router-link>

      <router-link
        v-for="link in navLinks"
        :key="link.name"
        :to="link.to"
        class="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] transition font-medium"
        @click="isOpen = false"
      >
        {{ link.name }}
      </router-link>

      <router-link
        v-if="!isAuthenticated"
        to="/login"
        class="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] transition font-medium"
        @click="isOpen = false"
      >
        Login
      </router-link>

      <router-link
        v-if="!isAuthenticated"
        to="/register"
        class="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] transition font-medium"
        @click="isOpen = false"
      >
        Registter
      </router-link>

      <button
        v-if="isAuthenticated"
        @click="logout"
        class="block w-full text-left px-3 py-2 text-red-600 hover:text-red-800 font-medium"
      >
        Logout
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const emit = defineEmits(['open-search'])

const isOpen = ref(false)
const isAuthenticated = ref(false)
const router = useRouter()
const showDropdown = ref(false)

const navLinks = [
  { name: 'Join us', to: '/join' },
  { name: 'Events', to: '/events' },
  { name: 'Articles', to: '/articles' },
  { name: 'Contact', to: '/contact' },
]

onMounted(() => {
  isAuthenticated.value = localStorage.getItem('isLoggedIn') === 'true'
})

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('user')
  isAuthenticated.value = false
  router.push('/login')
}
</script>

<style scoped>


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>







