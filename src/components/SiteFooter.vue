<script setup lang="ts">
import { lawyer } from '../data/lawyer'

const currentYear = new Date().getFullYear()

const credits = [
  {
    name: 'Seim Interactive',
    href: 'https://web.seiminteractive.io/',
    logo: '/Seim.png',
  },
  {
    name: 'ByLoa Agency',
    href: 'https://byloa.agency/',
    logo: '/ByLoa.png',
  },
]
</script>

<template>
  <footer
    class="bg-[#11100F] px-[max(1.15rem,7vw)] py-7 text-[#F7F5F1]"
  >
    <div
      class="mx-auto flex w-full max-w-[96rem] items-center justify-between gap-6 max-[720px]:flex-col max-[720px]:gap-5"
    >
      <p
        class="text-[0.68rem] tracking-[0.01em] text-[#F7F5F1]/78 max-[720px]:text-center"
      >
        © {{ currentYear }} {{ lawyer.fullName }}. Todos los derechos
        reservados.
      </p>

      <div class="flex items-center gap-6">
        <a
          v-for="credit in credits"
          :key="credit.href"
          :href="credit.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="credit.name"
        >
          <img
            :src="credit.logo"
            :alt="credit.name"
            class="h-5.5 w-auto object-contain"
          />
        </a>
      </div>
    </div>
  </footer>
</template>