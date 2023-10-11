import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import TrainingPrograms from '../views/TrainingPrograms.vue'
// import ApplyForm from '../views/ApplyForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about-us',
      props: true,
      component: AboutUs,
    },
    {
      path: '/training/',
      name: 'training-programs',
      component: TrainingPrograms,
    },
    {
      path: '/apply',
      name: 'apply-form',
      component: () => import('../views/ApplyForm.vue'),
    },
    {
      path: '/references',
      name: 'references',
      component: () => import('@/views/ReferenceList.vue'),
    },
    {
      path: '/training_grounds',
      name: 'training-grounds',
      component: () => import('@/views/TrainingGrounds.vue'),
    },
  ],
})

export default router
