import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import FormContainer from "@/views/container.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "container",
    component: FormContainer,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
