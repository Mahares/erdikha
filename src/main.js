import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import VueMdb from "vue-mdbootstrap";

Vue.config.productionTip = false;
Vue.use(VueMdb);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
