<template>
  <div>
    <div class="my-demo-wrapper">
      <bs-appbar class="bg-blue-grey darken-4" shadow>
        <bs-appbar-title class="text-white" title="Erdikha Elit Sekuritas"> </bs-appbar-title>
        <bs-spacer></bs-spacer>
        <div class="functional">
          <button @click="btnInputPin">Input PIN</button>

          <button><router-link to="/">Logout</router-link></button>
        </div>
      </bs-appbar>
    </div>
    <ul class="navigation">
      <li @click="btnBuy">BUY</li>
      <li><router-link to="">SELL</router-link></li>
      <li><router-link to="">HEATMAP</router-link></li>
      <li><router-link to="">CHART</router-link></li>
      <li><router-link to="">MARKET SUMMARY</router-link></li>
      <li><router-link to="">NEWS</router-link></li>
    </ul>
    <div v-show="inputClicked == true">
      <input-pin></input-pin>
    </div>
    <div v-show="isBuy == true">
      <base-controller></base-controller>
    </div>
  </div>
</template>

<script>
import InputPin from "../components/InputPin.vue";
import BaseController from "../views/BaseController.vue";

export default {
  name: "TheHeader",

  data() {
    return {
      inputClicked: false,
      isBuy: false,
    };
  },
  components: {
    InputPin,
    BaseController,
  },

  methods: {
    btnInputPin() {
      this.inputClicked = !this.inputClicked;
    },

    btnBuy() {
      this.isBuy = !this.isBuy;
    },
  },

  computed: {
    mounted() {
      return this.$store.dispatch("loadData");
    },
  },
};
</script>

<style lang="scss" scoped>
.functional button {
  margin-right: 20px;
  padding: 10px;
  background-color: #263238;
  color: white;
  border: 2px solid #ffd600;
  border-radius: 20px;
  transition: 0.5s;
}

.functional button:hover {
  background-color: #ffd600;
  color: black;
}

.functional button a {
  color: white;
  text-decoration: none;
}

.functional button:hover a {
  color: black;
}

.my-demo-wrapper {
  border-bottom: 2px solid #ffd600;
}

.navigation {
  background-color: #263238;
  height: 70px;
}

.navigation li {
  display: inline-block;
  margin: 17px 7px;
  border: 1px solid #ffd600;
  padding: 5px;
  border-radius: 7px;
  transition: 0.5s;
  color: white;
  cursor: pointer;
}

.navigation li a {
  color: white;
  text-decoration: none;
}

.navigation li:hover {
  background-color: #ffd600;
  color: black;
}

.navigation li:hover a {
  color: black;
}
</style>
