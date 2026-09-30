<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { lawyer } from '../data/lawyer'

const hero = ref<HTMLElement | null>(null)
let context: gsap.Context | undefined

onMounted(() => {
  if (!hero.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  context = gsap.context(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } })

    timeline
      .from('.hero-description', { autoAlpha: 0, y: 16, duration: 0.65 })
      .from('.hero-title', { autoAlpha: 0, y: 18, duration: 0.75 }, '-=0.38')
      .from('.hero-credentials', { autoAlpha: 0, y: 14, duration: 0.6 }, '-=0.42')
      .from('.hero-cta', { autoAlpha: 0, y: 14, duration: 0.6 }, '-=0.38')
  }, hero.value)
})

onUnmounted(() => {
  context?.revert()
})
</script>

<template>
  <header
    ref="hero"
    id="inicio"
    class="relative isolate grid min-h-[max(520px,100svh)] grid-rows-[auto_1fr_auto] overflow-x-clip overflow-y-hidden bg-[url('/HeaderAbogada.jpg')] bg-cover bg-center text-[#F7F5F1] max-[1024px]:min-h-svh max-[1024px]:overflow-y-visible max-[1024px]:bg-[position:45%_center] max-[720px]:grid-rows-[auto_1fr] max-[720px]:bg-[position:38%_center]"
  >
    <!-- Overlay -->
    <div
      class="pointer-events-none absolute inset-0 bg-linear-to-r from-black/52 via-black/18 to-black/43"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/47 to-transparent"
    />

    <div class="h-[5.5rem] max-[720px]:h-20" aria-hidden="true" />

    <!-- Desktop / Tablet intro -->
    <div
      class="relative z-10 col-start-1 row-start-2 mt-4 mr-6 mb-10 ml-[50.6vw] w-[min(42vw,31rem)] self-center text-[clamp(0.88rem,1.1vw,1rem)] max-[1024px]:mr-[max(1.5rem,7vw)] max-[1024px]:ml-auto max-[1024px]:w-[min(46%,28rem)] max-[720px]:hidden"
    >
      <p class="hero-description mb-4 max-w-[29rem] leading-[1.25]">
        {{ lawyer.fullName }}, “{{ lawyer.nickname }}”. Asesoramiento y defensa penal
        para personas que necesitan respuestas claras, confidenciales y firmes.
      </p>

      <a
        href="#servicios"
        class="hero-cta inline-flex gap-[0.65rem] border-b border-[#D0BC8D]/80 pb-[0.3rem] text-[0.87rem] transition-colors duration-200 hover:text-[#D0BC8D] motion-reduce:transition-none"
      >
        Conocer mis servicios
        <span
          class="icon-arrow text-[1rem] leading-[0.75] text-[#B69A63]"
          aria-hidden="true"
        >
          ↗&#xFE0E;
        </span>
      </a>
    </div>

    <!-- Desktop / Tablet title -->
    <div
      class="relative z-10 col-start-1 row-start-3 mb-6 ml-6 w-[min(100%-3rem,48rem)] max-[1024px]:ml-[max(1.5rem,5vw)] max-[720px]:hidden"
    >
      <p class="hero-credentials mb-3 text-[0.68rem] tracking-[0.03em] text-[#D0BC8D]">
        Provincial · {{ lawyer.registrations.provincial.value }}
        <span class="mx-2 text-[#A99BB8]">·</span>
        Federal · {{ lawyer.registrations.federal.value }}
      </p>

      <h1
        class="hero-title max-w-[46rem] text-[clamp(2.9rem,5.45vw,5.35rem)] font-normal leading-[0.98] tracking-[-0.075em]"
      >
        Defensa penal con
        <span class="block">claridad y compromiso.</span>
      </h1>
    </div>

    <!-- Mobile composition -->
    <div
      class="relative z-10 row-start-2 flex w-full flex-col justify-center px-[1.15rem] pb-[4vh] pt-[3vh] min-[721px]:hidden"
    >
      <div class="max-w-[27rem]">
        <h1
          class="hero-title max-w-[22rem] text-[clamp(2.8rem,11.5vw,4rem)] font-normal leading-[0.9] tracking-[-0.075em]"
        >
          Defensa penal con
          <span class="block">claridad y compromiso.</span>
        </h1>

        <p
          class="hero-credentials mt-5 text-[0.62rem] tracking-[0.03em] text-[#D0BC8D]"
        >
          Provincial · {{ lawyer.registrations.provincial.value }}
          <span class="mx-2 text-[#A99BB8]">·</span>
          Federal · {{ lawyer.registrations.federal.value }}
        </p>

        <div class="mt-8 max-w-[26rem]">
          <p
            class="hero-description text-[0.82rem] leading-[1.3] text-white/92"
          >
            {{ lawyer.fullName }}, “{{ lawyer.nickname }}”. Asesoramiento y defensa
            penal para personas que necesitan respuestas claras, confidenciales y
            firmes.
          </p>

          <a
            href="#servicios"
            class="hero-cta mt-5 inline-flex gap-[0.65rem] border-b border-[#D0BC8D]/80 pb-[0.3rem] text-[0.8rem] transition-colors duration-200 hover:text-[#D0BC8D] motion-reduce:transition-none"
          >
            Conocer mis servicios
            <span
              class="icon-arrow text-[1rem] leading-[0.75] text-[#B69A63]"
              aria-hidden="true"
            >
              ↗&#xFE0E;
            </span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>