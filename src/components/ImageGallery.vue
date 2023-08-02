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
    <section class="main-gallery">
        <h2>Gallery</h2>
        <div class="carousel-container">
            <carousel :items-to-show="1" :snapAlign=center wrapAround :breakpoints="breakpoints" itemsToShow="1.5">
                <slide v-for="image in images" :key="image.id">
                    <GalleryItem :image="image" />
                </slide>

                <template #addons>
                <pagination />
                </template>
            </carousel>

            <iframe
                width="600"
                height="450"
                style="border:0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFpDkCJ6BNs0yU4G_W3fM78FLIMv8qRPA
                    &q=Space+Needle,Seattle+WA">
            </iframe>
            
        </div>
    </section>
</template>

<style scoped>

section.main-gallery {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: rgba(47, 47, 47, 1);
    width: 100vw;
    padding: 3rem 1.5rem;
    border: 1px solid rebeccapurple;
}

h2 {
    color: var(--green);
}

</style>