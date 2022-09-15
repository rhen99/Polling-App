import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import Poll from "../components/Poll.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/poll/:id",
    component: Poll,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
