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
    <div class="form-master-container">
      <form @submit="handleSubmit" class="form-container">
        <div class="form-group error">
          <label>UserId</label>
          <input type="text" class="form-control" placeholder="UserId" v-model="userId" />
          <small>Error message</small>
        </div>

        <div class="form-group error">
          <label>Email</label>
          <input type="email" class="form-control" placeholder="Email" v-model="email" />
          <small>Error message</small>
        </div>

        <div class="form-group error">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="password" />
          <small>Error message</small>
        </div>

        <div class="form-group error">
          <label>Confirm Password</label>
          <input type="text" class="form-control" placeholder="Confirm Password" v-model="confPassword" />
          <small>Error message</small>
        </div>

        <bs-button color="danger" type="submit" v-on:click="btnValidation()">SignUp</bs-button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",

  data() {
    return {
      userId: "",
      email: "",
      password: "",
      confPassword: "",
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
    },

    btnValidation() {
      if (this.userId.length > 6) {
        alert("Please enter valid userId");
      }
    },

    setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");

      small.innerText = message;
      formControl.className = "form-control error";
    },
    async addUser() {
      let result = await axios.post("http://localhost:3000/user", {
        userId: this.userId,
        email: this.email,
        password: this.password,
        confPassword: this.confPassword,
      });
      console.warn(result);
    },
  },
};
</script>

<style lang="scss" scoped>
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

.form-master-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  margin: 0;
}

.form-container {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 3);
  width: 400px;
  max-width: 100%;
}

.form-group {
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
}

.form-group label {
  margin-bottom: 5px;
}

.form-group input {
  border: 2px solid black;
  border-radius: 4px;
  display: block;
  font-family: inherit;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 110px;
}

.form-group small {
  visibility: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
}

.form-group .error small {
  color: #e74c3c;
  visibility: visible;
}
</style>
