<script setup>
import { ref } from "vue"
import GalleryItem from "./GalleryItem.vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const images = ref([
  { id: '1', title: 'Elevate Your Game with Our Elite Basketball Training Academy', image: "/image_1.jpg"},
  { id: '2', title: 'Transform Your Skills at Our Youth Basketball Training Academy', image: "/image_2.jpg"},
  { id: '3', title: 'Score Big with Our Specialized Basketball Shooting Academy', image: "/image_3.jpg"}
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
        <h2>Gallery</h2>
        <div class="carousel-container">
            <carousel :items-to-show="1" :snapAlign="center" :breakpoints="breakpoints">
                <slide v-for="image in images" :key="image.id">
                    <GalleryItem :image="image" />
                </slide>

                <template #addons>
                <pagination />
                </template>
            </carousel>
            
        </div>
    </section>
</template>

<style scoped>

section.info {
    background: rgba(47, 47, 47, 1);
    width: 100vw;
    padding: 3rem 1.5rem;
    /* background: center/cover no-repeat url(/basketball.png), #000; */
}

h2 {
    color: var(--green);
}

</style>