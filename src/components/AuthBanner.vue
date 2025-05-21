<template>
  <div v-if="isLoggedIn" class="bg-[var(--color-primary)] text-white px-4 py-3 text-center flex justify-between items-center">
    <span>You're logged in as <strong>{{ user.name }}</strong></span>
    <button @click="logout" class="bg-white text-[var(--color-primary)] font-semibold px-4 py-1 rounded hover:bg-gray-100 transition">
      Logout
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false)
const user = ref({ name: '' })

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }
})

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('user')
  router.push('/login')
}
</script>
