<template>
  <div class="container">
    <div class="background">
      <img alt="Vue logo" src="../Assets/logo-login.png" />
      <h1 style="color: white">Login</h1>

      <div class="register">
        <h2>User ID</h2>
        <input type="text" v-model="name" placeholder="" />
        <h2>Password</h2>
        <input type="text" v-model="password" placeholder="" />
        <router-link to="/about"><bs-button color="danger">Login</bs-button></router-link>
      </div>
    </div>
    <mdb-carousel :interval="8000" slide :items="items"></mdb-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
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

.background img {
  width: 200px;
  height: 200px;
}

.register {
  border: 1px solid yellow;
  margin: 0px 500px 0px 500px;
  height: 450px;
  padding: 50px;
}

.register h2 {
  color: white;
  text-align: left;
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
  margin-bottom: 16px;
  margin-right: 8px;
}

.input1 {
  background-color: none;
}
</style>
