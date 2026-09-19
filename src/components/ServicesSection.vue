<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'

const services = [
  {
    title: 'Defensa penal',
    description:
      'Representación y defensa técnica en todas las etapas del proceso penal.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Asesoramiento y estrategia legal',
    description:
      'Análisis del caso y definición de una estrategia jurídica acorde a cada situación.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Denuncias y querellas',
    description:
      'Acompañamiento profesional para impulsar o responder acciones penales.',
    image:
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Excarcelaciones y medidas cautelares',
    description:
      'Intervención profesional ante medidas que requieren una respuesta jurídica inmediata.',
    image:
      'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Procedimientos penales',
    description:
      'Asistencia letrada durante investigaciones, audiencias y juicios orales.',
    image:
      'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Urgencias penales',
    description:
      'Atención profesional ante situaciones que requieren intervención inmediata.',
    image:
      'https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=1200&q=85',
  },
]

const activeService = ref(0)
const servicesSection = ref<HTMLElement | null>(null)
let context: gsap.Context | undefined

onMounted(() => {
  if (
    !servicesSection.value ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return

  context = gsap.context(() => {
    gsap.from('.services-heading', {
      autoAlpha: 0,
      y: 18,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: servicesSection.value,
        start: 'top 72%',
        once: true,
      },
    })

    gsap.from('.services-content', {
      autoAlpha: 0,
      y: 16,
      duration: 0.7,
      delay: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: servicesSection.value,
        start: 'top 68%',
        once: true,
      },
    })
  }, servicesSection.value)
})

onUnmounted(() => {
  context?.revert()
})
</script>

<template>
  <section
    ref="servicesSection"
    id="servicios"
    class="flex min-h-[112svh] bg-[#000] px-[max(1.25rem,7vw)] py-[clamp(5rem,7vw,7.5rem)] text-[#F7F5F1] max-[720px]:min-h-0 max-[720px]:px-[1.15rem] max-[720px]:py-[4rem]"
    aria-labelledby="services-title"
  >
    <div class="mx-auto w-full max-w-[96rem] flex-1">
      <!-- HEADER -->
      <header
        class="services-heading mb-[clamp(3.5rem,5.5vw,5.5rem)] flex items-end justify-between gap-12 max-[800px]:block max-[720px]:mb-8"
      >
        <div>
          <p
            class="mb-5 flex items-center gap-3 text-[0.62rem] font-medium tracking-[0.14em] uppercase"
          >
            <span class="text-[#B69A63]">02</span>

            <span class="h-px w-8 bg-[#B69A63]/60" />

            <span class="text-[#A99BB8]">
              Áreas de práctica
            </span>
          </p>

          <h2
            id="services-title"
            class="text-[clamp(3.8rem,6.5vw,7rem)] font-normal leading-[0.84] tracking-[-0.08em] max-[720px]:text-[clamp(3.5rem,16vw,5.2rem)]"
          >
            Servicios<span class="text-[#B69A63]">.</span>
          </h2>
        </div>

        <p
          class="mb-1 max-w-[21rem] text-[0.9rem] leading-[1.55] text-[#EAE7E1]/65 max-[800px]:mt-7 max-[800px]:max-w-[25rem] max-[720px]:mt-5 max-[720px]:max-w-[22rem] max-[720px]:text-[0.82rem]"
        >
          Asistencia y defensa penal con una intervención profesional,
          estratégica y orientada a cada situación.
        </p>
      </header>

      <!-- CONTENT -->
      <div
        class="services-content grid grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] items-start gap-[clamp(3.5rem,7vw,8rem)] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(15rem,0.4fr)] max-[720px]:grid-cols-1 max-[720px]:gap-0"
      >
        <!-- SERVICES -->
        <ol
          class="m-0 list-none border-t border-[#EAE7E1]/15 p-0 max-[720px]:order-2"
        >
          <li
            v-for="(service, index) in services"
            :key="service.title"
            class="border-b border-[#EAE7E1]/15"
            @mouseenter="activeService = index"
            @focusin="activeService = index"
          >
            <button
              type="button"
              class="group grid w-full cursor-default grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] gap-5 border-0 bg-transparent py-[1.45rem] text-left text-inherit transition-opacity duration-300 hover:opacity-70 max-[600px]:grid-cols-[2rem_minmax(0,1fr)_1.25rem] max-[600px]:gap-3 max-[600px]:py-6"
              @click="activeService = index"
            >
              <!-- NUMBER -->
              <span
                class="pt-1 text-[0.6rem] font-medium tracking-[0.08em] text-[#B69A63]"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <!-- CONTENT -->
              <div class="min-w-0">
                <h3
                  class="text-[clamp(1.25rem,1.9vw,1.7rem)] font-normal leading-[1.08] tracking-[-0.04em] max-[720px]:text-[1.2rem]"
                >
                  {{ service.title }}
                </h3>

                <p
                  class="mt-2.5 max-w-[34rem] text-[0.82rem] leading-[1.5] text-[#EAE7E1]/50 max-[720px]:text-[0.78rem]"
                >
                  {{ service.description }}
                </p>
              </div>

              <!-- ARROW -->
              <span
                class="icon-arrow pt-0.5 text-[1rem] text-[#B69A63] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                ↗&#xFE0E;
              </span>
            </button>
          </li>
        </ol>

        <!-- IMAGE -->
        <div
          class="sticky top-[10vh] min-w-0 self-start max-[720px]:static max-[720px]:order-1"
        >
            <div
              class="relative aspect-[0.76] w-full overflow-hidden bg-[#191817] max-[720px]:aspect-[1.18] max-[600px]:aspect-[1.15]"
            >
              <Transition
                enter-active-class="transition-[opacity,transform] duration-500 ease-out"
                enter-from-class="scale-[1.015] opacity-0"
                enter-to-class="scale-100 opacity-100"
                leave-active-class="absolute inset-0 transition-opacity duration-400 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <img
                  :key="activeService"
                  :src="services[activeService].image"
                  :alt="services[activeService].title"
                  class="absolute inset-0 h-full w-full object-cover grayscale"
                />
              </Transition>

              <!-- OVERLAY -->
              <div
                class="pointer-events-none absolute inset-0 bg-linear-to-t from-[#11100F]/70 via-transparent to-[#11100F]/10"
                aria-hidden="true"
              />

              <!-- IMAGE LABEL -->
              <div
                class="absolute inset-x-0 bottom-0 border-t border-[#EAE7E1]/15 p-4"
              >
                <span
                  class="text-[0.58rem] font-medium tracking-[0.12em] text-[#EAE7E1]/70 uppercase"
                >
                  {{ services[activeService].title }}
                </span>
              </div>
            </div>

            <!-- IMAGE META -->
            <div
              class="mt-3 flex items-center justify-between border-t border-[#B69A63]/35 pt-2.5 text-[0.57rem] font-medium tracking-[0.12em] text-[#A99BB8]/75 uppercase"
            >
              <span>
                Áreas de práctica
              </span>

              <span>
                {{ String(activeService + 1).padStart(2, '0') }}
                /
                {{ String(services.length).padStart(2, '0') }}
              </span>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>