<template>
  <div class="items-center shadow-md shadow-flc-orange rounded-2xl w-auto m-1">
    <img :class="size" class="rounded-lg object-cover" :src="imagePath" />
  </div>
</template>
<script setup>
const props = defineProps({
  imagePath: String,
  width: String,
  height: String
})

const size = props.width + ' ' + props.height
</script>
