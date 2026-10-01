<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { lawyer } from '../data/lawyer'

const contact = ref<HTMLElement | null>(null)
let context: gsap.Context | undefined

onMounted(() => {
  if (!contact.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  context = gsap.context(() => {
    const timeline = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: contact.value,
        start: 'top 72%',
        once: true,
      },
    })

    timeline
      .from('.contact-main', { autoAlpha: 0, y: 18, duration: 0.7 })
      .from('.contact-cta', { autoAlpha: 0, y: 14, duration: 0.55 }, '-=0.35')
  }, contact.value)
})

onUnmounted(() => {
  context?.revert()
})
</script>

<template>
  <section
    ref="contact"
    id="contacto"
    class="flex min-h-[112svh] bg-[#EEECE7] px-[max(1.25rem,7vw)] py-[clamp(5rem,7vw,7.5rem)] text-[#11100F] max-[720px]:min-h-0 max-[720px]:px-[1.15rem] max-[720px]:py-[4rem]"
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
        class="mt-5 grid flex-1 grid-cols-[minmax(0,1fr)_minmax(16rem,0.3fr)] items-center gap-[clamp(3rem,7vw,8rem)] border-t border-[#11100F]/15 pt-[clamp(2rem,3.5vw,3.5rem)] max-[800px]:grid-cols-1 max-[800px]:items-start max-[720px]:mt-4 max-[720px]:gap-0 max-[720px]:pt-6"
      >
        <!-- LEFT -->
        <div
          class="flex min-w-0 flex-col justify-between self-stretch max-[720px]:contents"
        >
          <!-- MAIN CONTENT -->
          <div
            class="contact-main flex flex-col justify-center max-[720px]:order-1"
          >
            <h2
              id="contact-title"
              class="max-w-[68rem] text-[clamp(3.8rem,6.5vw,7rem)] font-normal leading-[0.84] tracking-[-0.08em] max-[720px]:max-w-[22rem] max-[720px]:text-[clamp(3.5rem,16vw,5.2rem)] max-[720px]:leading-[0.84]"
            >
              Hablemos
              <br />
              de tu situación<span class="text-[#B69A63]">.</span>
            </h2>

            <p
              class="mt-[clamp(2rem,3.5vw,3.25rem)] max-w-[31rem] text-[clamp(1rem,1.25vw,1.15rem)] leading-[1.55] text-[#2A2724] max-[720px]:mt-6 max-[720px]:max-w-[28rem] max-[720px]:text-[0.94rem] max-[720px]:leading-[1.5]"
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
              class="contact-cta group mt-7 inline-flex w-max items-center gap-6 rounded-full border border-[#75648A] px-[1.15rem] py-3 text-[0.66rem] font-medium tracking-[0.04em] uppercase transition duration-200 hover:-translate-y-px hover:bg-[#DCD4E3] motion-reduce:transition-none max-[720px]:mt-6 max-[720px]:px-4 max-[720px]:py-3.5"
            >
              <span>
                Consultar por WhatsApp
              </span>

              <span
                class="icon-arrow text-[1rem] text-[#75648A] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-px motion-reduce:transition-none"
                aria-hidden="true"
              >
                ↗&#xFE0E;
              </span>
            </a>
          </div>

          <!-- SMALL CONTACT DETAILS -->
          <div
            class="mt-10 flex flex-wrap items-end gap-x-12 gap-y-5 border-t border-[#11100F]/15 pt-4 max-[800px]:mt-12 max-[720px]:order-3 max-[720px]:mt-10 max-[720px]:gap-x-8 max-[720px]:gap-y-6"
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
          class="relative w-full max-[800px]:mx-auto max-[800px]:max-w-[28rem] max-[720px]:order-2 max-[720px]:mt-12 max-[720px]:max-w-[31rem]"
        >
          <div
            class="aspect-[0.72] overflow-hidden bg-[#DDD9D1] max-[720px]:aspect-[1.15]"
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