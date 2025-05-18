<template>
  <div class="flex flex-col text-flc-greenDark">
    <HeaderTitle
      :text="!isActiveTranslation ? 'Colectivo Dejando Huella' : 'Collective leaving footprint'"
    />
    <div class="sm:p-10 p-4 border-x-2 border-b-2 rounded-b-2xl border-flc-orange">
      <div class="flex flex-col gap-8">
        <div>
          <p v-if="!isActiveTranslation" class="sm:text-lg text-sm text-justify px-3 sm-px-0">
            El colectivo Dejando Huella es un movimiento social comunitario de base barrial que
            defiende la libertad de expresión, defiende el liderazgo, defiende las causas del medio
            ambiente, defiende la paz como el único camino para la reconciliación de Colombia,
            defiende la movilidad social de los jóvenes, defiende la educación, defiende los
            derechos políticos y sociales de las minorías y en defensa especialmente del medio
            ambiente. Esto se expresa con la movilidad electoral en algunas ocasiones, en otras con
            la participación social como experimento y como mecanismo de pronunciamiento frente
            algunas adversidades o violaciones de derechos colectivos.
          </p>

          <!-- Englis -->
          <p v-else class="sm:text-lg text-sm text-justify px-3 sm-px-0">
            The Dejando Huella collective is a community-based social movement that defends freedom
            of expression, defends leadership, defends environmental causes, defends peace as the
            only path to reconciliation in Colombia, defends the social mobility of young people,
            defends education, defends the political and social rights of minorities and especially
            defends the environment. This is expressed with electoral mobility in some occasions, in
            others with social participation as an experiment and as a mechanism of pronouncement in
            the face of some adversities or violations of collective rights.
          </p>
        </div>

        <!-- Videos section -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
          <div v-for="video in videos" :key="video.id">
            <VideoCardSection :path-video="video.pathVideo" :title="video.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import HeaderTitle from '../base/HeaderTitle.vue'
import VideoCardSection from '../base/VideoCardSection.vue'

defineProps({
  isActiveTranslation: Boolean
})

const videos = [
  {
    id: 1,
    title:
      'Un poco de la historia de quien bien nos representará desde el congreso de la República, miles de voces que hoy son víctimas y no han sido escuchadas, por eso les reitero la invitación a q este 13 de marzo en el tarjeton del senado marquemos U 19. Unidos podemos',
    pathVideo: '/videos/presentacion.mp4'
  },
  {
    id: 2,
    title:
      'En MEDELLIN - ANTIOQUIA las víctimas se UNEN para luchar por sus DERECHOS. Si a la INDEMNIZACIÓN Y LA REPARACIÓN INTEGRAL',
    pathVideo: '/videos/medellin.mp4'
  },
  {
    id: 3,
    title:
      'Mensaje hoy viernes 4 de Marzo del SENADOR DE LAS VÍCTIMAS, para todos lo líderes y lideresas en el País.',
    pathVideo: '/videos/saludos.mp4'
  },
  {
    id: 4,
    title: 'Feliz día de la mujer en su lucha por sus Derechos. Dios les bendiga',
    pathVideo: '/videos/mujeres.mp4'
  },

  {
    id: 3,
    title:
      'En Riohacha - Guajira las víctimas se UNEN para luchar por sus DERECHOS y elegir al SENADOR DE LAS VÍCTIMAS. U-19.',
    pathVideo: '/videos/rioacha_guajira.mp4'
  },

  {
    id: 5,
    title:
      'En ANSERMANUEVO - VALLE DEL CAUCA Y en GARDENIA - ATLANTICO las víctimas se UNEN para luchar por sus DERECHOS. U-19.',
    pathVideo: '/videos/ansermanuevo.mp4'
  },

  {
    id: 5,
    title:
      'En RIOHACHA - GUAJIRA los líderes y lideresas de víctimas FIRMES en la lucha por sus DERECHOS Y vamos a ELEGIR AL SENADOR DE LAS VÍCTIMAS JHON JAIRO HOYOS U-19',
    pathVideo: '/videos/guajira.mp4'
  },
  {
    id: 6,
    title:
      'PUERTO ASÍS - PUTUMAYO las vcitimas continúan UNIÉNDOSE  para elegir al SENADOR DE LAS VÍCTIMAS',
    pathVideo: '/videos/puerto_asis.mp4'
  },
  {
    id: 7,
    title: 'TOLU - SUCRE las víctimas UNIDAS para elegir el vocero de las víctimas en el SENADO',
    pathVideo: '/videos/tolu.mp4'
  },
  {
    id: 8,
    title:
      'VILLAGARZON - PUTUMAYO  las víctimas se UNEN para elegir nuestro vocero, EL SENADOR DE LAS VÍCTIMAS. U- 19',
    pathVideo: '/videos/putumayo.mp4'
  },
  {
    id: 9,
    title:
      'Hoy 7 de Marzo en CUNDINAMARCA las VICTIMAS continúan uniéndose para ELEGIR su vocero EL SENADOR DE LAS VÍCTIMAS U-19 JHON JAIRO HOYOS U-19',
    pathVideo: '/videos/cundinamarca.mp4'
  },

  {
    id: 11,
    title:
      'Municipio de VALENCIA - SUR DE CORDOBA las víctimas se siguen UNIENDO para ELGIR A NUESTRO VOCERO, EL SENADOR DE LAS VÍCTIMAS. U- 19.',
    pathVideo: '/videos/valencia.mp4'
  }
]
</script>
