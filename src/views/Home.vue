<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    dragons: Object,
    required: true
})
</script>

<template>
<article v-for="dragon in props.dragons" :key="dragon.id">
    <RouterLink :to="`/dragon/${dragon.id}`">
    <h3>{{ dragon.name }}</h3>
    <img :src="dragon.img_url" alt="">
    </RouterLink>
</article>
</template>

<style scoped>

img {
    max-width: 100%;
}

</style>