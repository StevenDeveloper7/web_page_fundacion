<template>
  <div class="flex flex-col text-flc-greenDark">
    <HeaderTitle
      :text="!isActiveTranslation ? 'Fundamentos filosóficos' : 'Philosophical foundations'"
    />
    <div class="sm:p-10 p-4 border-x-2 border-b-2 rounded-b-2xl border-flc-orange">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p v-if="!isActiveTranslation" class="sm:text-md text-sm text-justify px-3 sm-px-0">
            La problemática juvenil está íntimamente relacionada con la infantil no solo por las
            particularidades de la edad física y psíquica, si no por las condiciones familiares,
            escolares y sociales que comparten, La realidad social, económica y política en que vive
            el niño, el joven, el adulto y el viejo, presentan riesgos que solo pueden ser superados
            desde una concepción de lo humano fundamentada en el desarrollo del SER. <br /><br />

            La filosofía del TENER que impregnar toda realidad, condiciona las diferentes relaciones
            del ser humano consigo mismo, con los otros y con las cosas a la competitividad. Las
            estructuras sociales que generan estas formas de relación impiden el Desarrollo Humano
            integral y exponen no solo al joven, sino al niño y al adulto a su propia destrucción.
            <br /><br />

            Todo el quehacer humano cuando se encuentra sometido al imperio del “tener más para ser
            más”, se en-ruta aceleradamente al individualismo sin sentido que justifica la
            destrucción del otro y de la misma naturaleza para los propios y particulares fines.
          </p>

          <!-- Englis -->
          <p v-else class="sm:text-md text-sm text-justify px-3 sm-px-0">
            The social, economic and political reality in which children, young people, adults and
            the elderly live, present risks that can only be overcome from a conception of the human
            being based on the development of the BEING.<br /><br />

            The philosophy of HAVING that permeates all reality, conditions the different
            relationships of the human being with himself, with others and with things to
            competitiveness. of the human being with himself, with the others and with the things to
            the competitiveness. The social structures that generate these forms of relationship
            impede the integral Human Development and expose not only the and expose not only the
            young person, but also the child and the adult to their own destruction.
            <br /><br />
            All human endeavors, when subjected to the rule of "having more in order to be more",
            are rapidly heading towards a senseless individualism that justifies the destruction of
            others and of nature itself for one's own particular ends. <br /><br />
          </p>
        </div>
        <div class="mx-8 my-4">
          <ImageCardSection size="w-full" image-path="img/flc_20.jpg" />
        </div>
      </div>
      <div>
        <p v-if="!isActiveTranslation" class="sm:text-md text-sm text-justify px-3 sm-px-0">
          Es preciso y urgente, por tanto, re conceptualizar lo humano desde una perspectiva donde
          la vida no sea un privilegio de algunos o un derecho perdido, sino una necesidad
          intrínseca de nuestro ser individual y social, jamás desconectado de la vida en todas sus
          manifestaciones, ni de su entorno con los elementos que la posibilitan. <br /><br />

          La historia nos ha demostrado hasta la sociedad que la forma como nos relacionamos esta
          generado un sistema social humano y que la vida no solo de la especie sino del planeta se
          deteriora progresivamente. El desarrollo del ser humano será posible si lo descubrimos en
          su integridad y creemos las condiciones de reciprocidad con la naturaleza y entre nosotros
          mismos, no solo las relaciones del hombre si no del hombre con la naturaleza harán posible
          la transformación benéfica para todos. <br /><br />

          Al encontrar el sentido autentico de lo humano necesariamente encontraremos el sentido y
          la razón de ser de la Educación cuya tarea será la construcción de tal humano. Será parte
          de la cultura todo lo que contribuye al Desarrollo Humano integral (DHI).
        </p>

        <!-- English -->
        <p v-else class="sm:text-md text-sm text-justify px-3 sm-px-0">
          It is necessary and urgent, therefore, to re-conceptualize the human from a perspective
          where life is not a privilege of some or a lost right, but a necessity. life is not a
          privilege of some or a lost right, but an intrinsic need of our individual and social
          being, never disconnected intrinsic need of our individual and social being, never
          disconnected from life in all its manifestations, nor from its environment with the
          elements that make it possible. and its environment with the elements that make it
          possible.
          <br /><br />

          History has shown us up to the society that the way we relate to each other is generating
          a human social system and that the life not only of the species but also of the planet is
          progressively deteriorating. The development of the human being will be possible if we
          discover him in his integrity and create the conditions of reciprocity with nature and
          among ourselves, not only the relations of man but of man with nature will make possible
          the beneficial transformation for all.
          <br /><br />

          When we find the authentic meaning of the human, we will necessarily find the meaning and
          the raison d'être of Education whose task will be the construction of such a human being.
          Everything that contributes to integral Human Development (IHD) will be part of culture.
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
