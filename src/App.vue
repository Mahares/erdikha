<template>
  <div id="app">
    <div style="text-align:center">
      <grid-demo :heroes="gridData" :columns="gridColumns" :filter-key="searchQuery" />
    </div>
    <navigation />
    <img alt="Vue logo" src="./assets/logo.png" />
    <Table />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import GridDemo from "./components/GridDemo.vue";
import Table from "./components/Table.vue";
import navigation from "./components/navigation.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
    GridDemo,
    Table,
    navigation,
  },

  data() {
    return {
      dataSaham: [],
    };
  },

  mounted() {
    axios.get("http://10.1.0.142:5758/api/saham/").then((response) => (this.dataSaham = response.data));
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
  margin-top: 60px;
}
</style>

<!-- <template>
  <div>
    <ul>
      <li v-for="post in posts" v-text="post.title" :key="post"></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: null,
    };
  },

  mounted() {
    axios.get("https://jsonplaceholder.typcode.com/posts").then((response) => (this.posts = response.data));
  },
};

data: function() {
    return {
      searchQuery: "",
      gridColumns: ["name", "power"],
      gridData: [
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 },
      ],
    };
  },
</script>
 -->
