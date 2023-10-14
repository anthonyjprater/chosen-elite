<script setup>
import { ref } from 'vue';
import MainHeader from '../components/headers/MainHeader.vue';
import ReferenceCard from '../components/cards/ReferenceCard.vue';
import reviewButton from '../components/buttons/reviewButton.vue';

const reviews = ref([
    { id: 1,
      name: 'James Gandolfini',
      date: '12.04.2023' ,
      rating: "5",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea aperiam quibusdam id nam illum vero sapiente maxime laboriosam eos sequi quis exercitationem non amet, ab tempore esse nostrum labore? Dolorem qui nulla et maiores, similique deserunt, blanditiis, officiis voluptas consectetur eius doloremque mollitia voluptate porro quidem! Dolorum molestias aliquid ullam, ipsa officiis eaque, soluta dolorem facere temporibus deserunt error. Cupiditate culpa quidem quaerat, modi minima, iste quis voluptatem id quo natus ad nesciunt aperiam repellat magni. Qui nostrum quia quibusdam, iusto vitae ad incidunt pariatur perspiciatis consectetur hic ea.'
    },
    { id: 2,
      name: 'James Gandolfini',
      date: '12.04.2023' ,
      rating: "5",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea aperiam quibusdam id nam illum vero sapiente maxime laboriosam eos sequi quis exercitationem non amet, ab tempore esse nostrum labore? Dolorem qui nulla et maiores, similique deserunt, blanditiis, officiis voluptas consectetur eius doloremque mollitia voluptate porro quidem! Dolorum molestias aliquid ullam, ipsa officiis eaque, soluta dolorem facere temporibus deserunt error. Cupiditate culpa quidem quaerat, modi minima, iste quis voluptatem id quo natus ad nesciunt aperiam repellat magni. Qui nostrum quia quibusdam, iusto vitae ad incidunt pariatur perspiciatis consectetur hic ea.' 
    },
])


</script>

<template>
    <MainHeader></MainHeader>
    <section>
        <div>
            <h1>References</h1>
            <reviewButton></reviewButton>
        </div>
        <ReferenceCard :reviews="reviews"></ReferenceCard>
    </section>
</template>

<style scoped>
section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}

section div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

h1 {
  font-size: 1.5rem;
  text-align: left;
  text-wrap: balance;
}
</style>