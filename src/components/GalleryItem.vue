<script setup>
const props = defineProps({
  image: {
    type: Object
  },
})
</script>
<template>
    <figure>
      <img :src="image.image" alt="">
    </figure>
</template>

<style scoped>
    h3 {
        color: var(--green);
    }
    
    figure {
      width: min(300px, 100%);
    }

    img {
      width: 100%;
      height: auto;
    }
</style>