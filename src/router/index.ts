import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/coaches',
    component: HomeView,
  },
  {
    path: '/coaches',
    name: 'coaches',
    component: () => import('../views/CoachesView.vue'),
  },
  {
    path: '/coaches/:id',
    name: 'coach',
    component: () => import('../views/CoachView.vue'),
    props: true,
    children: [
      {
        path: 'contact',
        name: 'contact coach',
        component: () => import('../views/ContactCoachView.vue'),
      },
    ],
  },
  {
    path: '/register',
    redirect: '/', // temp while building register page,
  },
  {
    path: '/requests',
    redirect: '/', // temp while building requests page,
  },
  {
    path: '/:notFound(.*)',
    redirect: '/', // templ while building 404 page,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
});

export default router;
