<script setup>
import { ref } from 'vue'

const props = defineProps({
  overview: {
    type: Array,
  },
  details: {
    type: Array,
  },
  summary: {
    type: Array,
  }
});

const overview = ref(props.overview);
const details = ref(props.details)
const summary = ref(props.summary)
</script>

<template>
    <section>
        <!--Program Summary Article-->
        <h1>{{ overview[0].heading }}</h1>
        <article>
            <!-- <p>A children's training session at Chosen Elite Academy is a fun and intensive experience that develops children's physical and technincal skills in basketball. The training is conducted by qualified coaches who help children understand and enjoy the game.</p>
            <p>During the training, children learn the basics of basketball, such as ball control, passing, shooting, and defense. They are trained in small groups, which allow each child to recieve individual attention from the coaches. During the training process, children learn to work as a team, develop coordination and flexibility, and also improve their physical fitness.</p>
            <p>One of the key aspects of the training is creating a friendly atmosphere where each child feels confident and an important member of the team. Children recieve praise and support from coaches and other participants, which helps them to improve their self-esteem and confidence.</p>
            <p>At the end of each training session, children play games where they can show their new skills and learn to work as a team. Training at Chosen Elite Academy is an excellent way for children to develop, enjoy the game, and learn to collaborate with others.</p> -->
            <p>{{ overview[0].text1 }}</p>
            <p>{{ overview[0].text2 }}</p>
            <p>{{ overview[0].text3 }}</p>
            <p>{{ overview[0].text4 }}</p>
        </article>  
        
        <!--Program Coach Article-->
        <article>
            <h2>{{ summary[0].heading }}</h2>
            <img src="coach.png" alt="" />
            <p>{{ summary[0].summary }}</p>
            <ul>
                <li>{{ summary[0].info[1].content }}</li>
                <li>{{ summary[0].info[2].content }}</li>
                <li>{{ summary[0].info[0].content }}</li>
            </ul>
        </article>
        
        <!--Program Details Article-->
        <article>
            <h2>{{ details[0].heading}}</h2>
            <ul>
                <li>
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
                </li>
            </ul>
        </article>

    </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(33, 33, 33, 1);
  width: 100vw;
  padding: 3rem 1.5rem;
  gap: 2rem;
}

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
    padding: 1rem;
    gap: 0.5rem;
    text-align: left;
}

</style>