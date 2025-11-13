<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    dragons: Object,
    required: true
})

const route = useRoute();

let currentDragon = props.dragons.find(dragon => dragon.id == route.params.id)

watch(
    () => route.params.id,
    (nyværdi) => ( currentDragon = props.dragons.find(dragon => dragon.id == nyværdi))
)

</script>

<template>
    <article>
        <h2>{{currentDragon.name}}</h2>
        <img :src="currentDragon.img_url" alt="">
        <p v-html="currentDragon.Traits"></p>

    </article>
</template>

<style scoped>
article {
    grid-column: 1/-1;

    img {
        max-width: 600px;
    }
}
</style>