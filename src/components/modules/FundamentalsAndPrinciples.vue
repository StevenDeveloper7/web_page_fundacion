<template>
  <div class="text-flc-greenDark">
    <HeaderTitle
      :text="!isActiveTranslation ? 'Fundamentos y principios' : 'Fundamentals and principles'"
    />
    <div class="border-x-2 border-b-2 rounded-b-2xl border-flc-orange p-3 sm:p-10">
      <div class="flex sm:flex-row flex-col gap-3 sm:gap-10">
        <LegalBasis v-if="!isActiveTranslation" class="w-auto sm:w-[300px] h-min" />
        <LegalBasisEnglish v-else />
        <div class="basis-4/4 sm:basis-3/4">
          <Subtitle
            :text="
              !isActiveTranslation
                ? 'Referentes que soportan nuestro proyecto preventivo institucional'
                : 'References that support our institutional preventive project'
            "
          />
          <p v-if="!isActiveTranslation" :class="textClass">
            LA FUNDACION LUZ DE COLOMBIA, en su desarrollo histórico ha venido construyendo un ideal
            de Proyecto preventivo integra y articula desde las dimensiones antropológicas,
            epistemológicas, educativas y sociológicas, que fundamentan su razón de ser, su quehacer
            y su proyección misma.
            <br />
            El proceso de transferencia de experiencia y conocimiento está enfocado específicamente
            con y para lo humano, con objetividad y de manera crítica que fundamente sus métodos y
            fines en alcanzar la trascendencia, entendida ésta como el desarrollo de actitudes y
            valores que propendan por la potenciación del ser y bienestar humano, soportados durante
            22 años, con la experiencia y el conocimiento de un gran facilitador y terapeuta RAUL
            QUINTERO GUTIERREZ, quien durante todo este tiempo ha hecho grandes aportes a la
            sociedad, colombiana, vallecaucana y palmirana ya sea desde su intervención como
            escritor o como facilitador de más de 1000 (foros, talleres, chimeneas académicas o
            conversatorios comunitarios, como un elogio a la palabra y a la dificultad social.)
          </p>

          <!-- English text -->
          <p v-else :class="textClass">
            The LUZ DE COLOMBIA FOUNDATION, in its historical development, has been building a
            preventive project ideal that integrates and articulates anthropological,
            epistemological, educational and sociological dimensions, which are the basis of its
            raison d'être, its work and its own projection.
            <br />
            The process of transference of experience and knowledge is focused specifically with and
            for the human, with objectivity and in a critical way that bases its methods and
            purposes in achieving transcendence, understood as the development of attitudes and
            values that promote the empowerment of being and human welfare, supported for 22 years,
            with the experience and knowledge of a great facilitator and therapist RAUL QUINTERO
            GUTIERREZ, who during all this time has made great contributions to society, Colombian,
            vallecaucana and palmirana either from his intervention as a writer or as a facilitator
            of more than 1000 (forums, workshops, academic hearths or community discussions, as a
            praise to the word and the social difficulty. )
          </p>
        </div>
      </div>

      <!-- Referents section -->
      <div class="flex sm:flex-row flex-col gap-5">
        <!-- Referents option bar Desktop  -->
        <div class="hidden sm:block gap-3">
          <Subtitle :text="!isActiveTranslation ? 'Referentes' : 'Referents'" />
          <div
            class="flex flex-row sm:flex-col flex-col h-min bg-flc-greenDark rounded-xl text-slate-50 w-min"
          >
            <button @click="activateSection('Antropologic')" :class="buttonClass">
              {{ !isActiveTranslation ? 'Antropológico' : 'Antropologic' }}
            </button>
            <button @click="activateSection('Epistemelogic')" :class="buttonClass">
              {{ !isActiveTranslation ? 'Epistemológico' : 'Epistemelogic' }}
            </button>
            <button @click="activateSection('Educational')" :class="buttonClass">
              {{ !isActiveTranslation ? 'Educativo' : 'Educational' }}
            </button>
            <button @click="activateSection('Sociological')" :class="buttonClass">
              {{ !isActiveTranslation ? 'Sociologico' : 'Sociological' }}
            </button>
          </div>
        </div>

        <!-- Referents option bar Mobile -->
        <div class="sm:hidden block gap-3">
          <Subtitle :text="!isActiveTranslation ? 'Referentes' : 'Referents'" />
          <div class="flex flex-col bg-flc-greenDark rounded-xl text-slate-50 w-min">
            <div class="flex w-full">
              <button
                autofocus
                @click="activateSection('Antropologic')"
                class="w-[122px]"
                :class="buttonClass"
              >
                {{ !isActiveTranslation ? 'Antropológico' : 'Antropologic' }}
              </button>
              <button
                @click="activateSection('Sociological')"
                class="w-[122px]"
                :class="buttonClass"
              >
                {{ !isActiveTranslation ? 'Sociologico' : 'Sociological' }}
              </button>
            </div>
            <div class="flex w-full">
              <button
                @click="activateSection('Epistemelogic')"
                class="w-[122px]"
                :class="buttonClass"
              >
                {{ !isActiveTranslation ? 'Epistemológico' : 'Epistemelogic' }}
              </button>
              <button
                @click="activateSection('Educational')"
                class="w-[122px]"
                :class="buttonClass"
              >
                {{ !isActiveTranslation ? 'Educativo  ' : 'Educational  ' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Referents -->
        <div class="grid gap-8 sm:text-md">
          <!-- Antropologic -->
          <div v-if="isActiveAntropologic">
            <AntropologicSectionDesktop
              class="sm:block hidden"
              :isActiveTranslation="translation"
            />
            <AntropologicSectionMobile
              class="block sm:hidden"
              :isActiveTranslation="isActiveTranslation"
            />
          </div>

          <!-- Epistemelogic -->
          <div v-if="isActiveEpistemelogic">
            <EpistemelogicSectionDesktop
              class="sm:block hidden"
              :isActiveTranslation="isActiveTranslation"
            />
            <EpistemelogicSectionMobile
              class="block sm:hidden"
              :isActiveTranslation="isActiveTranslation"
            />
          </div>

          <!-- Educational -->
          <div v-if="isActiveEducational">
            <EducationalSectionDesktop
              class="sm:block hidden"
              :isActiveTranslation="isActiveTranslation"
            />
            <EducationalSectionMobile
              class="block sm:hidden"
              :isActiveTranslation="isActiveTranslation"
            />
          </div>

          <!-- Sociological -->
          <div v-if="isActiveSociological">
            <SociologicalSectionDesktop
              class="sm:block hidden"
              :isActiveTranslation="isActiveTranslation"
            />
            <SociologicalSectionMobile
              class="block sm:hidden"
              :isActiveTranslation="isActiveTranslation"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import Subtitle from '../base/Subtitle.vue'
import HeaderTitle from '../base/HeaderTitle.vue'
import LegalBasis from '@/components/base/LegalBasis.vue'
import LegalBasisEnglish from '@/components/base/LegalBasisEnglish.vue'
import EducationalSectionMobile from '@/components/base/EducationalSectionMobile.vue'
import AntropologicSectionMobile from '@/components/base/AntropologicSectionMobile.vue'
import EducationalSectionDesktop from '@/components/base/EducationalSectionDesktop.vue'
import SociologicalSectionMobile from '@/components/base/SociologicalSectionMobile.vue'
import SociologicalSectionDesktop from '@/components/base/SociologicalSectionDesktop.vue'
import AntropologicSectionDesktop from '@/components/base/AntropologicSectionDesktop.vue'
import EpistemelogicSectionMobile from '@/components/base/EpistemelogicSectionMobile.vue'
import EpistemelogicSectionDesktop from '@/components/base/EpistemelogicSectionDesktop.vue'

const props = defineProps({
  isActiveTranslation: Boolean
})

const textClass = 'text-sm sm:text-md text-justify'
const buttonClass =
  'text-sm sm:text-md hover:scale-105 focus:scale-105 focus:outline-none focus:bg-flc-greenLight hover:bg-flc-greenLight p-2 sm:p-4 h-full border-0 sm:border-t-2 border-slate-50'

const isActiveAntropologic = ref(true)
const isActiveEpistemelogic = ref(false)
const isActiveEducational = ref(false)
const isActiveSociological = ref(false)

const activateSection = (section) => {
  switch (section) {
    case 'Antropologic':
      isActiveAntropologic.value = true
      isActiveEpistemelogic.value = false
      isActiveEducational.value = false
      isActiveSociological.value = false
      break

    case 'Epistemelogic':
      isActiveAntropologic.value = false
      isActiveEpistemelogic.value = true
      isActiveEducational.value = false
      isActiveSociological.value = false
      break

    case 'Educational':
      isActiveAntropologic.value = false
      isActiveEpistemelogic.value = false
      isActiveEducational.value = true
      isActiveSociological.value = false
      break

    case 'Sociological':
      isActiveAntropologic.value = false
      isActiveEpistemelogic.value = false
      isActiveEducational.value = false
      isActiveSociological.value = true
      break

    default:
      isActiveAntropologic.value = true
      isActiveEpistemelogic.value = false
      isActiveEducational.value = false
      isActiveSociological.value = false
      break
  }
}
</script>
