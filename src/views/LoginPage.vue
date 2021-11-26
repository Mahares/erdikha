<template>
  <div class="big-container">
    <div class="heading-container">
      <div class="logo">
        <img src="../assets/Logo_AO_Black.png" alt="" />
      </div>
      <div class="social-media">
        <ul>
          <li>
            <a href="#"><bs-avatar class="bg-primary text-white m-2" :icon="['fab', 'facebook']" circle color="danger"> </bs-avatar></a>
          </li>
          <li>
            <a href="#"><bs-avatar class="bg-info text-white m-2" :icon="['fab', 'twitter']" circle color="danger"> </bs-avatar></a>
          </li>
          <li>
            <a href="#"><bs-avatar class="bg-success text-white m-2" :icon="['fab', 'whatsapp']" circle color="danger"> </bs-avatar></a>
          </li>
          <li>
            <a href="#"><bs-avatar class="bg-danger text-white m-2" :icon="['fab', 'instagram']" circle color="danger"> </bs-avatar></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="login-container">
      <form action="submit" class="login-field">
        <h1>Register</h1>
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="credential" /><br /><br />
        <div class="my-demo-wrapper text-center"><bs-button color="warning" pill @click="btnRegister()">Register</bs-button></div>
        <div class="forget-password"><a href="https://aoreport.erdikha.com/Hint/ForgetPassword.aspx" target="_blank">Lupa Password</a></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      credential: "",
    };
  },

  methods: {
    btnRegister() {
      axios
        .post("http://localhost:8080/saham-demo/register", {
          email: this.email,
          credential: this.credential,
        })
        .then((response) => console.log(response))
        .then((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Mono:wght@300&display=swap");

.heading-container {
  display: flex;
  background-color: #202731;
  width: 100%;
  justify-content: space-between;
}

.logo {
}

.logo img {
  height: 100px;
  widows: 100px;
  margin-left: 100px;
  margin-top: 7px;
}

.social-media {
  margin: 30px;
}

.social-media ul li {
  list-style: none;
  display: inline-block;
  margin-right: 20px;
  background-color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: 0.6s;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 5);
}

.social-media ul li a {
  cursor: pointer;
  position: relative;
  bottom: 7.5px;
  right: 7.5px;
}

.social-media ul li:hover {
  transform: translate(0, -10px);
}

.login-container {
  margin: 0;
  padding: 0;
  color: white;
  background-color: #202731;
  width: 580px;
  height: 500px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
  box-sizing: border-box;
}

.login-field h1 {
  font-family: "Roboto Mono", monospace;
  text-align: center;
  padding-top: 100px;
}

.login-field input {
  margin-top: 50px;
  margin-left: 140px;
  width: 300px;
  height: 50px;
  background-color: #202731;
  border: 1px solid rgb(230, 230, 29);
  border-radius: 20px;
  justify-content: center;
  text-align: center;
  color: white;
}

.btn {
  margin-bottom: 16px;
  margin-right: 8px;
}

.forget-password {
  text-align: center;
}

.forget-password a {
  color: rgb(230, 230, 29);
  text-decoration: underline;
}
</style>

<style lang="scss" scoped>
.my-demo-wrapper {
  padding: 10px;

  .btn {
    margin-bottom: 16px;
    margin-right: 8px;
  }
}
</style>
