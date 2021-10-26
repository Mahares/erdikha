import HomePage from "./components/HomePage.vue";
import Navbar from "./components/Navbar.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },

  {
    name: "Navbar",
    component: Navbar,
    path: "/Navbar",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
