<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { lawyer } from '../data/lawyer'
import { scrollToSection, setLenisLocked } from '../utils/smoothScroll'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeHref = ref('#inicio')
const mobileMenu = ref<HTMLElement | null>(null)

const navigationLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Áreas de práctica', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

let menuContext: gsap.Context | undefined
let menuTimeline: gsap.core.Timeline | undefined

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function setMenuScrollLock(locked: boolean) {
  document.body.style.overflow = locked ? 'hidden' : ''
  setLenisLocked(locked)
}

function playMenu(open: boolean) {
  if (!mobileMenu.value) return

  if (!menuTimeline || prefersReducedMotion()) {
    gsap.set(mobileMenu.value, { autoAlpha: open ? 1 : 0 })
    gsap.set('.mobile-nav-item', { autoAlpha: open ? 1 : 0, y: 0 })
    return
  }

  menuTimeline.timeScale(open ? 1 : 1.2)

  if (open) {
    menuTimeline.play()
    return
  }

  menuTimeline.reverse()
}

function openMenu() {
  isMenuOpen.value = true
  setMenuScrollLock(true)
  playMenu(true)
}

function closeMenu() {
  if (!isMenuOpen.value) return

  isMenuOpen.value = false
  setMenuScrollLock(false)
  playMenu(false)
}

function toggleMenu() {
  if (isMenuOpen.value) {
    closeMenu()
    return
  }

  openMenu()
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

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

function onViewportChange(event: MediaQueryListEvent) {
  if (event.matches) closeMenu()
}

const desktopViewport = window.matchMedia('(min-width: 941px)')

onMounted(() => {
  updateScrollState()

  window.addEventListener('scroll', updateScrollState, {
    passive: true,
  })
  window.addEventListener('keydown', onKeydown)
  desktopViewport.addEventListener('change', onViewportChange)

  if (!mobileMenu.value) return

  menuContext = gsap.context(() => {
    gsap.set(mobileMenu.value, { autoAlpha: 0 })
    gsap.set('.mobile-nav-item', { autoAlpha: 0, y: 18 })

    menuTimeline = gsap.timeline({
      paused: true,
      defaults: { ease: 'power2.out' },
    })

    menuTimeline
      .to(mobileMenu.value, { autoAlpha: 1, duration: 0.42 })
      .to(
        '.mobile-nav-item',
        { autoAlpha: 1, y: 0, duration: 0.58, stagger: 0.08 },
        '-=0.2',
      )
  }, mobileMenu.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
  window.removeEventListener('keydown', onKeydown)
  desktopViewport.removeEventListener('change', onViewportChange)
  setMenuScrollLock(false)
  menuContext?.revert()
})
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-8 border-b px-6 py-[1.35rem] text-[#F7F5F1] transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none max-[940px]:grid-cols-[1fr_auto] max-[940px]:px-[max(1.5rem,5vw)] max-[720px]:gap-3 max-[720px]:px-[1.15rem] max-[720px]:py-[1.15rem]"
    :class="
      isMenuOpen
        ? 'border-transparent bg-[#11100F]'
        : isScrolled
          ? 'border-none bg-[#11100F]/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
    "
    aria-label="Navegación principal"
  >
    <!-- BRAND -->
    <a
      class="relative z-20 w-max text-[1.28rem] font-semibold tracking-[-0.07em] text-[#F7F5F1]"
      href="#inicio"
      :aria-label="`${lawyer.fullName}, inicio`"
      @click="onNavClick($event, '#inicio')"
    >
      <span>{{ lawyer.brandName }}</span>
    </a>

    <!-- DESKTOP NAVIGATION -->
    <div
      class="relative z-20 flex items-center gap-[1.45rem] text-[0.8rem] max-[940px]:hidden"
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
      class="group relative z-20 inline-flex min-h-11 items-center gap-5 justify-self-end whitespace-nowrap rounded-full border border-[#F7F5F1]/80 bg-transparent px-[1.1rem] py-3 text-[0.8rem] font-medium tracking-[0.02em] text-[#F7F5F1] transition duration-200 hover:-translate-y-px hover:bg-[#F7F5F1] hover:text-[#11100F] motion-reduce:transition-none max-[940px]:hidden"
    >
      <span>Consultar</span>
    </a>

    <!-- MOBILE MENU BUTTON -->
    <button
      type="button"
      class="relative z-20 hidden size-11 items-center justify-center justify-self-end border border-[#F7F5F1]/80 text-[#F7F5F1] transition-colors duration-200 hover:border-[#B69A63] hover:text-[#D0BC8D] motion-reduce:transition-none max-[940px]:inline-flex"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-navigation"
      :aria-label="isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
      @click="toggleMenu"
    >
      <span
        class="relative h-3 w-4"
        aria-hidden="true"
      >
        <span
          class="absolute top-0 left-0 h-px w-full origin-center bg-current transition-transform duration-300 ease-out motion-reduce:transition-none"
          :class="isMenuOpen ? 'translate-y-[5.5px] rotate-45' : ''"
        />
        <span
          class="absolute bottom-0 left-0 h-px w-full origin-center bg-current transition-transform duration-300 ease-out motion-reduce:transition-none"
          :class="isMenuOpen ? 'translate-y-[-5.5px] -rotate-45' : ''"
        />
      </span>
    </button>

    <!-- MOBILE NAVIGATION -->
    <div
      id="mobile-navigation"
      ref="mobileMenu"
      class="fixed inset-0 z-10 hidden min-h-svh flex-col bg-[#11100F] px-[1.15rem] pt-20 pb-[1.15rem] text-[#F7F5F1] opacity-0 max-[940px]:flex"
      :class="isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'"
      :aria-hidden="!isMenuOpen"
      :inert="!isMenuOpen"
    >
      <!-- MOBILE LINKS -->
      <div class="my-auto flex flex-col gap-6">
        <a
          v-for="link in navigationLinks"
          :key="link.href"
          :href="link.href"
          :aria-current="activeHref === link.href ? 'page' : undefined"
          class="mobile-nav-item w-max text-[clamp(2.5rem,11vw,4.5rem)] leading-[0.9] tracking-[-0.07em] transition-colors duration-200 motion-reduce:transition-none"
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
        class="mobile-nav-item inline-flex min-h-12 w-max items-center rounded-full border border-[#F7F5F1]/80 px-5 text-[0.76rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:bg-[#F7F5F1] hover:text-[#11100F] motion-reduce:transition-none"
      >
        Contactar por WhatsApp
      </a>
    </div>
  </nav>
</template>
