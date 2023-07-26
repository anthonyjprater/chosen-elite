<script setup>

</script>

<template>
    <section>
        <h2>Chosen Elite Academy</h2> 
        <span class="pitch">is the best choice for you</span>
        <div class="carousel-container">
            <i class="fa-solid fa-basketball"></i>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100vw;
}

h2,
h2 > span {
    font-size: 1.2rem;
}

span.pitch {
    font-weight: bold;
    line-height: 1;
}

.carousel-container {
    
}

.fa-basketball {
    color: var(--grey);
    font-size: 1.5rem;
    padding: 1rem;
    background: var(--green);
    border-radius: 5px;
}
</style>
