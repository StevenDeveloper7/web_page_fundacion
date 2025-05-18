<template>
  <div class="h-screen z-0">
    <Carousel class="carousel" :autoplay="5000" :wrap-around="true">
      <Slide v-for="item in itemsSlider" :key="item.id">
        <!-- Banner section 1 -->
        <div
          v-if="item.id == 1"
          class="grid place-content-center bg-image w-full h-[410px] items-center"
          style="background-image: url('/img/flc_slider1.jpg')"
        >
          <!-- Foundation name -->
          <div class="flex flex-col justify-center gap-3">
            <div class="w-[800px] h-[100px] items-center text-center p-3 flex flex-col gap-20">
              <div class="flex gap-20 items-center">
                <div
                  class="text-flc-orange uppercase text-5xl font-bold bg-flc-greenDark rounded-md p-2 opacity-75 items-center"
                >
                  <h1 v-if="!isActiveTranslation" class="">
                    Fundación luz de <br />
                    colombia
                  </h1>
                  <h1 v-else class="">
                    Luz De Colombia <br />
                    Foundation
                  </h1>
                </div>
                <div>
                  <img src="/img/logo_24.png" class="w-[170px]" />
                </div>
              </div>

              <h2
                class="flex justify-end text-slate-50 text-4xl font-semibold italic bg-flc-greenDark rounded-xl p-2 opacity-50"
              >
                {{
                  !isActiveTranslation
                    ? '"Programa nacional dejando huellas"'
                    : '"National program leaving footprints"'
                }}
              </h2>
            </div>
          </div>
        </div>

        <!-- Banner section 2 -->
        <div v-if="item.id == 2" class="p-6 grid grid-cols-3 gap-2 w-full h-[410px] bg-green-100">
          <div class="m-2">
            <ImageCardSection height="h-[350px]" imagePath="/img/flc_22.jpg" />
          </div>

          <div class="flex flex-col gap-3">
            <div>
              <ImageCardSection height="h-[250px]" width="w-full" image-path="/img/flc_18.jpg" />
            </div>
            <div class="place-content-center">
              <h1
                class="p-1 text-flc-orange uppercase text-sm font-bold bg-flc-greenDark rounded-xl p-2 opacity-75"
              >
                {{
                  !isActiveTranslation
                    ? '"Formación integral para jóvenes y adolescentes: construyendo un futuro libre de drogas, apostando por la educación como herramienta fundamental para prevenir su consumo."'
                    : '"Comprehensive training for young people and adolescents: building a future free of drugs, relying on education as a fundamental tool to prevent drug use."'
                }}
              </h1>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <div class="mt-12">
              <h1
                class="p-1 text-flc-orange uppercase text-sm font-bold bg-flc-greenDark rounded-xl p-2 opacity-75"
              >
                {{
                  !isActiveTranslation
                    ? 'La problemática juvenil hunde sus raíces en la infancia, compartiendo las mismascondiciones familiares, escolares y sociales'
                    : 'Youth problems are rooted in childhood, sharing the same family, school and social conditions.'
                }}
              </h1>
            </div>
            <div>
              <ImageCardSection height="h-[230px]" width="w-full" image-path="/img/flc_16.jpg" />
            </div>
          </div>
        </div>

        <!-- Banner section 3 -->
        <div v-if="item.id == 3" class="grid grid-cols-3 w-full h-[410px] bg-green-100">
          <div>
            <img class="h-[410px] w-full" src="/img/flc_18.jpg" />
          </div>

          <div class="flex flex-col">
            <div>
              <img class="h-[300px] w-full" src="/img/flc_03.jpg" />
            </div>
            <div>
              <h1 class="p-2 text-justify text-md text-slate-50 bg-flc-greenDark">
                {{
                  !isActiveTranslation
                    ? '"Todos merecen la oportunidad de tener una vida mejor. Por eso, la'
                    : '"Everyone deserves the opportunity to have a better life. That is why the'
                }}
                <strong class="text-flc-orange uppercase">{{
                  !isActiveTranslation ? 'Fundación Luz de Colombia ' : 'Luz De Colombia Foundation'
                }}</strong>
                {{
                  !isActiveTranslation
                    ? 'implementa programas y proyectos que promueven la formación integral para jóvenes y adolescentes"'
                    : 'implements programs and projects that promote comprehensive training for young people and adolescents"'
                }}
              </h1>
            </div>
          </div>

          <div>
            <img class="h-[410px] w-full" src="/img/flc_21.jpg" />
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <!-- Lawers  -->
    <div>
      <h3 class="text-lg text-center uppercase font-semibold text-flc-yellow bg-flc-greenDark">
        {{
          !isActiveTranslation
            ? 'Ley 1566 del 31 de julio de 2012 - Ley 1616 del 21 de enero del 2013 - Ley 1751 del 16 de febrero de 2015'
            : 'Law 1566 of July 31, 2012 - Law 1616 of January 21, 2013 - Law 1751 of February 16, 2015'
        }}
      </h3>
    </div>

    <!-- Footer section -->
    <div class="grid grid-cols-5 gap-7 py-1 px-12 bg-green-200">
      <div class="grid place-content-center">
        <img src="/img/logo.png" class="w-[150px]" alt="Fundación Luz de Colombia" />
      </div>
      <div class="col-span-4 px-7">
        <h3 class="text-center text-xl text-slate-50 p-1 bg-flc-greenDark font-semibold my-2">
          {{ !isActiveTranslation ? 'ACTIVIDADES CENTRALES' : 'CORE ACTIVITIES' }}
        </h3>
        <div class="grid grid-cols-2 text-md font-bold uppercase gap-4 text-center">
          <div class="flex flex-col gap-1">
            <h4 :class="itemsStyle">
              {{ !isActiveTranslation ? 'Movilidad social juvenil' : 'Youth social mobility' }}
            </h4>
            <h4 :class="itemsStyle">
              {{
                !isActiveTranslation
                  ? 'Liderazgo social y comunitario'
                  : 'Social and community leadership'
              }}
            </h4>
            <h4 :class="itemsStyle">
              {{
                !isActiveTranslation ? 'Protección del medio ambiente' : 'Environmental protection'
              }}
            </h4>
          </div>
          <div class="flex flex-col gap-1">
            <h4 :class="itemsStyle">
              {{
                !isActiveTranslation
                  ? 'Prevención y promoción integral'
                  : 'Prevention and integral promotion'
              }}
            </h4>
            <h4 :class="itemsStyle">
              {{
                !isActiveTranslation
                  ? 'Reinserción a población firmantes de paz'
                  : 'Reintegration of the peace signatory population'
              }}
            </h4>
            <h4 :class="itemsStyle">
              {{
                !isActiveTranslation
                  ? 'Apoyo y asesoria a población victima del conflicto armado'
                  : 'Support and advice to victims of the armed conflict'
              }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import 'vue3-carousel/dist/carousel.css'
import ImageCardSection from '../base/ImageCardSection.vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

defineProps({
  isActiveTranslation: Boolean
})

const itemsStyle =
  'border-2 p-1 border-flc-greenDark text-flc-greenDark  hover:scale-105 cursor-pointer'

const itemsSlider = [
  {
    id: 1,
    imagePath: '/img/flc_slider1.jpg'
  },
  {
    id: 2,
    imagePath: '/img/flc_22.jpg'
  },
  {
    id: 3,
    imagePath: '/img/flc_18.jpg'
  }
]
</script>
<style>
.carousel__prev,
.carousel__next {
  border-radius: 25%;
  box-sizing: content-box;
  border: 2px solid white;
  background-color: #057a09;
  color: #f0b410;
  padding: 8px;
  opacity: 65%;
}

.carousel__prev:hover,
.carousel__next:hover {
  border-radius: 25%;
  box-sizing: content-box;
  border: 2px solid white;
  background-color: #057a09;
  color: #f0b410;
  padding: 8px;
  opacity: 100%;
}
</style>
