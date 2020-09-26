import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(
      /* webpackChunkName: "home" */
      "../views/Home.vue"
    )
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(
      /* webpackChunkName: "login" */
      "../views/Login.vue"
    )
  },
  {
    path: "/events",
    name: "Events",
    component: () => import(
      /* webpackChunkName: "events" */
      "../views/Events.vue"
    )
  },
  {
    path: "/excuses",
    name: "Excuses",
    component: () => import(
      /* webpackChunkName: "excuses" */
      "../views/Excuses.vue"
    ),
    children: [
      {
        path: "create",
        name: "Create",
        component: () => import(
          /* webpackChunkName: "create" */
          "../views/CreateFlake.vue"
        )
      },
      {
        path: "random",
        name: "Random",
        component: () => import(
          /* webpackChunkName: "random" */
          "../views/RandomFlake.vue"
        )
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router