<template>
  <div class="container">
    <header>Input Pin</header>

    <input type="number" v-model="pins" />
    <bs-button color="warning" pill class="w-10 h-50 mt-1" @click="btnSubmit()">OK</bs-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "InputPin",

  data() {
    return {
      pins: "",
    };
  },

  methods: {
    btnSubmit() {
      if (this.pins == "" || this.pins != "1234") {
        this.showErrorNotification();
      } else if (this.pins.length > 4) {
        this.showErrorNotificationLength();
      } else {
        axios
          .post("http://10.1.0.240:8080/saham-demo/pins", {
            pins: this.pins,
          })
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }
    },

    showErrorNotification() {
      this.$notification.error("PIN Invalid", "Error");
    },

    showErrorNotificationLength() {
      this.$notification.error("PIN cannot be more than 4 digit", "Error");
    },
  },
};
</script>
x

<style scoped>
.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  background-color: #202731;
  width: 300px;
}

header {
  color: #ffd600;
  margin-bottom: 20px;
  border-bottom: 2px solid #ffd600;
}

input {
  margin-right: 4px;
  width: 80px;
}

button {
  font-size: 15px;
}
</style>
