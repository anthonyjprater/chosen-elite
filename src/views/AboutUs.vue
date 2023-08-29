<script setup>
import { ref } from 'vue';
import HeroHeader from '../components/headers/HeroHeader.vue';

const items = ref([
    { title: 'Train Your Mind and Body for Basketball Success' },
    { title: 'Training Programs', description: 'Description 2' },
    { title: 'About Us', description: 'Description 3' }
    ])
</script>

<template>
    <HeroHeader :item = "items[2]" />
    <section>
        <h1></h1>
        <img src="" alt="">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <img src="" alt="">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </section>
</template>

<style scoped>

</style>