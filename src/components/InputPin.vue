<template>
  <div class="container">
    <header>Input Pin</header>

    <input type="text" />
    <button>OK</button>
  </div>
</template>

<script>
export default {
  name: "InputPin",

  data() {
    return {
      pin: "",
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #263238;
  width: 200px;
}

header {
  color: #ffd600;
  margin-bottom: 20px;
  border-bottom: 2px solid #ffd600;
}
</style>
