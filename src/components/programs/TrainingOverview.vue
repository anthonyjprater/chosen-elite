<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  heading: {
    type: Object,
    required: true,
  },
});

const title = ref(props.overview.heading);
</script>

<template>
    <section>
        <!-- <h2>Training for Children</h2> -->
        <h2>gnfgn</h2>
        <article>
            <!-- <p>A children's training session at Chosen Elite Academy is a fun and intensive experience that develops children's physical and technincal skills in basketball. The training is conducted by qualified coaches who help children understand and enjoy the game.</p>
            <p>During the training, children learn the basics of basketball, such as ball control, passing, shooting, and defense. They are trained in small groups, which allow each child to recieve individual attention from the coaches. During the training process, children learn to work as a team, develop coordination and flexibility, and also improve their physical fitness.</p>
            <p>One of the key aspects of the training is creating a friendly atmosphere where each child feels confident and an important member of the team. Children recieve praise and support from coaches and other participants, which helps them to improve their self-esteem and confidence.</p>
            <p>At the end of each training session, children play games where they can show their new skills and learn to work as a team. Training at Chosen Elite Academy is an excellent way for children to develop, enjoy the game, and learn to collaborate with others.</p> -->
        
        <article>
            <h3>Children's Coach - TP</h3>
            <p></p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </article>

        <article>
            <h3>Training Program</h3>
            <ul>
                <li>
                    <span>Warm-up</span><i></i>
                    <p>The training begins with a warm-up to prepare the child's body for physical activity. The warm-up includes stretching exercises, muscle warm-up, and light cardio training.</p>
                </li>
                <li>
                    <span>Shooting Technique</span><i></i>
                    <p>The second step is teaching shooting techniques, including free throws layups, and jump-shots. Children learn proper stance, shooting form, ball trajectory, and develop accuract in scoring.</p>
                </li>
                <li>
                    <span>Passing</span><i></i>
                    <p>The next stage focuses on teaching passing techniques. Children learn how to pass the ball to each other using various methods, including cross-court passes, outlet passes, and bounce passes. Coaches help children learn proper passing techniques and develop a sense of timing.</p>
                </li>
                <li>
                    <span>Defense</span><i></i>
                    <p>Learning defensive skills is an important part of the training program. Children learn proper positioning, ball interception, and blocking opponents shots. Coaches also teach children how to move on the court and switch between offense and defense.</p>
                </li>
                <li>
                    <span>Game Practice</span><i></i>
                    <p>At the end of the training session, children have the opportunity to play games to showcase their new skills and techniques. Coaches monitor the gameplay and provide inidiviual feedback to help each child improve their skills. Game practice also helps children develop teamwork and learn to play as a cohesive unit.</p>
                </li>
            </ul>
        </article>

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
</style>