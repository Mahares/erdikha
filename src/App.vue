<template>
  <div id="app">
    <navbar />
    <img alt="Vue logo" src="./assets/logo.png" />
    <DataErdikha />
  </div>
</template>

<script>
import DataErdikha from "./components/DataErdikha.vue";
import navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    DataErdikha,
    navbar,
  },

  data: function() {
    return {
      childBooks: undefined,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
