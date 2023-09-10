import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import TrainingPrograms from '../views/TrainingPrograms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about/',
      name: 'about-us',
      props: true,
      component: AboutUs,
    },
    {
      path: '/training',
      name: 'training-programs',
      component: TrainingPrograms,
    },
  ],
})

export default router