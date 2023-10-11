<script setup>
import { ref } from 'vue';

const locations = ref([
    { id: 1,
      heading: 'Olympic View' ,
      text1: "A full-size professional basketball hall is located in the Innovation Center on the 4th floor of the PRO-Trainer Fitness Club. The gym is equipped with everything you need to train children and adults. cozy locker rooms, private lockers for changing and much more are available for Chosen Elite Basketball students.",
      text2: "2602 Mukilteo Speedway, Mukilteo, WA 98275" ,
    },
    { id: 2,
      heading: 'Olympic View' ,
      text1: "A full-size professional basketball hall is located in the Innovation Center on the 4th floor of the PRO-Trainer Fitness Club. The gym is equipped with everything you need to train children and adults. cozy locker rooms, private lockers for changing and much more are available for Chosen Elite Basketball students.",
      text2: "2602 Mukilteo Speedway, Mukilteo, WA 98275" ,
    },
])

</script>

<template>
<h1></h1>
<section>
    <img src="" alt="">
    <h2></h2>
    <article>
        <h3></h3>
        <p></p>
        <h3></h3>
        <address></address>
    </article>
</section>
</template>

<style scoped>
section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}
</style>