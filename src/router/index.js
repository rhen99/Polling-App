import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";
import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import Poll from "../components/Poll.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Login",
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/poll/:id",
    component: Poll,
    name: "Poll",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = auth.currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresGuest = to.matched.some((record) => record.meta.requiresGuest);

  if (requiresAuth) {
    if (!isAuthenticated) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else if (requiresGuest) {
    if (isAuthenticated) {
      next({
        path: "/dashboard",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
