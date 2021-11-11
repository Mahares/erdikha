<template>
  <div id="app">
    <Navbar />
    <DataComposite />
    <Navbar2 />
    <DataErdikha />
    <RunningTrade />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import DataComposite from "../components/DataComposite.vue";
import Navbar2 from "../components/Navbar2.vue";
import DataErdikha from "../components/DataErdikha.vue";
import RunningTrade from "../components/RunningTrade.vue";

export default {
  name: "HomePage",

  components: {
    Navbar,
    DataComposite,
    Navbar2,
    DataErdikha,
    RunningTrade,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
