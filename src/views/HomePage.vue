<template>
  <div id="app">
    <Navbar />
    <DataComposite />
    <Navbar2 />
    <DataErdikha />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import DataComposite from "../components/DataComposite.vue";
import Navbar2 from "../components/Navbar2.vue";
import DataErdikha from "../components/DataErdikha.vue";

export default {
  name: "HomePage",

  data: function() {
    return {
      childBooks: undefined,
    };
  },

  components: {
    Navbar,
    DataComposite,
    Navbar2,
    DataErdikha,
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
