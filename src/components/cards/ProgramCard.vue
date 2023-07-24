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
        <img src="" alt="" width="250" height="250">
        <ul>
            <li>{{ program.ages }}</li>
            <li>{{ program.days }}</li>
            <li>{{ program.time }}</li>
            <li>{{ program.exceptions }}</li>
        </ul>
        <a href="" class="read-more">Read More</a>
    </article>
</template>

<style scoped>
    article {
        width: 100%;
        background: rgba(47, 47, 47, 1);
        color: var(--green);
        padding: 1.5rem 0.5rem;
    }

    h3 {
        text-transform: capitalize;
    }

    article ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
    }



    .read-more {
        background-color: var(--green);
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        padding: 0.75em 1.5em;
        border-radius: 8px;
        margin: 1rem 0;
    }

    .read-more:hover,
    .read-more:focus-visible {
        scale: 0.95;
    }

</style>