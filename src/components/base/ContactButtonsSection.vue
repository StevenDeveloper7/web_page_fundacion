<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <div
      v-for="contactButton in contactButtons"
      :key="contactButton.id"
      class="flex items-center text-sm sm:text-md gap-3 bg-flc-greenDark border-2 border-flc-yellow text-slate-50 p-2 w-auto"
    >
      <i class="text-white" :class="contactButton.icon"></i>
      <label>{{ contactButton.text }}</label>
    </div>
  </div>
</template>
<script setup>
const contactButtons = [
  {
    id: 1,
    icon: 'fas fa-phone-alt',
    text: '318-3721534'
  },
  {
    id: 2,
    icon: 'far fa-envelope',
    text: 'gustavohernandez@fundacionluzdecolombia.com.co'
  },
  {
    id: 3,
    icon: 'fas fa-map-marker-alt',
    text: 'Palmira - Carrera 15 # 35-64'
  },
  {
    id: 4,
    icon: 'fas fa-globe',
    text: 'www.fundacionluzdecolombia.com'
  }
]
</script>
