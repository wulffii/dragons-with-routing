import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../views/Home.vue'

import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'Home.vue',
    component: Home,
  }, 
  {
    path: '/contact',
    name: 'Contact.vue',
    component: () => import("../views/Contact.vue"),
  }, 
  {
    path: '/about',
    name: 'About.vue',
    component: () => import("../views/About.vue"),
  }, 
  {
    path: '/dragon/:id',
    name: 'SingleDragon.vue',
    component: () => import("../views/SingleDragon.vue"),
  }, 
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
