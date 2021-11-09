import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CoretCoretan from "../views/CoretCoretan.vue";
import loginPin from "../components/loginPin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home-page",
    name: "HomePage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/HomePage.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/coret-coretan",
    name: "CoretCoretan",
    component: CoretCoretan,
  },

  {
    path: "/login-pin",
    name: "loginPin",
    component: loginPin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
