import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(
      /* webpackChunkName: "home" */
      "../views/Home.vue"
    ),
    meta: {
      requiresAuth: true
    }
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
    ),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/excuses",
    name: "Excuses",
    component: () => import(
      /* webpackChunkName: "excuses" */
      "../views/Excuses.vue"
    ),
    meta: {
      requiresAuth: true
    },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters["auth/isAuthenticated"]) {
      next();
      return;
    }
    next({ name: "Login" });
  } else {
    next();
  }
})

export default router