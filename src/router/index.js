import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView/HomeView.vue'
import AboutView from '../views/AboutView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  routes
})

export default router
