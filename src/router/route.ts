import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/dutyPortal',
    alias: '/',
    component: () => import(/* webpackChunkName: "portal/duty" */ '@/views/portal/Duty.vue')
  },
  {
    path: '/duty',
    component: () => import(/* webpackChunkName: "helper/duty" */ '@/views/helper/duty/Duty.vue')
  }
]

export default routes
