import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      var id = localStorage.getItem('usr_id')
      if(id){
        next('/admin')
      }
      else{
        next()
      }
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      var id = localStorage.getItem('usr_id')
      if(!id){
        next('/login')
      }
      else{
        next()
      }
    }
  },
  {
    path: '/',
    name: 'about',
    component: About,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
