<template>
  <div
    class="flex sm:flex-row flex-col justify-between text-md bg-flc-greenDark px-4 sm:px-12 sm:py-6 text-flc-orange gap-6 border-t-[10px] border-flc-yellow"
  >
    <!-- Foundation description  -->
    <div class="flex flex-col w-full sm:w-[40%] gap-3">
      <div class="flex gap-3 items-center">
        <img src="/img/logo.png" class="w-[120px] text-center" />
        <div class="flex flex-col gap-2">
          <h1 class="font-semibold my-1 text-xl text-center sm:text-left">
            {{ !isActiveTranslation ? 'Fundación Luz de Colombia ' : 'Luz de Colombia Foundation' }}
          </h1>
          <p class="text-justify text-white sm:text-md text-sm">
            {{
              !isActiveTranslation
                ? 'Entidad sin ánimo de lucro, independiente de toda filiación política, de carácter benéfico-asistencial, que atiende a poblaciones de todas las condiciones sociales, niños, adolescentes y jóvenes.'
                : 'Non-profit entity, independent of any political affiliation, of a charitable and welfare nature, which serves populations of all social conditions, children, adolescents and young people.'
            }}
          </p>
        </div>
      </div>
    </div>

    <!-- Contacet section -->
    <div
      class="flex flex-col gap-2 m-1 text-center sm:text-left border-t-2 border-slate-50 sm:border-0"
    >
      <h1 class="my-1 text-xl font-semibold text-center">! CONTÁCTANOS ¡</h1>
      <div class="text-white gap-2 flex flex-col items-center">
        <label class="flex gap-4"
          ><strong> <i class="fas fa-phone-alt"> </i> </strong>3183721534</label
        >
        <label class="flex gap-4"
          ><strong><i class="fas fa-envelope"> </i> </strong
          >gustavohernandez@fundacionluzdecolombia.com.co</label
        >
        <label class="flex gap-4"
          ><strong><i class="fas fa-envelope"> </i> </strong
          >directorgeneral@fundacionluzdecolombia.com.co</label
        >
        <label class="flex gap-4"
          ><strong><i class="fa fa-map-marker-alt"> </i> </strong>Palmira - Valle - Carrera 15 #
          35-64</label
        >
      </div>
    </div>

    <!-- Routes section -->
    <div
      class="flex py-5 flex-col gap-1 justify-center text-center sm:text-left font-semibold border-t-2 border-slate-50 sm:border-0"
    >
      <RouterLink :activeClass="routerLinkActiveStyles" :class="routerLinkStyles" to="/">
        <i class="fa-solid fa-house-chimney mr-1 text-flc-orange"></i>

        {{ !isActiveTranslation ? 'Pagina principal' : 'Home page' }}
      </RouterLink>
      <RouterLink
        :activeClass="routerLinkActiveStyles"
        :class="routerLinkStyles"
        to="/fundamentals"
      >
        <i class="fa-solid fa-book mr-1 text-flc-orange"></i>
        {{ !isActiveTranslation ? 'Fundamentos y principios' : 'Fundamentals and principles' }}
      </RouterLink>
      <RouterLink :activeClass="routerLinkActiveStyles" :class="routerLinkStyles" to="/about">
        <i class="fa-solid fa-comment mr-1 text-flc-orange"></i>
        {{ !isActiveTranslation ? 'Contáctanos' : 'Contact us' }}
      </RouterLink>
    </div>
  </div>
  <div
    class="text-xs font-semibold text-white border-t-2 border-b-2 border-white w-auto text-center bg-flc-greenLight"
  >
    Copyright © 2024 Todos los derechos reservados | Fundación Luz de Colombia | Desarrollado por
    Steven Manyoma Rosero
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  isActiveTranslation: Boolean
})

const routerLinkActiveStyles = 'focus:bg-slate-50 focus:text-flc-greenLight'
const routerLinkStyles = 'rounded-full hover:text-flc-greenLight   hover:bg-slate-50  p-2'
</script>
