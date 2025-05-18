<template>
  <div
    class="flex flex-col bg-slate-200 w-full h-auto p-4 gap-5 sm:min-h-[430px] min-h-0 max-h-[1200px] justify-center object-cover text-sm sm:text-md"
  >
    <div class="text-justify sm:min-h-[50px] min-h-[0px]">
      <h3>{{ title }}</h3>
    </div>
    <div>
      <video class="rounded-2xl" controls :src="pathVideo">VIDEO</video>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  pathVideo: String
})
</script>
