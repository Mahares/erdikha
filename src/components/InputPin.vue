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
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  background-color: #202731;
}

header {
  color: #ffd600;
  margin-bottom: 20px;
  border-bottom: 2px solid #ffd600;
}
</style>
