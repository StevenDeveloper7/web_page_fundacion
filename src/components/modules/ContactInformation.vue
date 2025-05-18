<template>
  <div class="flex sm:flex-row flex-col gap-8 text-flc-greenDark">
    <!-- Map to desktop -->

    <iframe
      class="rounded-xl sm:block hidden"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.93014607954!2d-76.30523970801404!3d3.5337037311199775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a04c469792de1%3A0xf028ae60ced7d647!2sCra.%2015%20%2335-64%2C%20Palmira%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1710982858090!5m2!1ses!2sco"
      width="700"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <!-- Map to mobile -->
    <div class="block sm:hidden p-3 items-center">
      <iframe
        class="rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.93014607954!2d-76.30523970801404!3d3.5337037311199775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a04c469792de1%3A0xf028ae60ced7d647!2sCra.%2015%20%2335-64%2C%20Palmira%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1710982858090!5m2!1ses!2sco"
        width="300"
        height="240"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="flex flex-col gap-4 p-3 sm:p-1">
      <h1 class="sm:text-4xl text-2xl font-semibold text-flc-orange">
        {{ !isActiveTranslation ? 'Contáctanos' : 'Contact us' }}
      </h1>
      <p class="text-lg font-semibold text-flc-greenDark text-center sm:text-left">
        {{
          !isActiveTranslation
            ? '¿Tienes preguntas o quieres saber más sobre nosotros?'
            : 'Do you have questions or want to know more about us?'
        }}
        <br />
        {{ !isActiveTranslation ? '¡No dudes en contactarnos!' : 'o not hesitate to contact us!' }}
      </p>
      <!-- Contact buttons section -->
      <ContactButtonsSection />
      <h5 class="text-md text-flc-greenDark">
        {{
          !isActiveTranslation
            ? 'En la Fundación LUZ DE COLOMBIA estamos siempre dispuestos a atenderte y ayudarte en todo lo que podamos.'
            : 'At LUZ DE COLOMBIA Foundation we are always ready to help you and assist you in any way we can.'
        }}
      </h5>
      <PointsOfInterest :points="!isActiveTranslation ? points : englishPoints" />
    </div>
  </div>
</template>
<script setup>
import { points, englishPoints } from '@/js/points.js'
import PointsOfInterest from '@/components/base/PointsOfInterest.vue'
import ContactButtonsSection from '@/components/base/ContactButtonsSection.vue'

defineProps({
  isActiveTranslation: Boolean
})
</script>
