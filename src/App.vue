<template>
  <div id="app">
    <Navbar />
    <DataComposite />
    <DataErdikha />
  </div>
</template>

<script>
import DataErdikha from "./components/DataErdikha.vue";
import Navbar from "./components/Navbar.vue";
import DataComposite from "./components/DataComposite.vue";

export default {
  name: "App",
  components: {
    DataErdikha,
    Navbar,
    DataComposite,
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
