import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: {
      template: "<h1>Home</h1>",
    },
  },
  {
    path: "/dashboard",
    component: {
      template: "<h1>Dashboard</h1>",
    },
  },
  {
    path: "/:slug",
    component: {
      template: "<h1>Poll</h1>",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
