<template>
  <HeaderBanner class="z-50 sm:block hidden" :isActiveTranslation="isActiveTranslation" />
  <HeaderBannerMobile class="z-50 block sm:hidden" :isActiveTranslation="isActiveTranslation" />
  <div class="flex flex-col sm:px-24 p-2 py-0 sm:py-10">
    <AboutUs :isActiveTranslation="isActiveTranslation" />

    <PhilosophicalFoundations :isActiveTranslation="isActiveTranslation" />

    <PsychopedagogicalFoundations :isActiveTranslation="isActiveTranslation" />

    <FundamentalsAndPrinciples :isActiveTranslation="isActiveTranslation" />

    <IndividualPsychologicalAssessmentAndIntervention :isActiveTranslation="isActiveTranslation" />

    <FoundationCollective :isActiveTranslation="isActiveTranslation" />

    <ImagesGalery class="sm:block hidden" :isActiveTranslation="isActiveTranslation" />
    <ImagesGaleryMobile class="block sm:hidden" :isActiveTranslation="isActiveTranslation" />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import AboutUs from '../components/modules/AboutUs.vue'
import HeaderBanner from '@/components/modules/HeaderBanner.vue'
import ImagesGalery from '@/components/modules/ImagesGalery.vue'
import FoundationCollective from '@/components/modules/FoundationCollective.vue'
import ImagesGaleryMobile from '@/components/modules/ImagesGaleryMobile.vue'
import HeaderBannerMobile from '@/components/modules/HeaderBannerMobile.vue'
import PhilosophicalFoundations from '../components/modules/PhilosophicalFoundations.vue'
import FundamentalsAndPrinciples from '../components/modules/FundamentalsAndPrinciples.vue'
import PsychopedagogicalFoundations from '../components/modules/PsychopedagogicalFoundations.vue'
import IndividualPsychologicalAssessmentAndIntervention from '../components/modules/IndividualPsychologicalAssessmentAndIntervention.vue'

defineProps({
  isActiveTranslation: Boolean
})

onMounted(() => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})
</script>
