<template>
  <main class="min-h-screen flex items-center justify-center bg-gray-50 px-4" aria-label="Registration page">
    <form
      @submit.prevent="handleRegister"
      class="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      aria-label="Registration form"
    >
      <h1 class="text-2xl font-bold text-center text-gray-800">Create Account</h1>

      <label for="name" class="sr-only">Full Name</label>
      <input
        id="name"
        v-model="name"
        type="text"
        name="name"
        placeholder="Full Name"
        required
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        autocomplete="name"
      />

      <label for="email" class="sr-only">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        placeholder="Email Address"
        required
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        autocomplete="email"
      />

      <label for="password" class="sr-only">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        name="password"
        placeholder="Password"
        required
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        autocomplete="new-password"
      />

      <button
        type="submit"
        class="w-full bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
      >
        Register
      </button>

      <p class="text-sm text-center mt-2 text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>
      </p>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value
  }
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('isLoggedIn', 'true')
  router.push('/premium')
}
</script>

<style scoped>
/* Optional for better focus handling */
input:focus, button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>


