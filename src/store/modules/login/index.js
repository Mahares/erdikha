import axios from "axios";

export default {
  state: {
    email: "",
    password: "",
  },

  getters: {
    logins(state) {
      return state.logins;
    },
  },

  actions: {
    postLogin({ commit }) {
      axios
        .post("http://localhost:8080/saham-demo/login", {
          email: this.email,
          credential: this.credential,
        })
        .then((response) => console.log(response))
        .then((logins) => {
          commit("SET_Login", logins);
        })
        .then((error) => console.log(error));
    },
  },

  mutations: {
    SET_Login(state, logins) {
      state.logins = logins;
    },
  },
};
