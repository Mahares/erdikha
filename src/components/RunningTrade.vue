<template>
  <div class="container">
    <input type="text" v-model="post.kodeSaham" placeholder="Kode Saham" />
    <input type="text" v-model="post.namaSaham" placeholder="Nama Saham" />
    <input type="text" v-model="post.lastPrice" placeholder=" Last Price" />
    <input type="text" v-model="post.changeValue" placeholder="Change Value" />
    <input type="text" v-model="post.changePercent" placeholder="Change Percent" />
    <input type="text" v-model="post.priceOpen" placeholder="Price Close" />
    <input type="text" v-model="post.priceHigh" placeholder="Price Open" />
    <input type="text" v-model="post.priceLow" placeholder="Price High" />
    <input type="text" v-model="post.foreignSell" placeholder="Price Low" />
    <input type="text" v-model="post.domesticBuy" placeholder="Foreign Sell" />

    <button v-on:click="submitButton()">Submit</button>
  </div>
</template>

<script>
/* import axios from "axios"; */
export default {
  name: "RunningTrade",

  data() {
    return {
      post: {
        kodeSaham: "",
        namaSaham: "",
        lastPrice: 0,
        changeValue: 0,
        changePercent: 0,
        priceClose: 0,
        priceOpen: 0,
        priceHigh: 0,
        priceLow: 0,
        foreignSell: 0,
        domesticBuy: 0,
      },
    };
  },

  /* methods: {
    async submitButton() {
      const result = await axios.post("http://localhost:3000/user", this.post);
      console.warn(result);
    },
  }, */
};
</script>

<style scoped>
.container {
  max-width: 300px;
  float: right;
}
</style>
