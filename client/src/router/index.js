import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(
      /* webpackChunkName: "home" */
      "../pages/Home.vue"
    )
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(
      /* webpackChunkName: "login" */
      "../pages/Login.vue"
    )
  },
  {
    path: "/events",
    name: "Events",
    component: () => import(
      /* webpackChunkName: "events" */
      "../pages/Events.vue"
    )
  },
  {
    path: "/excuses",
    name: "Excuses",
    component: () => import(
      /* webpackChunkName: "excuses" */
      "../pages/Excuses.vue"
    )
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router