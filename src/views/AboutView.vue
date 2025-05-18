<template>
  <div class="sm:p-24">
    <ContactInformation :isActiveTranslation="isActiveTranslation" />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import ContactInformation from '@/components/modules/ContactInformation.vue'

defineProps({
  isActiveTranslation: Boolean
})

onMounted(() => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})
</script>
