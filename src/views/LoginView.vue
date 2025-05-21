<template>
  <main class="min-h-screen flex items-center justify-center bg-gray-50 px-4" aria-label="Login page">
    <form
      @submit.prevent="handleLogin"
      class="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      aria-label="Login form"
    >
      <h1 class="text-2xl font-bold text-center text-gray-800">Login</h1>

      <label for="email" class="sr-only">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        placeholder="Email"
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
        autocomplete="current-password"
      />

      <button
        type="submit"
        class="w-full bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
      >
        Login
      </button>

      <p class="text-sm text-center mt-2 text-gray-600">
        Don't have an account?
        <router-link to="/register" class="text-blue-600 hover:underline">Register</router-link>
      </p>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.email === email.value && user.password === password.value) {
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/premium')
  } else {
    alert('Incorrect credentials')
  }
}
</script>

<style scoped>
input:focus, button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>

