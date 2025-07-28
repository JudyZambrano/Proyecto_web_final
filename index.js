import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import LoginView from '@/views/LoginView.vue';
import RegistroView from '@/views/RegistroView.vue';
import AdminView from '@/views/AdminView.vue';
import SeguimientoView from '@/views/SeguimientoView.vue';
import ListadoView from '@/views/ListadoView.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/registro', name: 'Registro', component: RegistroView },
  { path: '/admin', name: 'Admin', component: AdminView },
  { path: '/seguimiento', name: 'Seguimiento', component: SeguimientoView },
  { path: '/listado', name: 'Listado', component: ListadoView },
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
