<template>
  <div class="flex flex-col">
    <HeaderTitle
      :text="
        !isActiveTranslation
          ? 'Galeria de imagenes de nuestra fundación'
          : 'Image gallery of our foundation'
      "
    />
    <div class="gap-6 flex flex-col">
      <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
        <Slide v-for="image in foundationImages" :key="image.id">
          <div>
            <img class="rounded-xl w-[350px] h-[250px]" :src="image.path" />
          </div>
        </Slide>
      </Carousel>

      <Carousel
        autoplay="3500"
        id="thumbnails"
        :items-to-show="1.5"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="image in foundationImages" :key="image.id">
          <div class="carousel__item" @click="slideTo(image.id - 1)">
            <img class="rounded-xl w-[245px] h-[180px]" :src="image.path" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import HeaderTitle from '../base/HeaderTitle.vue'

defineProps({
  isActiveTranslation: Boolean
})

const currentSlide = ref(0)

const slideTo = (itemNumber) => {
  currentSlide.value = itemNumber
}

const foundationImages = [
  {
    id: 1,
    path: 'img/flc_17.jpg'
  },
  {
    id: 2,
    path: 'img/flc_18.jpg'
  },
  {
    id: 3,
    path: 'img/flc_19.jpg'
  },
  {
    id: 4,
    path: 'img/flc_20.jpg'
  },
  {
    id: 5,
    path: 'img/flc_21.jpg'
  },
  {
    id: 6,
    path: 'img/flc_22.jpg'
  },
  {
    id: 7,
    path: 'img/flc_23.jpg'
  },
  {
    id: 8,
    path: 'img/flc_24.jpg'
  },
  {
    id: 9,
    path: 'img/flc_25.jpg'
  },
  {
    id: 10,
    path: 'img/flc_26.jpg'
  },
  {
    id: 11,
    path: 'img/flc_27.jpg'
  },
  {
    id: 12,
    path: 'img/flc_28.jpg'
  }
]
</script>
