import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

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
        .get("http://10.1.0.140:8080/saham-demo/saham")
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

  modules: {},
});

export default store;
