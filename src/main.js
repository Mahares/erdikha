import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import VueMdb from "vue-mdbootstrap";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue";

//Font-Awesome
library.add(faUserSecret, faSpinner);
library.add(faFacebook, faInstagram, faTwitter, faWhatsapp);
Vue.component("font-awesome-icon", FontAwesomeIcon);

//Vue MDBootstrap
Vue.use(VueMdb);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
