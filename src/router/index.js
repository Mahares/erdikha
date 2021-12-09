import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import InputPin from "../components/InputPin.vue";
import RegisterPage from "../views/RegisterPage.vue";
import BaseController from "../views/BaseController.vue";
/* import BuyState from "../components/BuyState.vue";
import SellState from "../components/SellState.vue";
import AmmendState from "../components/AmmendState.vue";
import WithdrawState from "../components/WithdrawState.vue"; */

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },

  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },

  {
    path: "/home-page",
    name: "HomePage",
    component: HomePage,
  },

  {
    path: "/pin",
    component: InputPin,
  },

  {
    path: "/controller",
    component: BaseController,
  },

  /* {
    path: "/buy",
    component: BuyState,
  },
  {
    path: "/sell",
    component: SellState,
  },
  {
    path: "/ammend",
    component: AmmendState,
  },
  {
    path: "/withdraw",
    component: WithdrawState,
  }, */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
