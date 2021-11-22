<template>
  <div>
    <div class="my-demo-wrapper">
      <bs-appbar class="bg-blue-grey darken-4" shadow>
        <bs-appbar-title class="text-white" title="Erdikha Elit Sekuritas"> </bs-appbar-title>
        <bs-spacer></bs-spacer>
        <div class="functional">
          <button>Input PIN</button>
          <button>Logout</button>
        </div>
      </bs-appbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
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
</style>
