<template>
  <div class="flex flex-col text-flc-greenDark">
    <HeaderTitle
      :text="
        !isActiveTranslation ? 'Fundamentos psicopedagógicos' : 'Psychopedagogical foundations'
      "
    />
    <div class="border-x-2 border-b-2 rounded-b-2xl border-flc-orange p-2 sm:p-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <div class="mx-2">
          <ImageCardSection size="w-full" image-path="img/flc_27.jpg" />
        </div>
        <div>
          <p v-if="!isActiveTranslation" class="sm:text-md text-sm text-justify px-3 sm-px-0">
            Los fundamentos psicopedagógicos de la fundación “Luz de Colombia” orientan la
            interacción humana hacia el desarrollo integral de la persona humana reconociendo la
            pluralidad de concepciones y seleccionando aquellas que conciben integralmente al ser
            humano sin caer en reduccionismos y dogmatismos autoritarios. La psicología se convierte
            en una ciencia humana y por la pedagogía en un saber que favorece el desarrollo humano
            en procesos interactivos consientes, medidos por decisiones y remplazados por
            compromisos con la construcción interpersonal. <br /><br />
          </p>

          <!-- English -->
          <p v-else class="sm:text-md text-sm text-justify px-3 sm-px-0">
            The psycho-pedagogical foundations of the "Luz de Colombia" Foundation orient human
            interaction towards the integral development of the human person, recognizing the
            plurality of conceptions and selecting those that conceive the human being integrally
            without falling into reductionism and authoritarian dogmatism. Psychology becomes a
            human science and pedagogy a knowledge that favors human development in conscious
            interactive processes, measured by decisions and replaced by commitments to
            interpersonal construction.
            <br /><br />
          </p>
        </div>
        <div class="m-2">
          <ImageCardSection size="w-full" image-path="img/flc_15.jpg" />
        </div>
      </div>
      <div class="flex">
        <p v-if="!isActiveTranslation" class="sm:text-md text-sm text-justify px-3 sm-px-0">
          En general la totalidad de los fundamentos curriculares dotan de sentido el quehacer
          humano orientándolo a la formación y el desarrollo del humano que todos conscientes
          responsablemente deseamos realizar. <br /><br />

          El concepto del humano orienta toda la tarea educativa y exige implicaciones curriculares
          y extracurriculares coherentes para crear las condiciones sociales y culturales que lo
          hacen posible para la vida cotidiana. <br /><br />

          La concepción del hombre como ser histórico y sociocultural exige a la educación procesos
          específicos de formación.
        </p>

        <!-- English -->
        <p v-else class="sm:text-md text-sm text-justify px-3 sm-px-0">
          In general, all of the curricular foundations give meaning to human endeavors, orienting
          them to the formation and development of the human being that we all consciously and
          responsibly wish to achieve. <br /><br />

          The concept of the human being orients the entire educational task and demands coherent
          curricular and extracurricular implications to create the social and cultural conditions
          that make it possible for daily life.<br /><br />

          The conception of man as a historical and sociocultural being demands specific formation
          processes from education.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import HeaderTitle from '../base/HeaderTitle.vue'
import ImageCardSection from '../base/ImageCardSection.vue'

defineProps({
  isActiveTranslation: Boolean
})
</script>
