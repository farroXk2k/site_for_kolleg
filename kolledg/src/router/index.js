import { createRouter, createWebHistory } from 'vue-router'
import AppAboutUs from '@/components/AppAboutUs.vue'
import AppMain from '@/components/AppMain.vue'
import AppNews from '@/components/AppNews.vue'
import AppForjoin from '@/components/AppForjoin.vue'
import AppEducation from '@/components/AppEducation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppMain
  },
  {
    path: '/about',
    name: 'About',
    component: AppAboutUs
  },
  {
    path: '/news',
    name: 'news',
    component: AppNews
  },
  {
    path: '/admission',
    name: 'forjoin',
    component: AppForjoin
  },
  {
    path: '/education',
    name: 'education',
    component: AppEducation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router