import axios from "../axios/axios";
import Vue from "vue";
import Vuex from "vuex";
import loginStore from "./modules/login/index";
import input from "./modules/inputPin/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentJoke: "This is a joke",
    items: [],
    inputClicked: false,
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

    btnInputPin(state) {
      state.inputClicked = !state.inputClicked;
    },
  },

  modules: {
    logins: loginStore,
    input,
  },
});

export default store;
