<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { lawyer } from '../data/lawyer'
import { scrollToSection } from '../utils/smoothScroll'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeHref = ref('#inicio')

const navigationLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Áreas de práctica', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

function closeMenu() {
  isMenuOpen.value = false
}

function setActiveHref(href: string) {
  activeHref.value = href
}

function onNavClick(event: Event, href: string) {
  event.preventDefault()
  setActiveHref(href)
  closeMenu()
  requestAnimationFrame(() => {
    scrollToSection(href)
  })
}

function updateScrollState() {
  isScrolled.value = window.scrollY > 0

  const viewportPosition = window.scrollY + window.innerHeight * 0.35

  let currentHref = navigationLinks[0].href

  for (const link of navigationLinks) {
    const section = document.getElementById(link.href.slice(1))

    if (!section) continue

    if (section.offsetTop <= viewportPosition) {
      currentHref = link.href
    }
  }

  activeHref.value = currentHref
}

onMounted(() => {
  updateScrollState()

  window.addEventListener('scroll', updateScrollState, {
    passive: true,
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-8 border-b px-6 py-[1.35rem] text-[#F7F5F1] transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none max-[940px]:grid-cols-[1fr_auto] max-[940px]:px-[max(1.5rem,5vw)] max-[720px]:gap-3 max-[720px]:px-[1.15rem] max-[720px]:py-[1.15rem]"
    :class="
      isScrolled
        ? 'border-none bg-[#11100F]/80 backdrop-blur-md'
        : 'border-transparent bg-transparent'
    "
    aria-label="Navegación principal"
  >
    <!-- BRAND -->
    <a
      class="w-max text-[1.28rem] font-semibold tracking-[-0.07em] text-[#F7F5F1]"
      href="#inicio"
      :aria-label="`${lawyer.fullName}, inicio`"
      @click="onNavClick($event, '#inicio')"
    >
      <span>{{ lawyer.brandName }}</span>
    </a>

    <!-- DESKTOP NAVIGATION -->
    <div
      class="flex items-center gap-[1.45rem] text-[0.8rem] max-[940px]:hidden"
    >
      <a
        v-for="link in navigationLinks"
        :key="link.href"
        :href="link.href"
        :aria-current="activeHref === link.href ? 'page' : undefined"
        class="transition-colors duration-200 motion-reduce:transition-none"
        :class="
          activeHref === link.href
            ? 'text-[#A99BB8]'
            : 'text-[#F7F5F1] hover:text-[#A99BB8]'
        "
        @click="onNavClick($event, link.href)"
      >
        {{ link.label }}
      </a>
    </div>

    <!-- DESKTOP WHATSAPP -->
    <a
      :href="lawyer.phone.whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="group inline-flex min-h-11 items-center gap-5 justify-self-end whitespace-nowrap rounded-full border border-[#F7F5F1]/80 bg-transparent px-[1.1rem] py-3 text-[0.8rem] font-medium tracking-[0.02em] text-[#F7F5F1] transition duration-200 hover:-translate-y-px hover:bg-[#F7F5F1] hover:text-[#11100F] motion-reduce:transition-none max-[940px]:hidden"
    >
      <span>Consultar</span>
    </a>

    <!-- MOBILE MENU BUTTON -->
    <button
      type="button"
      class="hidden size-11 items-center justify-center justify-self-end border border-[#F7F5F1]/80 text-[#F7F5F1] transition-colors duration-200 hover:border-[#B69A63] hover:text-[#D0BC8D] motion-reduce:transition-none max-[940px]:inline-flex"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-navigation"
      aria-label="Abrir menú de navegación"
      @click="isMenuOpen = true"
    >
      <span
        class="flex w-4 flex-col gap-[0.28rem]"
        aria-hidden="true"
      >
        <span class="h-px w-full bg-current" />
        <span class="h-px w-full bg-current" />
      </span>
    </button>

    <!-- MOBILE NAVIGATION -->
    <Transition
      enter-active-class="transition-[opacity,transform] duration-200 ease-out"
      enter-from-class="translate-y-2 opacity-0"
      leave-active-class="transition-[opacity,transform] duration-150 ease-in"
      leave-to-class="translate-y-2 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-navigation"
        class="fixed inset-0 z-30 flex min-h-[100svh] flex-col bg-[#11100F]/98 px-[1.15rem] py-[1.15rem] text-[#F7F5F1]"
      >
      <!-- MOBILE HEADER -->
      <div class="flex items-center justify-between">
        <span
          class="text-[1.28rem] font-semibold tracking-[-0.07em]"
        >
          {{ lawyer.brandName }}
        </span>

        <button
          type="button"
          class="inline-flex size-11 items-center justify-center border border-[#F7F5F1]/80 text-[#F7F5F1] transition-colors duration-200 hover:border-[#B69A63] hover:text-[#D0BC8D] motion-reduce:transition-none"
          aria-label="Cerrar menú de navegación"
          @click="closeMenu"
        >
          <span
            class="text-xl leading-none"
            aria-hidden="true"
          >
            ×
          </span>
        </button>
      </div>

      <!-- MOBILE LINKS -->
      <div class="my-auto flex flex-col gap-6">
        <a
          v-for="link in navigationLinks"
          :key="link.href"
          :href="link.href"
          :aria-current="activeHref === link.href ? 'page' : undefined"
          class="w-max text-[clamp(2.5rem,11vw,4.5rem)] leading-[0.9] tracking-[-0.07em] transition-colors duration-200 motion-reduce:transition-none"
          :class="
            activeHref === link.href
              ? 'text-[#A99BB8]'
              : 'text-[#F7F5F1]/78 hover:text-[#A99BB8]'
          "
          @click="onNavClick($event, link.href)"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- MOBILE WHATSAPP -->
        <a
          :href="lawyer.phone.whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-12 w-max items-center rounded-full border border-[#F7F5F1]/80 px-5 text-[0.76rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:bg-[#F7F5F1] hover:text-[#11100F] motion-reduce:transition-none"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </Transition>
  </nav>
</template>