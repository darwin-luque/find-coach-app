import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // redirect: '/coaches', // uncomment when coaches page is ready
    name: 'home',
    component: HomeView,
  },
  {
    path: '/coaches',
    redirect: '/', // temp while building coaches page
  },
  {
    path: '/coaches/:id',
    redirect: '/', // temp while building individual coach page,
    props: true,
    children: [
      {
        path: 'contact',
        redirect: '/', // temp while building coach contact page,
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
