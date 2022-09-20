import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import Poll from "../components/Poll.vue";

const isAuth = false;

const routes = [
  {
    path: "/",
    component: Home,
    name: "Login",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
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

// router.beforeEach(async (to, from) => {
//   if (!isAuth && to.path !== "/") {
//     return {
//       path: "/",
//     };
//   }
// });

export default router;
