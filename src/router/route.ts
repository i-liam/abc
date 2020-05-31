import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/duty',
    alias: '/',
    component: () => import(/* webpackChunkName: "helper/duty" */ '../views/helper/duty/Duty.vue')
  }
]

export default routes
