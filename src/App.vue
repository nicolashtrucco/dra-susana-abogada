<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import HeaderHero from './components/HeaderHero.vue'
import HeaderNavigation from './components/HeaderNavigation.vue'
import ServicesSection from './components/ServicesSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { setLenisInstance } from './utils/smoothScroll'
import WhatsAppFloat from './components/WhatsAppFloat.vue'

let lenis: Lenis | undefined
let animationFrame = 0

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  })

  setLenisInstance(lenis)
  lenis.on('scroll', ScrollTrigger.update)

  function animate(time: number) {
    lenis?.raf(time)
    animationFrame = requestAnimationFrame(animate)
  }

  animationFrame = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrame)
  setLenisInstance(undefined)
  lenis?.destroy()
})
</script>

<template>
  <HeaderNavigation />
  <main class="max-w-full overflow-x-clip">
    <HeaderHero />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </main>
  <SiteFooter />
  <WhatsAppFloat />
</template>
