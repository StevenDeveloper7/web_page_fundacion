<template>
  <div class="sm:p-24">
    <FundamentalsAndPrinciples :is-active-translation="isActiveTranslation" />
  </div>
</template>
<script setup>
import { computed, onMounted } from 'vue'
import FundamentalsAndPrinciples from '@/components/modules/FundamentalsAndPrinciples.vue'

defineProps({
  isActiveTranslation: Boolean
})

onMounted(() => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})
// const translation = computed(() => {
//   return props.isActiveTranslation.value
// })
</script>
