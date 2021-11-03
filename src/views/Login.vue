<template>
  <div class="container">
    <div class="background">
      <div class="register">
        <form @submit="handleSubmit">
          <img alt="Vue logo" src="../Assets/logo-login.png" />
          <h1 style="color: white">Login</h1>
          <h2>User ID</h2>
          <input type="text" v-model="userId" placeholder="" />
          <h2>Password</h2>
          <input type="password" placeholder="" id="pass" />
          <button class="btn-hidden" v-on:click="hide()">Hidden</button>
          <button class="btn-unhidden" v-on:click="unhide()">Unhide</button> <br />
          <bs-button color="danger" type="submit" v-on:click="userValid()">Login</bs-button>
          <router-link to="/register"><bs-button color="danger" type="submit">Register</bs-button></router-link>
        </form>
      </div>

      <div class="footer">
        <div class="left-side">
          PT.Erdikha Elit Sekuritas<br />
          <span>Member of Indonesia Stock Exchange</span>
        </div>
        <div class="right-side">
          Hotline <br />
          <span>+62 21 398 36 420</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",

  data() {
    return {
      userId: "",
      hiddenPass: true,
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log(e);
    },
    userValid() {
      if (this.userId.length > 5) {
        alert("The user id must be less than 5 character");
      } else {
        this.$router.push("/home-page");
      }
    },

    hide() {
      document.getElementById("pass").setAttribute("type", "password");
    },

    unhide() {
      document.getElementById("pass").setAttribute("type", "text");
    },
  },
};
</script>

<style scoped lang="scss">
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
  filter: brightness(30%);
}

.background img {
  width: 200px;
  height: 200px;
}

.register {
  border: 1px solid yellow;
  margin: 0px 500px 0px 500px;
  height: 550px;
  padding: 50px;
  line-height: 0.5;
}

.register h2 {
  color: white;
  text-align: left;
  font-size: 20px;
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

.footer {
  margin-left: 480px;
  margin-right: 480px;
  display: flex;
  margin-top: 10px;
}

.left-side {
  color: rgb(255, 230, 0);
  text-align: left;
  font-weight: bold;
}

.right-side {
  color: rgb(255, 230, 0);
  text-align: right;
  margin-left: 10px;
  font-weight: bold;
}

span {
  color: white;
}

.eye img {
  width: 10px;
  height: 10px;
}
</style>
