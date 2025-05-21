<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComp.vue'
import AuthBanner from '@/components/AuthBanner.vue'
import AboutContactSection from '@/components/AboutContactSection.vue'
import SearchOverlay from '@/components/SearchOverlay.vue'
import flower from '@/images/websiteFlower.svg'

import { ref } from 'vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const showSearchOverlay = ref(false)

function openSearch() {
  showSearchOverlay.value = true
}

function closeSearch() {
  showSearchOverlay.value = false
}

watch(route, () => {
  showSearchOverlay.value = false
})
</script>

<template>
  <div class="relative min-h-screen flex flex-col justify-between overflow-x-hidden">

    <!-- 🔍 Full Page Search Overlay -->
    <SearchOverlay :show="showSearchOverlay" @close="closeSearch" />


<!-- FULL Hero Section Ornament Layer -->
<div class="absolute w-full h-full top-0 left-0 pointer-events-none -z-10 overflow-hidden">
  <img
    v-for="(item, index) in [
      // Desktop ornaments (rich and layered)
      { position: 'top-[2%] left-[5%]', size: 'w-28 h-28', rotate: 'rotate-12', mobile: false },
      { position: 'top-[10%] right-[10%]', size: 'w-40 h-40', rotate: '-rotate-45', mobile: false },
      { position: 'top-[20%] left-[50%]', size: 'w-24 h-24', rotate: 'rotate-3', mobile: false },
      { position: 'top-[30%] left-[25%]', size: 'w-36 h-36', rotate: 'rotate-6', mobile: false },
      { position: 'top-[35%] right-[20%]', size: 'w-32 h-32', rotate: '-rotate-6', mobile: false },
      { position: 'top-[40%] left-[40%]', size: 'w-20 h-20', rotate: 'rotate-45', mobile: false },
      { position: 'top-[50%] right-[5%]', size: 'w-48 h-48', rotate: 'rotate-12 scale-x-[-1]', mobile: false },
      { position: 'top-[60%] left-[10%]', size: 'w-28 h-28', rotate: '-rotate-12', mobile: false },
      { position: 'top-[70%] left-[45%]', size: 'w-16 h-16', rotate: 'rotate-3', mobile: false },
      { position: 'bottom-[10%] right-[10%]', size: 'w-24 h-24', rotate: 'rotate-6', mobile: false },
      { position: 'bottom-[5%] left-[5%]', size: 'w-20 h-20', rotate: '-rotate-3', mobile: false },

      // Mobile-safe (smaller, gentle)
      { position: 'top-[8%] left-[10%]', size: 'w-12 h-12', rotate: 'rotate-6', mobile: true },
      { position: 'top-[60%] left-[30%]', size: 'w-14 h-14', rotate: '-rotate-6', mobile: true },
      { position: 'bottom-[12%] right-[20%]', size: 'w-16 h-16', rotate: 'rotate-12', mobile: true }
    ]"
    :key="index"
    :src="flower"
    alt="Decorative thistle"
    :class="[
      'absolute opacity-10',
      item.position,
      item.size,
      item.rotate,
      item.mobile ? '' : 'hidden sm:block'
    ]"
  />
</div>





    <HeaderComponent @open-search="openSearch" />

    <AuthBanner />

    <main class="flex-grow">
      <router-view />
    </main>

    <AboutContactSection v-if="route.name !== 'contact'" />
    <FooterComponent />
  </div>
</template>



