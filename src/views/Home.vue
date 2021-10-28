<template>
  <div class="container">
    <div class="background">
      <img alt="Vue logo" src="../Assets/logo.png" />
      <h1 style="color: white">Login</h1>

      <div class="register">
        <input type="text" placeholder="Enter Username" />
        <input type="text" placeholder="Enter Password" />
        <router-link to="/about"><button>Login</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  padding: 4%;
}

div {
  display: block;
}

.background:before {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  display: block;
  background-color: #000;
  background-image: url(../Assets/Wallpaper.jpg);
  max-width: 100%;
  height: 100%;
  background-size: cover;
}

.register {
  border: 1px solid yellow;
  margin: 0px 500px 0px 500px;
  height: 450px;
  padding: 50px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
