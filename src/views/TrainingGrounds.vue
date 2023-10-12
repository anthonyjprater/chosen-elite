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
  <section>
  <h1>Training Grounds</h1>
    <img src="" alt="" width="280" height="160">
    <div>
      <h2>{{ locations[0].heading }}</h2>
      <article>
          <h3>Description</h3>
          <p>{{ locations[0].text1 }}</p>
          <h3>Address</h3>
          <address>{{ locations[0].text2 }}</address>
      </article>
    </div>
</section>
</template>

<style scoped>

h1 {
  text-align: left;
}

section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    text-align: left;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}

</style>