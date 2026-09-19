<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { lawyer } from '../data/lawyer'

const about = ref<HTMLElement | null>(null)
let context: gsap.Context | undefined

onMounted(() => {
  if (!about.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  context = gsap.context(() => {
    gsap.from('.about-image', {
      autoAlpha: 0,
      y: 20,
      scale: 1.015,
      duration: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: about.value,
        start: 'top 72%',
        once: true,
      },
    })

    gsap.from('.about-content', {
      autoAlpha: 0,
      y: 18,
      duration: 0.7,
      delay: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: about.value,
        start: 'top 72%',
        once: true,
      },
    })
  }, about.value)
})

onUnmounted(() => {
  context?.revert()
})
</script>

<template>
  <section
    ref="about"
    id="perfil"
    class="relative flex min-h-[112svh] bg-[#EEECE7] px-[max(1.25rem,7vw)] py-[clamp(5rem,7vw,7.5rem)] text-[#11100F] max-[720px]:min-h-0 max-[720px]:px-[1.15rem] max-[720px]:py-[4rem]"
    aria-labelledby="about-title"
  >
    <div
      class="mx-auto grid w-full max-w-[96rem] flex-1 grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] items-center gap-[clamp(5rem,10vw,11rem)] max-[900px]:gap-[clamp(3rem,7vw,5rem)] max-[720px]:grid-cols-1 max-[720px]:gap-0"
    >
      <!-- IMAGE -->
      <div class="about-image relative min-w-0 max-[720px]:order-1">
        <div
          class="relative aspect-[0.76] w-full max-w-[36rem] overflow-hidden bg-[#E1DED7] max-[720px]:mx-auto max-[720px]:max-w-[31rem]"
        >
          <img
            src="/abogada.jpeg"
            :alt="`Retrato de ${lawyer.fullName}, abogada penalista`"
            class="block size-full object-cover object-top"
          />
        </div>

        <div
          class="mt-4 flex max-w-[36rem] items-center justify-between border-t border-[#B69A63]/45 pt-3 text-[0.55rem] font-medium tracking-[0.12em] text-[#75648A] uppercase max-[720px]:mt-3"
        >
          <span>Derecho Penal</span>
          <span>Rosario · Argentina</span>
        </div>
      </div>

      <!-- CONTENT -->
      <div
        class="about-content min-w-0 max-w-[38rem] max-[720px]:order-2 max-[720px]:mt-12"
      >
        <!-- EYEBROW -->
        <div
          class="mb-[clamp(2.5rem,5vw,4.5rem)] flex items-center gap-3 max-[720px]:mb-7"
        >
          <span
            class="text-[0.6rem] font-medium tracking-[0.12em] text-[#B69A63]"
          >
            01
          </span>

          <span class="h-px w-8 bg-[#B69A63]/55" />

          <span
            class="text-[0.6rem] font-medium tracking-[0.12em] text-[#75648A] uppercase"
          >
            Perfil profesional
          </span>
        </div>

        <!-- NAME -->
        <h2
          id="about-title"
          class="max-w-[34rem] text-[clamp(3.8rem,6.5vw,7rem)] font-normal leading-[0.84] tracking-[-0.08em] max-[720px]:max-w-[20rem] max-[720px]:break-words max-[720px]:text-[clamp(3.5rem,16vw,5.2rem)] max-[720px]:leading-[0.84]"
        >
          {{ lawyer.firstName }}
          <span class="text-[#11100F]">{{ lawyer.lastName }}.</span>
        </h2>

        <!-- INTRO -->
        <div
          class="mt-[clamp(2.75rem,5vw,4.5rem)] max-w-[34rem] text-[clamp(1.05rem,1.35vw,1.2rem)] leading-[1.55] text-[#3D3935] max-[720px]:mt-7 max-[720px]:text-[0.96rem] max-[720px]:leading-[1.5]"
        >
          <p>
            Abogada especializada en Derecho Penal, con más de 25 años de
            ejercicio profesional. Desde 1996 desarrolla su actividad en la
            defensa penal, interviniendo en procesos judiciales tanto
            provinciales como federales.
          </p>

          <p class="mt-6 max-[720px]:mt-5">
            Su trayectoria comprende la defensa técnica en distintas etapas
            del proceso penal, incluyendo investigaciones, audiencias y
            procedimientos ante diversos tribunales.
          </p>
        </div>

        <!-- PROFESSIONAL APPROACH -->
        <div
          class="mt-[clamp(2.75rem,5vw,4rem)] max-w-[34rem] border-l border-[#B69A63] pl-5 max-[720px]:mt-7 max-[720px]:pl-4"
        >
          <p
            class="text-[0.67rem] font-medium tracking-[0.1em] text-[#75648A] uppercase"
          >
            Práctica profesional
          </p>

          <p
            class="mt-2 text-[0.92rem] leading-[1.5] text-[#55514B] max-[720px]:text-[0.86rem]"
          >
            Análisis riguroso de cada caso, definición de estrategias jurídicas
            y protección de los derechos y garantías de sus representados.
          </p>
        </div>

        <!-- CREDENTIALS -->
        <div
          class="mt-[clamp(3rem,6vw,5rem)] grid max-w-[34rem] grid-cols-2 border-y border-[#B69A63]/40 max-[720px]:mt-8"
        >
          <div class="py-5 pr-6 max-[720px]:py-4 max-[720px]:pr-4">
            <p
              class="text-[0.59rem] font-medium tracking-[0.1em] text-[#75648A] uppercase"
            >
              Especialización
            </p>

            <p class="mt-2 text-[0.9rem] font-medium max-[720px]:text-[0.82rem]">
              {{ lawyer.specialty }}
            </p>
          </div>

          <div
            class="border-l border-[#B69A63]/40 py-5 pl-6 max-[720px]:py-4 max-[720px]:pl-4"
          >
            <p
              class="text-[0.59rem] font-medium tracking-[0.1em] text-[#75648A] uppercase"
            >
              Trayectoria
            </p>

            <p class="mt-2 text-[0.9rem] font-medium max-[720px]:text-[0.82rem]">
              Desde 1996
            </p>
          </div>

          <div
            class="border-t border-[#B69A63]/40 py-5 pr-6 max-[720px]:py-4 max-[720px]:pr-4"
          >
            <p
              class="text-[0.59rem] font-medium tracking-[0.1em] text-[#75648A] uppercase"
            >
              {{ lawyer.registrations.provincial.label }}
            </p>

            <p class="mt-2 text-[0.9rem] font-medium max-[720px]:text-[0.82rem]">
              {{ lawyer.registrations.provincial.value }}
            </p>
          </div>

          <div
            class="border-l border-t border-[#B69A63]/40 py-5 pl-6 max-[720px]:py-4 max-[720px]:pl-4"
          >
            <p
              class="text-[0.59rem] font-medium tracking-[0.1em] text-[#75648A] uppercase"
            >
              {{ lawyer.registrations.federal.label }}
            </p>

            <p class="mt-2 text-[0.9rem] font-medium max-[720px]:text-[0.82rem]">
              {{ lawyer.registrations.federal.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>