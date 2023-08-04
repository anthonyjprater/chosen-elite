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

    function initMap() {
        const myLatLng = {
            lat: 47.9305305480957,
            lng: -122.30045318603516
        };
        const map = new google.maps.Map(document.getElementById("gmp-map"), {
            zoom: 14,
            center: myLatLng,
            fullscreenControl: false,
            zoomControl: true,
            streetViewControl: false
        });
        new google.maps.Marker({
            position: myLatLng,
            map,
            title: "My location"
        });
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
        </div>

        
        <div id="gmp-map"></div>
        
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&maptype=satellite&key=AIzaSyBFpDkCJ6BNs0yU4G_W3fM78FLIMv8qRPA" alt="">

        <!-- <img src="https://maps.googleapis.com/maps/api/staticmap?center=47.93093915519747,-122.30126015396925&zoom=5&size=150x150&key=AIzaSyBFpDkCJ6BNs0yU4G_W3fM78FLIMv8qRPA" alt="">
        47.93093915519747, -122.30126015396925 -->
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
}

h2 {
    color: var(--green);
}

/* Always set the map height explicitly to define the size of the div
 * element that contains the map. */
 #gmp-map {
  height: 100%;
}

</style>