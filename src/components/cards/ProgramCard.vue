<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    programs: {
      type: Array,
      required: true,
    },
  });

// const props = defineProps(['programs']);

</script>

<template>
    <article v-for="program in programs" :key='program.id'>
        <h3>{{ program.title }}</h3>
        <img src="" alt="">
        <ul>
            <li>{{ program.ages }}</li>
            <li>{{ program.days }}</li>
            <li>{{ program.time }}</li>
            <li>{{ program.exceptions }}</li>
        </ul>
        <a href="">Read More</a>
    </article>
</template>

<style scoped>
    article {
        background: #fff;
        color: var(--green);
    }
</style>