<template>
  <Tooltip :content="!isActiveTranslation ? 'Comunicate con nosotros' : 'Contact with us'">
    <a
      href="https://wa.me/573183721534?text=Estoy%20interesado%20en%20comunicarme%20con%20la%20fundacion%20Luz%20de%20Colombia."
      class="bg-[#25d366] rounded-full text-white items-center px-2"
      :class="size"
      target="_blank"
    >
      <i class="fa fa-whatsapp"></i
    ></a>
  </Tooltip>
</template>
<script setup>
import Tooltip from './Tooltip.vue'

defineProps({
  size: {
    type: String,
    default: 'text-[35px]'
  },
  isActiveTranslation: Boolean
})
</script>
