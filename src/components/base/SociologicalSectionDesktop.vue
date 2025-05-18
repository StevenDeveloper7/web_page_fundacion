<template>
  <!-- Sociological -->
  <div class="flex flex-col gap-2">
    <div class="grid grid-cols-2 gap-12 text-justify">
      <div class="m-5">
        <ImageCardSection image-path="img/flc_24.jpg"></ImageCardSection>
      </div>
      <div>
        <Subtitle :text="!isActiveTranslation ? 'Sociologico' : 'Sociological'" />

        <ContentSectionPrinciples
          :title="!isActiveTranslation ? '4.1 Cultura:' : '4.1 Culture:'"
          :description="
            !isActiveTranslation
              ? 'El carácter simbólico del Ser Humano y de su realidad como ser en constante relación, se constituye en un universo de significados que dan identidad a un grupo humano y pertenencia a los sujetos que lo conforman. En esta perspectiva la cultura es el proceso-producto constante de los grupos sociales en su devenir histórico, que expresa el proyecto social, principios, valores, intereses y prioridades de un grupo humano.'
              : 'The symbolic character of the Human Being and of his reality as a being in constant relationship, is constituted in a universe of meanings that give identity to a human group and belonging to the subjects that conform it. In this perspective, culture is the constant process-product of social groups in their historical evolution, which expresses the social project, principles, values, interests and priorities of a human group.'
          "
        />
        <ContentSectionPrinciples
          :title="!isActiveTranslation ? '4.2 Sociedad:' : '4.2 Society:'"
          :description="
            !isActiveTranslation
              ? 'La sociedad, sistema complejo conformado por organizaciones, relaciones, funciones, acuerdos, reglas y fines, procura por el bien común, el desarrollo humano y la realización personal, como modos particulares de garantizar con calidad la supervivencia de la especie. Caracterizada por su diversidad étnica, cultural, económica, académica, política, y  por ser una realidad cambiante.'
              : 'Society, a complex system made up of organizations, relationships, functions, agreements, rules and purposes, strives for the common good, human development and personal fulfillment, as particular ways of guaranteeing the survival of the species with quality. It is characterized by its ethnic, cultural, economic, academic, political diversity, and by being a changing reality.'
          "
        />
      </div>
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
