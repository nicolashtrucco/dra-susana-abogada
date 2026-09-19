import type Lenis from 'lenis'

let lenis: Lenis | undefined

const NAV_OFFSET = -88

export function setLenisInstance(instance?: Lenis) {
  lenis = instance
}

export function scrollToSection(href: string) {
  const section = document.getElementById(href.replace('#', ''))
  if (!section) return

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  if (prefersReducedMotion) {
    const top = section.getBoundingClientRect().top + window.scrollY + NAV_OFFSET
    window.scrollTo({ top, behavior: 'auto' })
    history.replaceState(null, '', href)
    return
  }

  if (lenis) {
    lenis.scrollTo(section, {
      offset: NAV_OFFSET,
      duration: 1.05,
      easing: (progress) => 1 - (1 - progress) ** 3,
    })
  } else {
    const top = section.getBoundingClientRect().top + window.scrollY + NAV_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }

  history.replaceState(null, '', href)
}
