/* eslint-disable */

import { createRouter, createWebHistory } from 'vue-router';

// import Home from '@/views/Home.vue';
// import Manage from '@/views/Manage.vue';
//import Song from '@/views/Song.vue';

const Home = () => import('@/views/Home.vue');
const Manage = () =>
  import(/* webpackChunkName: "groupedChunk" */ '@/views/Manage.vue');
const Song = () =>
  import(/* webpackChunkName: "groupedChunk" */ '@/views/Song.vue');

import store from '@/store';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song,
  },
  {
    path: '/manage-details',
    redirect: {
      name: 'manage',
    },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {
      name: 'home',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }
  if (store.state.auth.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }
});

export default router;
