<template>
  <div>
    <h1
      class="text-flc-orange my-2 text-center text-lg sm:text-xl font-semibold border-b-2 border-flc-greenDark p-1"
    >
      {{ text }}
    </h1>
  </div>
</template>
<script setup>
defineProps({
  text: String
})
</script>
