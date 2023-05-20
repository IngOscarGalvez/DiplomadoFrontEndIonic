import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CrudCreate from '../views/CreateCrud.vue';
import CrudUpdate from '../views/UpdateCrud.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/crud/create',
    name: 'CrudCreate',
    component: CrudCreate
  },
  {
    path: '/crud/update/:id',
    name: 'CrudUpdate',
    component: CrudUpdate
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
