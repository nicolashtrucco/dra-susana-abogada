<script setup lang="ts">
import { lawyer } from '../data/lawyer'

const navigationLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Áreas de práctica', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]
</script>

<template>
  <header
    id="inicio"
    class="relative isolate grid min-h-[max(520px,100svh)] grid-rows-[auto_1fr_auto] overflow-hidden bg-[url('/headerImg.jpg')] bg-cover bg-center text-[#F7F5F1] max-[720px]:min-h-[680px] max-[720px]:bg-[position:42%_center]"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-linear-to-r from-black/52 via-black/18 to-black/43"
    />
    <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/47 to-transparent" />

    <nav
      class="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-8 px-6 py-[1.35rem] max-[720px]:grid-cols-[1fr_auto] max-[720px]:px-[1.15rem] max-[720px]:py-[1.15rem]"
      aria-label="Navegación principal"
    >
      <a
        class="w-max text-[1.28rem] font-semibold tracking-[-0.07em]"
        href="#inicio"
        :aria-label="`${lawyer.fullName}, inicio`"
      >
        <span>{{ lawyer.brandName }}</span>
        <sup class="ml-[0.15rem] align-top text-[0.42rem] tracking-normal text-[#B69A63]">®</sup>
      </a>

      <div
        class="flex items-center gap-[1.45rem] text-[0.68rem] text-white/78 max-[720px]:hidden"
      >
        <a
          v-for="link in navigationLinks"
          :key="link.href"
          :href="link.href"
          class="transition-colors duration-200 hover:text-[#A99BB8] motion-reduce:transition-none"
        >
          {{ link.label }}
        </a>
      </div>

      <a
        class="justify-self-end whitespace-nowrap rounded-full bg-[#F7F5F1] px-[1.1rem] py-3 text-[0.66rem] font-medium text-[#11100F] transition duration-200 hover:-translate-y-px hover:bg-[#EAE7E1] motion-reduce:transition-none max-[720px]:px-[0.82rem] max-[720px]:py-[0.68rem] max-[720px]:text-[0.6rem]"
        :href="lawyer.phone.whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contactar por WhatsApp
      </a>
    </nav>

    <div
      class="relative z-10 col-start-1 row-start-2 mt-4 mr-6 mb-10 ml-[50.6vw] w-[min(42vw,31rem)] self-center text-[clamp(0.88rem,1.1vw,1rem)] max-[720px]:col-auto max-[720px]:row-auto max-[720px]:m-[1rem_1.15rem_2.5rem] max-[720px]:w-[calc(100%-2.3rem)] max-[720px]:max-w-[27rem] max-[720px]:self-end"
    >
      <p class="mb-[1.35rem] max-w-[29rem] leading-[1.25]">
        {{ lawyer.fullName }}, “{{ lawyer.nickname }}”. Asesoramiento y defensa penal
        para personas que necesitan respuestas claras, confidenciales y firmes.
      </p>
      <a
        href="#contacto"
        class="inline-flex gap-[0.65rem] border-b border-[#D0BC8D]/80 pb-[0.3rem] text-[0.87rem] transition-colors duration-200 hover:text-[#D0BC8D] motion-reduce:transition-none"
      >
        Conocer mis servicios
        <span class="text-[1rem] leading-[0.75] text-[#B69A63]" aria-hidden="true">↗</span>
      </a>
    </div>

    <div
      class="relative z-10 col-start-1 row-start-3 mb-6 ml-6 w-[min(100%-3rem,48rem)] max-[720px]:m-[0_1.15rem_1.15rem] max-[720px]:w-[calc(100%-2.3rem)]"
    >
      <p class="mb-3 text-[0.68rem] tracking-[0.03em] text-[#D0BC8D]">
        Provincial · {{ lawyer.registrations.provincial.value }}
        <span class="mx-2 text-[#A99BB8]">·</span>
        Federal · {{ lawyer.registrations.federal.value }}
      </p>
      <h1
        class="max-w-[46rem] text-[clamp(2.9rem,5.45vw,5.35rem)] font-normal leading-[0.98] tracking-[-0.075em] max-[720px]:text-[clamp(2.85rem,14vw,4.2rem)]"
      >
        Defensa penal con
        <span class="block">claridad y compromiso.</span>
      </h1>
    </div>
  </header>
</template>
