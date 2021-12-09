export default {
  state() {
    return {
      inputClicked: false,
    };
  },

  mutations: {
    btnInputPin(state) {
      state.inputClicked = !state.inputClicked;
    },
  },
};
