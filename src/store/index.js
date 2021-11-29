import axios from "../axios/axios";
import Vue from "vue";
import Vuex from "vuex";
import loginStore from "./modules/login/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentJoke: "This is a joke",
    items: [],
  },

  getters: {
    items: (state) => {
      return state.items;
    },
  },

  actions: {
    loadItems({ commit }) {
      axios
        .get("/saham")
        .then((response) => response.data.data)
        .then((items) => {
          commit("SET_Item", items);
        });
    },
  },

  mutations: {
    SET_Item(state, items) {
      state.items = items;
    },
  },

  modules: {
    logins: loginStore,
  },
});

export default store;
