<script setup>
const props = defineProps({
  image: {
    type: Object
  },
})
</script>
<template>
    <img :src="image.image" alt="">
    {{ image.image }}
</template>

<style scoped>
    h3 {
        color: var(--green);
    }
</style>