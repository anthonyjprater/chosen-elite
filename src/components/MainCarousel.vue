<script setup>
import CarouselItem from './CarouselItem.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

</script>

<template>
    <section>
        <h2>Chosen Elite Academy</h2> 
        <span class="pitch">is the best choice for you</span>
        <div class="carousel-container">
            <carousel :items-to-show="1.5">
                <slide v-for="slide in 3" :key="slide">
                <CarouselItem />
                </slide>

                <template #addons>
                <navigation />
                <pagination />
                </template>
            </carousel>
            
        </div>
    </section>
</template>

<style scoped>

section {
    background: rgba(33, 33, 33, 1);
    width: 100vw;
    padding: 3rem 1.5rem;
    /* background: center/cover no-repeat url(/basketball.png), #000; */
}

h2,
h2 > span {
    font-size: 1.2rem;
}

span.pitch {
    font-weight: bold;
    line-height: 1;
}

.carousel-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fa-basketball {
    color: var(--grey);
    font-size: 1.5rem;
    padding: 1rem;
    background: var(--green);
    border-radius: 5px;
}
</style>
