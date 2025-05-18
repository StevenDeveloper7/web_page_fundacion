<template>
  <div
    class="text-center p-1 my-6 bg-flc-greenDark h-auto shadow-md shadow-flc-greenDark border-t-2 border-x-2 border-flc-orange"
  >
    <label
      class="w-auto text-center text-lg sm:text-xl font-semibold uppercase text-slate-50 border-b-2 border-flc-slate-50"
    >
      {{ text }}
    </label>
  </div>
</template>
<script setup>
defineProps({
  text: String
})
</script>
