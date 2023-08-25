<script setup>
import { ref } from 'vue'

const props = defineProps({
  details: {
    type: Array,
  }
});

const details = ref(props.details)
</script>

<template>
<!--Program Details Article-->
<article>
    <h2>{{ details[0].heading}}</h2>
    <ul>
        <li v-for="(drill) in details[0].drills">
            <div>
                <span>{{ drill.title }}</span>
                <p>{{ drill.content }}</p>
            </div>
        </li>
        <!-- <li>
            <span>{{ details[0].drills[0].title }}</span>
            <p>{{ details[0].drills[0].content }}</p>
        </li>
        <li>
            <span>{{ details[0].drills[1].title }}</span>
            <p>{{ details[0].drills[1].content }}</p>
        </li>
        <li>
            <span>{{ details[0].drills[2].title }}</span>
            <p>{{ details[0].drills[2].content }}</p>
        </li>
        <li>
            <span>{{ details[0].drills[3].title }}</span>
            <p>{{ details[0].drills[3].content }}</p>
        </li>
        <li>
            <span>{{ details[0].drills[4].title }}</span>
            <p>{{ details[0].drills[4].content }}</p>
        </li> -->
    </ul>
</article>
</template>

<style scoped>

h1 {
    font-size: 1.5rem;
    place-self: start;
    color: var(--green);
    text-wrap: balance;
}

h2 {
    font-size: 1.1rem;
}

article {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items : baseline;
}

article p {
    text-align: left;
}

article img {
    max-width: 100%;
    height: auto;
}

article ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 1rem;
    gap: 3rem;
    text-align: left;
}

li div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 1rem;
}


li::marker {
    content: "🏀";
    font-size: 1rem;
    color: var(--green);
    
}

</style>