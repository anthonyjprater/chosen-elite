<script setup>
  import { ref } from 'vue'
  import ProgramCard from './cards/ProgramCard.vue';

  const props = defineProps({
    programs: {
      type: Array,
      required: true,
    },
  });

  const artists = props.artists;


  const programs = ref([
    {
      'title': 'children',
      'ages': 'From 6 to 9 years old',
      'days': 'Monday/Thursday/Friday',
      'time': '4pm-6pm',
      'exceptions': 'conditions may change',
      'id': '1'
    },
    {
      'title': 'amateurs',
      'ages': 'From 6 to 9 years old',
      'days': 'Monday/Thursday/Friday',
      'time': '4pm-6pm',
      'exceptions': 'conditions may change',
      'id': '2'
    },
    {
      'title': 'professional',
      'ages': 'From 6 to 9 years old',
      'days': 'Monday/Thursday/Friday',
      'time': '4pm-6pm',
      'exceptions': 'conditions may change',
      'id': '3'
    },
    ])
</script>

<template>
    <section>
        <h2>Our Programs</h2>
        <p>We have individual programs for children, amateurs, and professionals. Our programs are tailored to the age and skill level of each group.</p>
        <div class="card-container">
            <ProgramCard :programs="programs" />
        </div>
    </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(33, 33, 33);
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 2rem;
  }

  h2 {
    color: var(--green);
    text-wrap: balance;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

</style>