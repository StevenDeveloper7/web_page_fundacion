<template>
  <div class="flex flex-col gap-3">
    <div v-for="point in points" :key="point.id" class="items-center flex gap-4">
      <i class="fas fa-right-to-bracket text-2xl text-flc-greenLight"></i>
      <label>{{ point.text }}</label>
    </div>
  </div>
</template>
<script setup>
defineProps({
  points: Array
})
</script>
