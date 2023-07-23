<script setup>

</script>

<template>
    <section>
        <h2>Our Programs</h2>
        <p>We have individual programs for children, amateurs, and professionals. Our programs are tailored to the age and skill level of each group.</p>
        <div class="card-container">

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
    gap: 1.5rem;
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