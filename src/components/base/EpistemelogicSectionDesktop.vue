<template>
  <!-- Epistemelogic -->
  <div class="flex flex-col gap-2">
    <div class="grid grid-cols-2 gap-12 text-justify">
      <div class="m-5">
        <ImageCardSection image-path="img/flc_14.jpg"></ImageCardSection>
      </div>
      <div>
        <Subtitle :text="!isActiveTranslation ? 'Epistemológico' : 'Epistemelogic'" />

        <ContentSectionPrinciples
          :title="
            !isActiveTranslation
              ? '2.1 El conocimiento como proceso, como producto y como posibilidad:'
              : '2.1 Knowledge as process, as product and as possibility,'
          "
          :description="
            !isActiveTranslation
              ? 'Es así como la FLC lo interpreta. Como proceso inicia en un sujeto capaz de aprender, apropiarse y transformar representaciones y elaboraciones acerca de los objetos materiales o no, que constituyen su mundo.'
              : 'This is how the FLC interprets it. As a process it begins in a subject capable of learning, appropriating and transforming representations and elaborations about the material or non-material objects that constitute his or her world.'
          "
        />
        <ContentSectionPrinciples
          :title="!isActiveTranslation ? '2.2 Como producto: ' : '2.2 As a product:'"
          :description="
            !isActiveTranslation
              ? 'Se refiere a saberes acumulados que se generan en la actividad creativa, investigativa y en la praxis cotidiana; con él, se incide de manera significativa en la transformación de la vida en general, en la invención y creación de nuevas teorías, medios o instrumentos para comprender, explicar o transformar la complejidad del universo.'
              : 'It refers to accumulated knowledge generated in creative, investigative activity and in daily praxis; with it, there is a significant impact on the transformation of life in general, in the invention and creation of new theories, means or instruments to understand, explain or transform the complexity of the universe.'
          "
        />
        <ContentSectionPrinciples
          :title="!isActiveTranslation ? '2.3 Cómo posibilidad:' : '2.3 As a possibility:'"
          :description="
            !isActiveTranslation
              ? 'Que permite prever y proveer los medios para la evolución y la autoconservación de la especie. La acción de la FLC propicia el desarrollo de la capacidad intelectual, de la creatividad, auto superación y regulación de conductas y de la capacidad de asombro como dinamismos que facilitan la creación de mundos posibles; y su quehacer se orienta a la apropiación, producción, generación y aplicación de conocimientos y saberes en torno a la prevención o la superación a problemas de consumo o adición a las drogas. '
              : 'That makes it possible to foresee and provide the means for the evolution and self-preservation of the species. The action of the FLC fosters the development of intellectual capacity, creativity, self-improvement and regulation of behaviors and the capacity for astonishment as dynamisms that facilitate the creation of possible worlds; and its work is oriented towards the appropriation, production, generation and application of knowledge and know-how regarding the prevention or overcoming of problems of drug use or drug addiction.'
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
