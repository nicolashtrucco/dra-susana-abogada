<script setup lang="ts">
import { ref } from 'vue'

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
</script>

<template>
  <section
    id="servicios"
    class="flex min-h-[112svh] bg-[#000] px-[max(1.25rem,7vw)] py-[clamp(5rem,7vw,7.5rem)] text-[#F7F5F1] max-[720px]:min-h-0 max-[720px]:px-[1.15rem] max-[720px]:py-[5rem]"
    aria-labelledby="services-title"
  >
    <div class="mx-auto w-full max-w-[96rem] flex-1">

      <!-- HEADER -->
      <header
        class="mb-[clamp(3.5rem,5.5vw,5.5rem)] flex items-end justify-between gap-12 max-[800px]:block"
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
            class="text-[clamp(3.8rem,6.5vw,7rem)] font-normal leading-[0.84] tracking-[-0.08em]"
          >
            Servicios<span class="text-[#B69A63]">.</span>
          </h2>
        </div>

        <p
          class="mb-1 max-w-[21rem] text-[0.9rem] leading-[1.55] text-[#EAE7E1]/65 max-[800px]:mt-7 max-[800px]:max-w-[25rem]"
        >
          Asistencia y defensa penal con una intervención profesional,
          estratégica y orientada a cada situación.
        </p>
      </header>

      <!-- CONTENT -->
      <div
        class="grid grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] items-start gap-[clamp(3.5rem,7vw,8rem)] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(15rem,0.4fr)] max-[720px]:grid-cols-1"
      >

        <!-- SERVICES -->
        <ol
          class="m-0 list-none border-t border-[#EAE7E1]/15 p-0"
        >
          <li
            v-for="(service, index) in services"
            :key="service.title"
            class="border-b border-[#EAE7E1]/15"
            @mouseenter="activeService = index"
            @focusin="activeService = index"
          >
            <a
              href="#contacto"
              class="group grid grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] gap-5 py-[1.45rem] text-inherit no-underline transition-opacity duration-300 hover:opacity-70 max-[600px]:grid-cols-[2rem_minmax(0,1fr)_1.25rem] max-[600px]:gap-3 max-[600px]:py-6"
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
                  class="text-[clamp(1.25rem,1.9vw,1.7rem)] font-normal leading-[1.08] tracking-[-0.04em]"
                >
                  {{ service.title }}
                </h3>

                <p
                  class="mt-2.5 max-w-[34rem] text-[0.82rem] leading-[1.5] text-[#EAE7E1]/50"
                >
                  {{ service.description }}
                </p>
              </div>

              <!-- ARROW -->
              <span
                class="pt-0.5 text-[1rem] text-[#B69A63] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </li>
        </ol>

        <!-- STICKY IMAGE -->
        <div class="relative min-w-0 self-stretch">
          <div
            class="sticky top-[10vh] w-full"
          >
            <div
              class="relative aspect-[0.76] w-full overflow-hidden bg-[#191817] max-[720px]:aspect-[16/9]"
            >

              <!-- IMAGE -->
              <img
                :src="services[activeService].image"
                :alt="services[activeService].title"
                class="absolute inset-0 h-full w-full object-cover grayscale"
              />

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
    </div>
  </section>
</template>