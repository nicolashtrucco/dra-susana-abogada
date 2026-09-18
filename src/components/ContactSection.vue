<script setup lang="ts">
import { lawyer } from '../data/lawyer'
</script>

<template>
  <section
    id="contacto"
    class="flex min-h-[112svh] bg-[#EEECE7] px-[max(1.25rem,7vw)] py-[clamp(5rem,7vw,7.5rem)] text-[#11100F] max-[720px]:min-h-0 max-[720px]:px-[1.15rem] max-[720px]:py-[5rem]"
    aria-labelledby="contact-title"
  >
    <div
      class="mx-auto flex w-full min-h-full max-w-[96rem] flex-1 flex-col"
    >
      <!-- LABEL -->
      <div
        class="flex items-center gap-3 text-[0.62rem] font-medium tracking-[0.14em] uppercase"
      >
        <span class="text-[#B69A63]">03</span>

        <span class="h-px w-8 bg-[#B69A63]/60" />

        <span class="text-[#75648A]">
          Contacto
        </span>
      </div>

      <!-- CONTACT COMPOSITION -->
      <div
        class="mt-5 grid flex-1 grid-cols-[minmax(0,1fr)_minmax(16rem,0.3fr)] items-center gap-[clamp(3rem,7vw,8rem)] border-t border-[#11100F]/15 pt-[clamp(2rem,3.5vw,3.5rem)] max-[800px]:grid-cols-1 max-[800px]:items-start"
      >
        <!-- LEFT -->
        <div class="flex min-w-0 flex-col justify-between self-stretch">
          <div class="flex flex-col justify-center">
            <h2
              id="contact-title"
              class="max-w-[68rem] text-[clamp(3.8rem,6.5vw,7rem)] font-normal leading-[0.84] tracking-[-0.08em]"
            >
              Hablemos
              <br />
              de tu situación<span class="text-[#B69A63]">.</span>
            </h2>

            <p
              class="mt-[clamp(2rem,3.5vw,3.25rem)] max-w-[31rem] text-[clamp(1rem,1.25vw,1.15rem)] leading-[1.55] text-[#3D3935]"
            >
              Si necesitás asesoramiento o defensa penal,
              podés comunicarte directamente para conversar
              sobre tu situación con la confidencialidad que
              requiere.
            </p>

            <a
              :href="lawyer.phone.whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group mt-7 inline-flex w-max items-center gap-6 rounded-full border border-[#75648A] px-[1.15rem] py-3 text-[0.66rem] font-medium tracking-[0.04em] uppercase transition duration-200 hover:-translate-y-px hover:bg-[#DCD4E3] motion-reduce:transition-none"
            >
              <span>
                Consultar por WhatsApp
              </span>

              <span
                class="text-[1rem] text-[#75648A] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-px motion-reduce:transition-none"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>

          <!-- SMALL CONTACT DETAILS -->
          <div
            class="mt-10 flex flex-wrap items-end gap-x-12 gap-y-5 border-t border-[#11100F]/15 pt-4 max-[800px]:mt-12"
          >
            <div>
              <p
                class="text-[0.58rem] font-medium tracking-[0.12em] text-[#75648A] uppercase"
              >
                WhatsApp
              </p>

              <a
                :href="lawyer.phone.whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1.5 block text-[0.85rem] transition-colors duration-200 hover:text-[#75648A]"
              >
                {{ lawyer.phone.display }}
              </a>
            </div>

            <div>
              <p
                class="text-[0.58rem] font-medium tracking-[0.12em] text-[#75648A] uppercase"
              >
                Matrícula
              </p>

              <p class="mt-1.5 text-[0.85rem]">
                {{ lawyer.registrations.provincial.value }}
              </p>
            </div>

            <div>
              <p
                class="text-[0.58rem] font-medium tracking-[0.12em] text-[#75648A] uppercase"
              >
                Ubicación
              </p>

              <p class="mt-1.5 text-[0.85rem]">
                Rosario · Argentina
              </p>
            </div>
          </div>
        </div>

        <!-- IMAGE -->
        <div
          class="relative w-full max-[800px]:mx-auto max-[800px]:max-w-[28rem]"
        >
          <div
            class="aspect-[0.72] overflow-hidden bg-[#DDD9D1]"
          >
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=85"
              alt="Biblioteca jurídica"
              class="block size-full object-cover grayscale"
            />
          </div>

          <div
            class="mt-3 flex items-center justify-between border-t border-[#B69A63]/40 pt-2.5"
          >
            <span
              class="text-[0.57rem] font-medium tracking-[0.12em] text-[#75648A] uppercase"
            >
              Derecho Penal
            </span>

            <span
              class="text-[0.57rem] font-medium tracking-[0.12em] text-[#55514B] uppercase"
            >
              T° 92 · F° 77
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>