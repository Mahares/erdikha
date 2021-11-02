<template>
  <div class="container">
    <div class="img-container">
      <div class="img-left">
        <img src="../Assets/Logo_AO_Black.png" alt="" />
      </div>
      <div class="img-right">
        <img src="../Assets/logo-login.png" alt="" />
      </div>
      <div class="img-central"></div>
      <div class="img-bottom">
        <img src="../Assets/Astronot.png" alt="" />
      </div>
    </div>

    <h1>
      Pendaftaran
    </h1>
    <form @submit.prevent="methodRegister" class="form-register">
      <div>
        <p>Username</p>
        <input type="text" v-model="email" placeholder="" />
      </div>
      <div>
        <p>Password</p>
        <input type="text" v-model="password" placeholder="" />
      </div>
      <br />
      <div>
        <button type="submit" v-on:click="addUser()">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async addUser() {
      let result = await axios.post("http://localhost:3000/user", {
        data: {
          email: this.email,
          password: this.password,
        },
      });
      console.warn(result);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0;
}

.img-container {
  margin: 25px;
}

.img-left img {
  float: left;
  width: 260px;
  height: 150px;
}

.img-right img {
  float: right;
  width: 120px;
  height: 120px;
}

.img-bottom img {
  float: clear;
  width: 300px;
  height: 300px;
  margin-right: 150px;
}

.form-register {
}
</style>
