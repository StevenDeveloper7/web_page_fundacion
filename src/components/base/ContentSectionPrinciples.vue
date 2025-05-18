<template>
  <div class="flex flex-col gap-2 my-2">
    <div class="flex gap-3 ml-7 items-center">
      <i class="fas fa-play"></i>
      <strong>{{ title }} </strong>
    </div>
    <p>
      {{ description }}
    </p>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  description: String
})
</script>
