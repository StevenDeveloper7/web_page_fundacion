<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Tooltip from './components/base/Tooltip.vue'
import WhatsappButton from './components/base/WhatsappButton.vue'
import FooterSection from './components/modules/FooterSection.vue'

onMounted(() => {
  window.scroll(0, 0)
})

const isActiveTranslation = ref(false)

const activateTraslation = () => {
  isActiveTranslation.value = !isActiveTranslation.value
}
const routerLinkActiveStyles = 'focus:bg-slate-50 focus:text-flc-greenLight'
const routerLinkStyles =
  'rounded-full hover:text-flc-greenLight   hover:bg-slate-50  p-2 cursor-pointer'
const navDropdownLinks =
  'block border-b-2 py-1 font-semibold capitalize  hover:text-flc-orange md:mx-2 cursor-pointer hover:scale-110 my-1'

const focusComponent = (component) => {
  switch (component) {
    case 'about':
      window.scroll(0, 610)
      break

    case 'fundamentals_1':
      window.scroll(0, 2600)
      break

    case 'fundamentals_2':
      window.scroll(0, 3300)
      break

    case 'fundamentals_3':
      window.scroll(0, 3820)
      break

    case 'rating':
      window.scroll(0, 5100)
      break

    case 'collective':
      window.scroll(0, 6240)
      break

    case 'gallery':
      window.scroll(0, 9900)
      break
  }
}
</script>

<template>
  <header class="block sm:fixed right-[20%] z-40">
    <div class="flex justify-center bg-transparent">
      <nav
        class="flex bg-flc-greenDark opacity-90 border-[1px] border-flc-greenLight h-16 w-[100%] sm:w-[820px] sm:my-3 rounded-none sm:rounded-full items-center text-sm sm:text-md text-slate-50 font-semibold p-4 shadow-lg"
      >
        <div class="flex items-center gap-3 p-0 sm:p-3">
          <a href="/">
            <img src="/img/logo.png" class="w-11" />
          </a>

          <!-- Nav dropdown -->
          <div class="flex sm:block hidden">
            <div class="group relative">
              <div class="flex items-center">
                <RouterLink
                  class="menu-hover gap-3 flex px-4"
                  :activeClass="routerLinkActiveStyles"
                  :class="routerLinkStyles"
                  to="/"
                >
                  Fundación Luz De Colombia
                  <i class="fa-solid fa-sort-down mr-1 text-flc-orange items-center"></i>
                </RouterLink>
              </div>

              <div
                class="text-center invisible absolute z-50 flex w-full flex-col bg-flc-greenDark py-3 px-2 text-slate-50 border-l-2 border-t-2 border-flc-orange shadow-lg group-hover:visible"
              >
                <a @click="focusComponent('about')" :class="navDropdownLinks">
                  {{ !isActiveTranslation ? 'Conocenos' : 'About us' }}
                </a>
                <a @click="focusComponent('fundamentals_1')" :class="navDropdownLinks">
                  {{
                    !isActiveTranslation ? 'Fundamentos filosoficos' : 'Philosophical foundations'
                  }}
                </a>
                <a @click="focusComponent('fundamentals_2')" :class="navDropdownLinks">
                  {{
                    !isActiveTranslation
                      ? 'Fundamentos psicopedagógicos'
                      : 'Psychopedagogical foundations'
                  }}
                </a>
                <a @click="focusComponent('fundamentals_3')" :class="navDropdownLinks">
                  {{
                    !isActiveTranslation ? 'Fundametos y principios' : 'Fundamentals and principles'
                  }}
                </a>
                <a @click="focusComponent('rating')" :class="navDropdownLinks">
                  {{
                    !isActiveTranslation
                      ? 'Valoración e intervención'
                      : 'Assessment and intervention'
                  }}
                </a>
                <a @click="focusComponent('collective')" :class="navDropdownLinks">
                  {{ !isActiveTranslation ? 'Colectivo De la Fundación' : 'Foundation Collective' }}
                </a>
                <a @click="focusComponent('gallery')" :class="navDropdownLinks">
                  {{ !isActiveTranslation ? 'Galeria de imagenes' : 'Image Gallery' }}
                </a>
              </div>
            </div>
          </div>

          <RouterLink
            class="sm:block hidden"
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

          <!-- Translate options -->
          <div>
            <Tooltip
              :content="!isActiveTranslation ? 'Translate to English' : 'Traducir a Español'"
            >
              <a
                @click="activateTraslation()"
                class="hover:text-flc-greenLight focus:text-white cursor-pointer py-1 border-b-2 border-flc-orange"
                >{{ isActiveTranslation ? 'Español' : 'English' }}</a
              >
            </Tooltip>
          </div>

          <!-- Whatsapp button -->
          <div class="ml-5">
            <Tooltip
              :content="!isActiveTranslation ? 'Comunicate con nosotros' : 'Contact with us'"
            >
              <a
                href="https://wa.me/573183721534?text=Estoy%20interesado%20en%20comunicarme%20con%20la%20fundacion%20Luz%20de%20Colombia."
                class="bg-[#25d366] text-[22px] rounded-full text-white items-center px-1"
                target="_blank"
              >
                <i class="fa fa-whatsapp"></i
              ></a>
            </Tooltip>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <div class="bg-slate-50 z-50">
    <RouterView :isActiveTranslation="isActiveTranslation" />
  </div>

  <WhatsappButton
    :isActiveTranslation="isActiveTranslation"
    class="fixed bottom-[40px] right-[18px]"
  />

  <FooterSection :is-active-translation="isActiveTranslation" />
</template>
