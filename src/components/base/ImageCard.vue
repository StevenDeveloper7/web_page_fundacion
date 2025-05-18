<template>
  <div
    class="items-center drop-shadow-lg bg-flc-greenDark rounded-lg border-[5px] border-flc-orange flex flex-col p-2 gap-2 w-auto m-4"
  >
    <img :class="size" class="rounded-lg object-cover" :src="imagePath" />
    <p class="text-sm text-white italic py-1 border-t-2 border-white w-auto">{{ description }}</p>
  </div>
</template>
<script setup>
defineProps({
  imagePath: String,
  description: String,
  size: {
    type: String,
    default: 'w-auto'
  }
})
</script>
