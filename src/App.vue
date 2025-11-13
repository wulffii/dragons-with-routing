<script setup>
import {ref} from "vue";
import dragonData from "@/assets/js/dragons.js";
import { RouterLink } from "vue-router";
import TheHeadere from "./components/TheHeadere.vue";

const dragons = ref(dragonData);



// 5. Kunne det ikke være smart hvis man kunne se linket til forsiden? Lad os i App.vue lave en <nav> med et <router-link> i der peger på "/"

// 6. Kan I huske vores header fra sidst? Den med dragebilledet og "D&D website...". Lad os lave den som en component. Hvornår skal noget ligge i "components" og hvornår i "views"? I App.vue importér nu TheHeader.vue og indsæt den over <nav>.

// 7. I HomeView skal vi nu have vist dragons. For at kunne generere en article per drage SKAL vi i HomeView have adgang til dragedata...her er to mulige måder:
//  - Importér dem (igen) i HomeView...det er lidt træls at gøre flere gange...
//  - Send props igennem <router-view> og modtag dem med defineProps() ligesom vi lærte sidst. Dette er måske nemmere, men betyder reelt at vi sender disse data til ALLE de eventuelle undersider vi nogensinde kommer til at lave...
//  - Næste gang kommer vi til at se på state management, som er en bedre måde at klare det på, men indtil da vælger vi en af ovenstående to metoder

// 8. Lav nu en ny side/view: ContactView.vue (eller Contact.vue) og lav her noget kontakt-agtigt

// 9. Tilføj den i router + i <nav> i App.vue. Virker det?

// 10. Gentagelse giver rutine...skal vi også lave About.vue?

// 11. Lad os prøve at lave et "SingleDragonView" (eller SingleDragon.vue) som på sigt skal vise alle dragers detaljer. Opret det nye view(i første omgang lav bare en <h2> i <template>-området), registrér den i index.js/routeren med ruten: "/dragon/1" og til sidst i App.vue i <nav>. Virker det?

// 12. I SingleDragonView har vi, via props, adgang til alle drager, så lav en "udvidet" visning af den første drage (dragons[0]) med lidt mere info end i HomeView

// 13. Men...det er da lidt dumt at vi skal hardcode hver eneste drage...vi skal have gang i dynamisk routing. Se dagens video eller læs op på de her to steder: https://router.vuejs.org/guide/essentials/dynamic-matching.html & https://router.vuejs.org/guide/advanced/composition-api.html Prøv at se et eksempel på hvordan det kunne se ud: https://youtu.be/ZgDwze7ed1k

// 13.1 Opdatér routeren så den sender alle url'er med /dragon/12 og /dragon/BLAH over til SingleDragonView

// 13.2 I SingleDragonView skal vi nu fange id'et fra urlen og vise den rigtige drage - ikke bare den første som vi gjorde før

// 13.3 Nu mangler vi bare at opdatere navigationen i App.vue - prøv det

// 13.4 OBS! Virker din app til at hente den første drage, men virker IKKE når du skifter til den næste? Det har muligvis at gøre med din app henter den første drage når din component loades, men for at optimere koden loades din komponent kun EN gang. læs her og se hvordan watch() kan redde dagen: https://router.vuejs.org/guide/essentials/dynamic-matching.html#Reacting-to-Params-Changes 

// 13.5 Kan vi gøre det bedre? Er det en pæn navigation? Hvad med at de enkelte "dragon cards" i HomeView fungerer som links? Do it og slet de dumme 20 links i nav!
</script>

<template>
<TheHeadere />
  <nav>
    <RouterLink to="/">Hjem</RouterLink>
    <RouterLink to="/contact">Kontakt</RouterLink>
    <RouterLink to="/about">Omkring os</RouterLink>
  </nav>
  <main>
    <RouterView :dragons="dragons" />
    </main>
</template>

<style scoped>


main {
  max-width: 1000px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 6px;
}

nav {
  display: flex;
  justify-content: center;
}

a {
  color: red;
  text-decoration: none;
  display: block;
  padding: 1rem;
  transition: all 0.3s;
}

a:hover {
  background: #ddd;
}
</style>
