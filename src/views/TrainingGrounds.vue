<script setup>
import { ref } from 'vue';
import MainHeader from '../components/headers/MainHeader.vue';

const locations = ref([
    { id: 1,
      image: 'court1.png',
      heading: 'Olympic View' ,
      text1: "A full-size professional basketball hall is located in the Innovation Center on the 4th floor of the PRO-Trainer Fitness Club. The gym is equipped with everything you need to train children and adults. cozy locker rooms, private lockers for changing and much more are available for Chosen Elite Basketball students.",
      text2: "2602 Mukilteo Speedway, Mukilteo, WA 98275" ,
    },
    { id: 2,
      image: 'court2.png',
      heading: 'Olympic View' ,
      text1: "A full-size professional basketball hall is located in the Innovation Center on the 4th floor of the PRO-Trainer Fitness Club. The gym is equipped with everything you need to train children and adults. cozy locker rooms, private lockers for changing and much more are available for Chosen Elite Basketball students.",
      text2: "2602 Mukilteo Speedway, Mukilteo, WA 98275" ,
    },
])

</script>

<template>
  <MainHeader></MainHeader>
  <section>
    <h1>Training Grounds</h1>
    <article v-for="location in locations" key='location.id'>
      <img :src="location.image" alt="" width="280" height="160">
      <div>
        <h2>{{ location.heading }}</h2>
        <h3>Description</h3>
        <p>{{ location.text1 }}</p>
        <h3>Address</h3>
        <address>{{ location.text2 }}</address>  
      </div>
    </article>
  </section>
</template>

<style scoped>

h1 {
  font-size: 1.5rem;
  text-align: left;
  text-wrap: balance;
}

section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    /* justify-content: center; */
    text-align: left;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}

section article:not(:last-child) {
  border-bottom: 2px solid var(--green);
  padding:0 0 1rem 0;
}

img {
  width: 100%;
  height: auto;
  background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1)33%);
  box-shadow: 2px 4px 4px rgba(0,0,0,0.5);
}

img,h2,h3,p {
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 1rem;
  /* font-weight: normal; */
  color: var(--green);
}

@media(min-width: 768px) {

  section {
        padding: 3rem 7.5rem;
  }

  section article:not(:last-child) {
  border-bottom: 2px solid var(--green);
  padding:0 0 2rem 0;
}

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    padding: 0;
  }

  article > * {
    width: 50%;
  }
  
  article div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 0 0 1rem 0;
  }
}

</style>