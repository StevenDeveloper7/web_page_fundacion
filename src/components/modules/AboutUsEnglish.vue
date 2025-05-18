<template>
  <div>
    <HeaderTitle text="Learn about us" />
    <div class="border-x-2 border-b-2 rounded-b-2xl border-flc-orange p-4">
      <div class="flex flex-col gap-2 text-flc-greenDark p-10">
        <div class="flex gap-12 justify-center">
          <div class="w-[350px]">
            <Subtitle text="About us?" />
            <p class="text-md text-justify">
              The LUZ DE COLOMBIA Foundation is a non-profit organization, independent of any
              political affiliation, of charitable and welfare character, which serves populations
              of all social conditions, children, adolescents and young people. <br />

              The FLC was created in 1999 by the initiative of the specialized psychologist; GUSTAVO
              ENRIQUE HERNANDEZ VELASCO - president of the institution to date and a group of
              friends committed to the difficult situation that our country was going through in
              relation to the high rates of drug consumption, the violation of human rights and the
              permanent corruption of our political leadership.
            </p>
          </div>
          <div>
            <ImageCard
              size="w-[400px] h-[300px]"
              image-path="img/flc_12.jpg"
              description="LUZ DE COLOMBIA Foundation: Transforming lives since 1999."
            />
          </div>
        </div>
        <p
          class="bg-flc-greenDark opacity-75 text-flc-yellow text-md text-justify rounded-2xl border-b-2 border-x-2 border-flc-orange p-4 shadow-md shadow-flc-orange"
        >
          Named in honor of his mother, who bears the same name, with the support of the
          municipality, companies, institutions and professionals, it develops its activities in
          collaboration with other civil society organizations that understand that drug problems
          require a solidarity response, which should be articulated mainly from the field of
          prevention.
        </p>
        <div>
          <div class="grid grid-cols-2 gap-8 mt-4">
            <p class="text-md text-justify">
              Throughout its history, the "la Caixa" Foundation has sought to integrate the
              contribution of experts of different profiles, in order to maintain an innovative line
              in its strategies and programs, and to be able to constitute itself as a guiding and
              stimulating reference for other proposals. One of the distinguishing features of the
              "la Caixa" Foundation is its commitment to prevent drug risks through educational
              strategies, for which it acts in a very prominent way in the field of formal and
              informal education. The "la Caixa" Foundation promotes preventive education at all
              levels - school, family and community - seeking specific objectives related to drug
              use and, secondarily, addressing other psychosocial risk behaviors.
            </p>

            <p class="text-md text-justify">
              It also maintains lines of research on the causes and consequences of drug use,
              training proposals for professionals and mediators, especially using new technologies,
              and awareness and social mobilization campaigns.
              <br /><br />

              At the moment the FLC occupies a prominent position as a leading organization and
              reference for interventions in the sector of La Buitrera, Las Delicias, El Mesón, San
              Pedro de Palmira and the Laureano Gomez neighborhood in Cali. Neighborhoods where it
              has shared its experience and its intervention model with fourteen adolescents and
              young people.
            </p>
          </div>
        </div>
      </div>
      <div class="items-center flex gap-2 justify-center">
        <ImageCard
          image-path="img/flc_03.jpg"
          description="We provide children and adolescents from vulnerable communities with opportunities to develop their potential through culture, sports and personal growth."
        />
        <ImageCard
          image-path="img/flc_18.jpg"
          description="We offer workshops on self-esteem, leadership, conflict resolution and life skills. We offer workshops in music, dance, theater, plastic arts and literature, among others."
        />
        <ImageCard
          image-path="img/flc_26.jpg"
          description="A hand extended to smiling and dreaming children, symbolizing the support and help offered by the foundation to build a hopeful future."
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Subtitle from '../base/Subtitle.vue'
import ImageCard from '../base/ImageCard.vue'
import HeaderTitle from '../base/HeaderTitle.vue'
</script>
