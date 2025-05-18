<template>
  <!-- Educational -->
  <div class="flex flex-col gap-2 text-sm">
    <div class="grid gap-2 sm:gap-12 text-justify">
      <div>
        <Subtitle :text="!isActiveTranslation ? 'Educativo' : 'Educational'" />

        <ContentSectionPrinciples
          title="3.1"
          :description="
            !isActiveTranslation
              ? 'La educación es un proceso que es parte del diario vivir del hombre desde que hace hasta que muera.'
              : 'Education is a process that is part of man daily life from the time he is born until the time he dies.'
          "
        />
        <ContentSectionPrinciples
          title=" 3.2"
          :description="
            !isActiveTranslation
              ? 'Cuentan con un propio sistema educativo.'
              : 'They have their own educational system.'
          "
        />
        <ContentSectionPrinciples
          title="3.3"
          :description="
            !isActiveTranslation
              ? 'Posee un currículo no escrito (inédito) que se afirma y sostiene en sus mitos, leyendas y tradición oral.'
              : 'It possesses an unwritten curriculum (unpublished) that is affirmed and sustained in its myths, legends and oral tradition.'
          "
        />
        <ContentSectionPrinciples
          title="3.4"
          :description="
            !isActiveTranslation
              ? 'La edad es solo un indicador del momento en que se encuentra el proceso de cada individuo.'
              : 'The age is only an indicator of the moment in which the process of each individual is.'
          "
        />
        <ContentSectionPrinciples
          title="3.5"
          :description="
            !isActiveTranslation
              ? 'El desarrollo educativo se rige por los principios fundamentales de armonía y respecto hombre-naturaleza y del mantenimiento del bienestar entre todos.'
              : 'The educational development is governed by the fundamental principles of harmony and respect man-nature and the maintenance of the well-being among all.'
          "
        />
      </div>
      <ImageCardSection image-path="img/flc_18.jpg"></ImageCardSection>
    </div>
    <div class="text-justify">
      <ContentSectionPrinciples
        title="3.6 "
        :description="
          !isActiveTranslation
            ? 'El hombre se educa como producto de la comunicación e interdependencia con su entorno, donde es solo uno de sus elementos.'
            : 'Man is educated as a product of communication and interdependence with his environment, where he is only one of its elements.'
        "
      />
      <ContentSectionPrinciples
        :title="!isActiveTranslation ? '3.7 Autoevaluación:' : '3.7 Self-evaluation:'"
        :description="
          !isActiveTranslation
            ? 'La autoevaluación es un proceso pedagógico y cultural que se ocupa de los intereses históricos y sociales de la FLC, es una actividad de indagación permanente, análisis, que permite el mejoramiento progresivo del quehacer institucional. Se constituye en un instrumento de autorregulación que garantiza el desarrollo institucional. Como parte de su proceso de mejoramiento la institución reconoce la importancia y relevancia de procesos permanentes de autoevaluación en todos sus ámbitos, como una estrategia general de desarrollo, crecimiento y fortalecimiento. Esta exige además objetividad y honestidad frente al reconocimiento de los aciertos y de las deficiencias encontradas en el proceso; capacidad para decidir y actuar de acuerdo con el propósito de mantener, mejorar y consolidar la calidad de los servicios de la FLC'
            : 'Self-evaluation is a pedagogical and cultural process that deals with the historical and social interests of the FLC, it is an activity of permanent inquiry, analysis, which allows the progressive improvement of the institutional task. It is an instrument of self-regulation that guarantees institutional development. As part of its improvement process, the institution recognizes the importance and relevance of permanent self-evaluation processes in all its areas, as a general strategy for development, growth and strengthening. This also requires objectivity and honesty in recognizing the successes and deficiencies found in the process; the ability to decide and act in accordance with the purpose of maintaining, improving and consolidating the quality of the services provided by the FLC.'
        "
      />
    </div>
  </div>
</template>
<script setup>
import Subtitle from './Subtitle.vue'
import ImageCardSection from './ImageCardSection.vue'
import ContentSectionPrinciples from '@/components/base/ContentSectionPrinciples.vue'

defineProps({
  isActiveTranslation: Boolean
})
</script>
