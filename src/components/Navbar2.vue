<template>
  <div class="container">
    <nav class="navigation">
      <ul>
        <li><a href="#">BUY</a></li>
        <li><a href="#">SELL</a></li>
        <li><a href="#">HEATMAP</a></li>
        <li><a href="#">CHART</a></li>
        <li><a href="#">MARKET SUMMARY</a></li>
        <li><a href="#">NEWS</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar2",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.container {
  height: 40px;
  background-color: rgb(85, 84, 84);
}

.navigation ul {
  list-style-type: none;
  float: left;
  margin-left: 8px;
}

.navigation ul li {
  display: inline-block;
  margin-right: 15px;
  margin-top: 10px;
  background-color: black;
}

.navigation ul li a {
  text-decoration: none;
  color: white;
  text-align: center;
  border: 1px solid rgb(209, 209, 107);
  padding: 4px 6px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;
}

.navigation ul li a:hover {
  color: black;
  background-color: rgb(243, 227, 1);
}
</style>
