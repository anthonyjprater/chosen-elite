<script setup>
import { ref } from "vue"
import CarouselItem from './CarouselItem.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = ref([
  { id: '1', title: 'Elevate Your Game with Our Elite Basketball Training Academy', image:   },
  { id: '2', title: 'Transform Your Skills at Our Youth Basketball Training Academy', image:  },
  { id: '3', title: 'Score Big with Our Specialized Basketball Shooting Academy', image: }
])

const breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 3,
        wrapAround: "true",
        transition: "200",
        snapAlign: "end"
      }
    }

</script>

<template>
    <section class="info">
        <h2>Chosen Elite Academy</h2> 
        <span class="pitch">is the best choice for you</span>
        <div class="carousel-container">
            <carousel :items-to-show="1" :snapAlign="center" :breakpoints="breakpoints">
                <slide v-for="slide in slides" :key="slide.id">
                    <CarouselItem :slide="slide" />
                </slide>

                <template #addons>
                <navigation />
                <pagination />
                </template>
            </carousel>
            
        </div>
    </section>
</template>