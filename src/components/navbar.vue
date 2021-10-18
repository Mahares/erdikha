<template>
  <div class="container">
    <div class="elit-logo">
      <img src="../assets/logo-login.png" alt="" />
    </div>
    <nav class="navigation">
      <ul>
        <li><a href="#">Workspace</a></li>
        <li><a href="#">Session</a></li>
        <li><a href="#">Quotes</a></li>
        <li><a href="#">Top 20</a></li>
        <li><a href="#">Order</a></li>
        <li><a href="#">Trade</a></li>
        <li><a href="#">Chart</a></li>
        <li><a href="#">Information</a></li>
      </ul>
    </nav>
    <div class="button-container">
      <button><a href="">Fullscreen mode</a></button>
      <button><a href="">Login pin</a></button>
      <button><a href="">Log out</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.elit-logo img {
  width: 20px;
  height: 20px;
  margin-right: -40px;
}

.container {
  box-sizing: border-box;
  margin: -8px;
  background-color: rgba(80, 75, 75, 0.616);
  display: flex;
  padding: -8px;
  align-items: center;
  height: 30px;
  border-bottom: 2px solid rgba(229, 255, 0, 0.753);
}

.down-arrow {
  width: 40px;
  height: 40px;
}

li,
a {
  text-decoration: none;
  color: white;
}

.navigation {
  list-style: none;
}

.navigation li {
  display: inline-block;
  padding: 0px 5px;
}

.navigation li a {
  font-size: 12px;
}

.button-container button {
  margin: 0px 5px;
  background-color: yellow;
  border-radius: 1px;
}

.button-container button a {
  color: black;
}

.picture1 {
  widows: 100px;
  height: 100px;
}
</style>
