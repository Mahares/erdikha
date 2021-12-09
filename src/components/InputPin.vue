<template>
  <div class="container">
    <div class="input-pin">
      <header>Input Pin</header>

      <input type="number" v-model="pins" />
      <bs-button color="warning" pill class="w-10 h-50 mt-1" @click="btnSubmit()">OK</bs-button>
    </div>
  </div>
</template>

<script>
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
        this.showSuccessNotification();
        this.btnPressed();
      }
    },

    showErrorNotification() {
      this.$notification.error("PIN Invalid", "Error");
    },

    showErrorNotificationLength() {
      this.$notification.error("PIN cannot be more than 4 digit", "Error");
    },

    showSuccessNotification() {
      this.$notification.success("Pin validated", "Success");
    },

    btnPressed() {
      this.$store.commit("btnInputPin");
    },
  },
};
</script>
x

<style scoped>
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.26);

  z-index: 100;
  max-width: 100%;
  height: 100%;
}

.input-pin {
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
