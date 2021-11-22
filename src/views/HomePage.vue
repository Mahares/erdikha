<template>
  <div id="home-page">
    <TheHeader />
    <DataSaham />
  </div>
</template>

<script>
import DataSaham from "../components/DataSaham.vue";
import TheHeader from "../components/TheHeader.vue";

export default {
  name: "HomePage",

  components: {
    TheHeader,
    DataSaham,
  },
};
</script>

<style scoped></style>
