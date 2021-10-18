<template>
  <div id="app">
    <navbar />
    <img alt="Vue logo" src="./assets/logo.png" />
    <Table />
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    Table,
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
