<template>
  <!-- Antropologic -->
  <div class="flex flex-col gap-2 text-sm">
    <div class="grid gap-4 text-justify">
      <div>
        <Subtitle :text="!isActiveTranslation ? 'Antropológico' : 'Antropologic'" />
        <ImageCardSection image-path="img/flc_12.jpg"></ImageCardSection>
        <ContentSectionPrinciples
          :title="!isActiveTranslation ? '1.1 Genéticamente:' : '1.1 Genetically:'"
          :description="
            !isActiveTranslation
              ? 'Capaz de representar el mundo, simbolizar y construir conocimientos acerca de sí mismo y de su entorno, por su incesante actividad cognoscitiva, intencional y afectiva. Con la capacidad de interiorizar las nuevas tendencias, readecue sus saberes, actitudes y aptitudes hacia un mejor desarrollo de forma integral, proyectándose sobre las nuevas  generaciones.'
              : 'Capable of representing the world, symbolizing and constructing knowledge about himself and his environment, through his incessant cognitive, intentional and affective activity. With the ability to internalize new trends, readapt their knowledge, attitudes and aptitudes towards a better development in an integral way, projecting themselves to the new generations.'
          "
        />
        <ContentSectionPrinciples
          :title="!isActiveTranslation ? '1.2 Comunicativo:' : '1.2 Communicative:'"
          :description="
            !isActiveTranslation
              ? 'A través de diferentes modos de relación e interacción, construye mundos posibles, gracias, entre otros factores, a sus competencias lingüísticas y creativas. '
              : 'Through different modes of relationship and interaction, constructs possible worlds, thanks, among other factors, to their linguistic and creative skills.'
          "
        />
        <ContentSectionPrinciples
          :title="!isActiveTranslation ? '1.3 Reflexivo:' : '1.3 Reflective:'"
          :description="
            !isActiveTranslation
              ? 'Al pensar sobre sí mismo y sobre el otro, desarrollando conciencia personal y colectiva que se construye en las relaciones intersubjetivas y que a su vez posibilita la construcción de su identidad personal, comunitaria y cultural. '
              : 'By thinking about themselves and others, developing personal and collective awareness that is built in intersubjective relationships and which in turn enables the construction of their personal, community and cultural identity.'
          "
        />
        <ContentSectionPrinciples
          :title="!isActiveTranslation ? '1.4 Autónomo:' : '1.4 Autonomous:'"
          :description="
            !isActiveTranslation
              ? 'Infundiendo, transmitiendo u orientando en el niño, el adolescente y el joven principios y herramientas necesarias para que actúe de forma libre y responsable consigo mismo y con su entorno.'
              : 'Instilling, transmitting or guiding in the child, adolescent and youth principles and tools necessary for them to act freely and responsibly with themselves and their environment.'
          "
        />
        <ContentSectionPrinciples
          :title="!isActiveTranslation ? '1.5 Trascendente:' : '1.5 Transcendent:'"
          :description="
            !isActiveTranslation
              ? 'Alcanzando su realización como individuo, en el desarrollo de sus propiasmetas y proyectos de vida, como ser social, al interactuar con el otro en la búsqueda de sus propios fines, como ser histórico, al aportar nuevas ideas y nuevas soluciones a los hechos y  problemas cotidianos, en sus diversas etapas de evolución y en lo cultural al reflejar su naturaleza espiritual en las diferentes manifestaciones artísticas.'
              : 'Achieving their fulfillment as individuals, in the development of their own goals and life projects, as social beings, by interacting with others in the pursuit of their own goals, as historical beings, by contributing new ideas and new solutions to everyday events and problems, in their various stages of evolution and culturally by reflecting their spiritual nature in different artistic manifestations.'
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
