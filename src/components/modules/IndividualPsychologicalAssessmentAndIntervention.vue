<template>
  <div class="text-flc-greenDark">
    <HeaderTitle
      :text="
        !isActiveTranslation
          ? 'Valoración e intervención psicológica individual'
          : 'Individual psychological assessment and intervention'
      "
    />
    <div
      class="text-sm sm:text-md grid grid-cols-1 sm:grid-cols-2 gap-6 border-x-2 border-b-2 rounded-b-2xl border-flc-orange p-3 sm:p-6"
    >
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-2">
          <Subtitle
            :text="
              !isActiveTranslation
                ? '¿Qué es una valoración psicológica?'
                : 'What is a psychological assessment?'
            "
          />
          <div class="block sm:hidden m-2">
            <ImageCardSection size="w-[150px]" image-path="img/valoration_1.PNG" />
          </div>
          <p v-if="!isActiveTranslation" :class="textClass">
            Es un proceso en el cual se determina a profundidad, por medio de la aplicación de
            entrevistas y otros instrumentos (pruebas y/o cuestionarios), el funcionamiento de una
            persona en sus áreas de ajuste (Personal, familiar, afectiva, académica y/o laboral y
            social) y de esta manera, se establece cuáles son los factores que mantienen las
            problemáticas que perturban a un individuo.
          </p>
          <p v-else :class="textClass">
            It is a process in which it is determined in depth, through the application of
            interviews and other instruments (tests and / or questionnaires), the functioning of a
            person in their areas of adjustment (personal, family, emotional, academic and / or work
            and social) and thus, it is established what are the factors that maintain the problems
            that disturb an individual.
          </p>

          <Subtitle
            :text="
              !isActiveTranslation
                ? '¿Cuál es la importancia de realizar una valoración psicológica?'
                : 'What is the importance of a psychological assessment?'
            "
          />
          <p v-if="!isActiveTranslation" :class="textClass">
            Se pueden identificar problemáticas de relevancia clínica, que impiden el funcionamiento
            apropiado de la vida de una persona. Al establecer los factores específicos que
            mantienen las problemáticas, es posible determinar un plan de tratamiento idóneo y
            eficaz frente a la sintomatología presente. Adicionalmente, permite determinar qué tipo
            de trabajo interdisciplinario se requiere para intervenir sobre las problemáticas de una
            persona. También es posible establecer la ausencia de dificultades clínicamente
            relevantes.
          </p>
          <p v-else :class="textClass">
            Clinically relevant problems can be identified, which impede the proper functioning of a
            person's life. By establishing the specific factors that maintain the problems, it is
            possible to determine a suitable and effective treatment plan for the symptomatology
            present. Additionally, it allows to determine what type of interdisciplinary work is
            required to intervene on the problems of a person. It is also possible to establish the
            absence of clinically relevant difficulties.
          </p>

          <Subtitle
            :text="
              !isActiveTranslation ? 'Descripción de procedimiento' : 'Description of procedure'
            "
          />
          <p v-if="!isActiveTranslation" :class="textClass">
            Consta de 3 sesiones de 60 minutos, en las que un terapeuta experto en psicología indaga
            al paciente y a significantes si es necesario, aplica pruebas, cuestionarios y otros
            instrumentos, para finalmente realizar una formulación clínica del caso particular.
          </p>
          <p v-else :class="textClass">
            It consists of 3 sessions of 60 minutes, in which a therapist expert in psychology
            investigates the patient and significant others if necessary, applies tests,
            questionnaires and other instruments, to finally make a clinical formulation of the
            particular case.
          </p>
        </div>
        <div class="sm:block hidden m-7">
          <ImageCardSection size="w-[150px]" image-path="img/valoration_1.PNG" />
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="m-7 sm:block hidden">
          <ImageCardSection size="w-[150px]" image-path="img/valoration_2.PNG" />
        </div>
        <div class="flex flex-col gap-2">
          <Subtitle
            :text="
              !isActiveTranslation
                ? '¿Qué es una Intervención Psicológica?'
                : 'What is a Psychological Intervention?'
            "
          />
          <div class="m-2 block sm:hidden">
            <ImageCardSection size="w-[150px]" image-path="img/valoration_2.PNG" />
          </div>
          <p v-if="!isActiveTranslation" :class="textClass">
            La intervención psicológica es el proceso en el que un paciente genera estrategias que
            le permiten afrontar las problemáticas identificadas previamente, durante el proceso de
            evaluación, de una manera diferente, lo cual a su vez le permite disminuir la
            sintomatología psicológica presente.
          </p>
          <p v-else :class="textClass">
            Psychological intervention is the process in which a patient generates strategies that
            allow him/her to face the problems previously identified during the assessment process
            in a different way, which in turn allows him/her to reduce the psychological
            symptomatology present.
          </p>

          <Subtitle
            :text="
              !isActiveTranslation
                ? '¿Cuáles son las ventajas de la intervención psicológica?'
                : 'What are the advantages of psychological intervention?'
            "
          />
          <p v-if="!isActiveTranslation" :class="textClass">
            En primer lugar, el trabajo con un profesional capacitado, brinda la posibilidad de
            trabajar sobre los factores que realmente mantienen las dificultades psicológicas. La
            persona tiene la oportunidad de desarrollar estrategias que le son de gran utilidad para
            resolver problemáticas presentes en la actualidad e incluso futuras. Dentro de una
            intervención psicológica se deben tener unos objetivos muy claros, lo cual le brinda
            mayor estructura al proceso y se pueden medir los resultados fácilmente. En una
            intervención psicológica, se busca que sean evidentes los resultados tanto para el
            terapeuta como para el paciente.
          </p>
          <p v-else :class="textClass">
            In the first place, working with a trained professional provides the possibility of
            working on the factors that really maintain the psychological difficulties. The person
            has the opportunity to develop strategies that are very useful to solve current and even
            future problems. Within a psychological intervention there must be very clear
            objectives, which provides greater structure to the process and the results can be
            easily measured. In a psychological intervention, the results should be evident for both
            the therapist and the patient.
          </p>

          <Subtitle
            :text="
              !isActiveTranslation ? 'Descripción de procedimiento' : 'Description of procedure'
            "
          />
          <p v-if="!isActiveTranslation" :class="textClass">
            Consta de varias sesiones con el paciente y/o significantes si es necesario, en las que
            el terapeuta trabaja de manera conjunta con el consultante. Generalmente se realizan
            entre 15 y 20 sesiones, con una regularidad de una semanal; sin embargo, depende de la
            problemática y el caso particular.
          </p>
          <p v-else :class="textClass">
            It consists of several sessions with the patient and/or significant others if necessary,
            in which the therapist works together with the patient. Generally, between 15 and 20
            sessions are carried out, with a regularity of one session per week; however, it depends
            on the problem and the particular case.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Subtitle from '../base/Subtitle.vue'
import ImageCardSection from '../base/ImageCardSection.vue'
import HeaderTitle from '../base/HeaderTitle.vue'

defineProps({
  isActiveTranslation: Boolean
})

const textClass = 'text-md text-justify'
</script>
