<template>
  <div id="about">
    <HeaderTitle :text="!isActiveTranslation ? 'Conoce sobre nosotros' : 'Learn about us'" />
    <div class="border-x-2 border-b-2 rounded-b-2xl border-flc-orange p-4">
      <div class="flex flex-col gap-2 text-flc-greenDark sm:p-10 p-2">
        <div class="flex sm:flex-row flex-col sm:gap-12 gap-2 justify-center">
          <div class="w-[100%] sm:w-[350px]">
            <Subtitle :text="!isActiveTranslation ? '¿Quienes Somos?' : 'About us?'" />
            <p v-if="!isActiveTranslation" class="text-md text-justify">
              La Fundación LUZ DE COLOMBIA, es una entidad sin ánimo de lucro, independiente de toda
              filiación política, de carácter benéfico-asistencial, que atiende a poblaciones de
              todas las condiciones sociales, niños, adolescentes y jóvenes. <br />

              La FLC fue creada en 1999 por iniciativa del psicólogo especializado; GUSTAVO ENRIQUE
              HERNANDEZ VELASCO - presidente de la institución hasta la fecha y un grupo de amigos
              comprometidos con la difícil situación por la que corría nuestro país en relación a
              los altos índices de consumo de droga, la violación de derechos humanos y la
              corrupción permanente de nuestra dirigencia política. <br />
            </p>
            <p v-else class="text-md text-justify">
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
              :description="
                !isActiveTranslation
                  ? 'Fundación LUZ DE COLOMBIA: Transformando vidas desde 1999.'
                  : 'LUZ DE COLOMBIA Foundation: Transforming lives since 1999.'
              "
            />
          </div>
        </div>
        <p
          class="bg-flc-greenDark opacity-75 text-slate-50 text-md text-justify rounded-2xl border-b-2 border-x-2 border-flc-orange p-4 shadow-md shadow-flc-orange"
        >
          {{
            !isActiveTranslation
              ? 'El nombre es en honor a su señora madre quien porta el mismo nombre, con el respaldo del municipio, empresas, instituciones y profesionales, desarrolla sus actividades en colaboración con otras organizaciones de la sociedad civil que entienden que los problemas de drogas requieren una respuesta solidaria, que debe articularse principalmente desde el ámbito de la prevención.'
              : 'Named in honor of his mother, who bears the same name, with the support of the municipality, companies, institutions and professionals, it develops its activities in collaboration with other civil society organizations that understand that drug problems require a solidarity response, which should be articulated mainly from the field of prevention.'
          }}
        </p>

        <!-- General Manager's Information -->
        <div class="flex sm:flex-row flex-col sm:gap-12 gap-2 justify-center">
          <div class="sm:block hidden">
            <ImageCard
              size="w-[520px] h-[320px]"
              image-path="img/flc_raul.PNG"
              :description="
                !isActiveTranslation
                  ? 'RAUL QUINTERO GUTIERREZ. - DIRECTOR GENERAL DE LA FUNDACIÓN.'
                  : 'RAUL QUINTERO GUTIERREZ - GENERAL DIRECTOR OF THE FOUNDATION.'
              "
            />
          </div>
          <div class="w-[100%] sm:w-[550px]">
            <Subtitle
              :text="
                !isActiveTranslation
                  ? 'DIRECTOR GENERAL: RAUL QUINTERO GUTIERREZ.'
                  : 'GENERAL DIRECTOR: RAUL QUINTERO GUTIERREZ.'
              "
            />
            <div class="sm:hidden block">
              <ImageCard
                size="w-[520px] h-[320px]"
                image-path="img/flc_raul.PNG"
                :description="
                  !isActiveTranslation
                    ? 'RAUL QUINTERO GUTIERREZ - DIRECTOR GENERAL DE LA FUNDACIÓN - directorgeneral@fundacionluzdecolombia.com.co'
                    : 'RAUL QUINTERO GUTIERREZ - GENERAL DIRECTOR OF THE FOUNDATION - directorgeneral@fundacionluzdecolombia.com.co'
                "
              />
            </div>
            <p v-if="!isActiveTranslation" class="text-md text-justify">
              El Escritor Colombiano; Raúl Quintero, es director general de la fundación luz de
              Colombia desde el año 1999, se ha desempeñado como psicoterapeuta de Esta ONG, ha sido
              asesor presidencial del programa RUMBOS, pilas con las drogas y del programa de salud
              mental promoción juvenil del ministerio de educación nacional, auspiciado por la UNDCP
              (fondo de naciones unidas para la prevención del consumo de sustancias psicoactivas).
              <br /><br />

              Coordinador nacional del programa DEJANDO HUELLA con el colectivo Nacional La Fuerza
              de la Paz. (Jhon Jairo Hoyos Representante a la cámara y Daniel hoyos Diputado del
              valle) 2012-2024. Sumado a estas actividades se han desarrollado bajo su dirección
              proyectos de reinserción social con jóvenes del conflicto armado colombiano.<br />
            </p>
            <p v-else class="text-md text-justify">
              The Colombian writer Raúl Quintero, has been the general director of the Fundación Luz
              de Colombia since 1999. He has worked as a psychotherapist for this NGO and has been a
              presidential advisor for the RUMBOS program, "pilas con las drogas" and for the mental
              health program "promoción juvenil" of the Ministry of National Education, sponsored by
              the UNDCP (United Nations Fund for the Prevention of the Consumption of Psychoactive
              Substances).
              <br /><br />

              National coordinator of the DEJANDO HUELLA program with the national collective La
              Fuerza de la Paz (Jhon Jairo Hoyos Representative to the Chamber of Deputies and
              Daniel Hoyos Deputy of the Valley) 2012-2024. In addition to these activities have
              been developed under his direction social reintegration projects with young people of
              the Colombian armed conflict.
            </p>
          </div>
        </div>

        <div>
          <div v-if="!isActiveTranslation" class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
            <p class="text-md text-justify">
              A lo largo de su historia, la FLC ha pretendido integrar la contribución de expertos
              de diferente perfil, para mantener una línea innovadora en sus estrategias y
              programas, y poder constituirse como un referente orientador y estimulador de otras
              propuestas. Una de las características diferenciales de la FLC es su apuesta por
              prevenir los riesgos de las drogas a través de estrategias educativas, para lo que
              actúa de forma muy destacada en el ámbito de la educación formal e informal. La FLC
              promueve la educación preventiva en todos los niveles de escuela, familia y comunidad,
              buscando objetivos específicos relacionados con los consumos de drogas, y atendiendo,
              secundariamente, a otras conductas de riesgo psicosocial.
            </p>

            <p class="text-md text-justify">
              Asimismo, mantiene líneas de investigación sobre las causas y consecuencias de los
              consumos de drogas, propuestas de formación de profesionales y mediadores, sobre todo
              utilizando nuevas tecnologías, y campañas de sensibilización y movilización sociales.
              <br /><br />

              En estos momentos la FLC ocupa un espacio destacado como una organización líder y
              referente de las intervenciones en el sector de la buitrera, las delicias, el mesón,
              san Pedro de Palmira y el barrio Laureano Gomez de Cali. Barrios donde ha compartido
              su experiencia y su modelo de intervención con catorce adolescentes y jóvenes.
            </p>
          </div>

          <div v-else class="grid grid-cols-2 gap-8 mt-4">
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
      <div class="items-center flex sm:flex-row flex-col gap-2 justify-center">
        <ImageCard
          size="w-[320px] h-[400px]"
          image-path="img/flc_03.jpg"
          :description="
            !isActiveTranslation
              ? 'Brindamos a niños y adolescentes de comunidades vulnerables oportunidades para desarrollar su potencial a través de la cultura, el deporte y el crecimiento personal.'
              : 'We provide children and adolescents from vulnerable communities with opportunities to develop their potential through culture, sports and personal growth.'
          "
        />
        <ImageCard
          size="w-[320px] h-[400px]"
          image-path="img/flc_18.jpg"
          :description="
            !isActiveTranslation
              ? 'Impartimos talleres de autoestima, liderazgo, resolución de conflictos y habilidades para la vida. Ofrecemos talleres de música, danza, teatro, artes plásticas y literatura, entre otros.'
              : 'We offer workshops on self-esteem, leadership, conflict resolution and life skills. We offer workshops in music, dance, theater, plastic arts and literature, among others.'
          "
        />
        <ImageCard
          size="w-[320px] h-[400px]"
          image-path="img/flc_26.jpg"
          :description="
            !isActiveTranslation
              ? 'Una mano extendida hacia niños sonrientes y soñadores, simbolizando el apoyo y la ayuda que ofrece la fundación para construir un futuro esperanzador.'
              : 'A hand extended to smiling and dreaming children, symbolizing the support and help offered by the foundation to build a hopeful future.'
          "
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Subtitle from '../base/Subtitle.vue'
import ImageCard from '../base/ImageCard.vue'
import HeaderTitle from '../base/HeaderTitle.vue'

defineProps({
  isActiveTranslation: Boolean
})
</script>
