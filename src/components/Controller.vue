<template>
  <div class="container">
    <header>Buy</header>
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "Controller",
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
  width: 30rem;
  display: flex;
  flex-direction: column;
}
</style>
