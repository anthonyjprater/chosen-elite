<script setup>
import { ref } from 'vue';
// import MainHero from '../components/heros/MainHero.vue'
import HeroHeader from '../components/headers/HeroHeader.vue'
import TrainingOverview from '../components/programs/TrainingOverview.vue'

const items = ref([
    { title: 'Train Your Mind and Body for Basketball Success' },
    { title: 'Training Programs', description: 'Description 2' },
    { title: 'About US', description: 'Description 3' }
    ]);

const overviews = ref([
    {  heading: 'Training for Children' },
    {  text1: "'A children's training session at Chosen Elite Academy is a fun and intensive experience that develops children's physical and technincal skills in basketball. The training is conducted by qualified coaches who help children understand and enjoy the game.'"},
    {  text2: "'During the training, children learn the basics of basketball, such as ball control, passing, shooting, and defense. They are trained in small groups, which allow each child to recieve individual attention from the coaches. During the training process, children learn to work as a team, develop coordination and flexibility, and also improve their physical fitness.'" },
    {  text3: "'One of the key aspects of the training is creating a friendly atmosphere where each child feels confident and an important member of the team. Children recieve praise and support from coaches and other participants, which helps them to improve their self-esteem and confidence.'" },
    {  text4: " 'At the end of each training session, children play games where they can show their new skills and learn to work as a team. Training at Chosen Elite Academy is an excellent way for children to develop, enjoy the game, and learn to collaborate with others.'" }

])

</script>

<template>
    <HeroHeader :item = "items[1]" />
    <TrainingOverview :overview = "overviews[0]" />

    <!-- <MyComponent :item="items[0]" /> -->
</template>

<style scoped>

</style>
