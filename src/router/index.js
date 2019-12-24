import Vue from 'vue'
import VueRouter from 'vue-router'
import Event from '../views/Event.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event',
    component: Event
  },
  {
    path: '/comment',
    name: 'Comment',

    component: () => import(/* webpackChunkName: "comment" */ '../views/Comment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
