<script setup lang="ts">
import { lawyer } from '../data/lawyer'
</script>

<template>
  <a
    :href="lawyer.phone.whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed right-[max(1.15rem,env(safe-area-inset-right))] bottom-[max(1.15rem,env(safe-area-inset-bottom))] z-40 size-14 transition-transform duration-200 hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100 max-[720px]:size-12"
    aria-label="Contactar por WhatsApp"
  >
    <img
      src="/Whatsapp.png"
      alt=""
      class="block size-full object-contain"
    />
  </a>
</template>