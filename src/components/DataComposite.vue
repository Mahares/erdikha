<template>
  <div class="container">
    <div class="gambar">
      <img src="../Assets/Logo_AO_Black.png" alt="" />
    </div>
    <div class="table-container">
      <table class="table-design">
        <tr>
          <td>Prev: xxxxxxxxxxxxxxx</td>
          <td>High: xxxxxxxxxxxxxxx</td>
          <td>F.Buy: xxxxxxxxxxxxxxx</td>
          <td>D.Buy: xxxxxxxxxxxxxxx</td>
        </tr>
        <tr>
          <td>Op: xxxxxxxxxxxxxxx</td>
          <td>Low: xxxxxxxxxxxxxxx</td>
          <td>F.Sell: xxxxxxxxxxxxxxx</td>
          <td>D.Sell: xxxxxxxxxxxxxxx</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DataComposite",

  async mounted() {
    const response = await axios.get("http://10.1.0.111:9090/api/saham");
    this.orderBooks = response.data.data;
  },
};
</script>

<style scoped>
.container {
  height: 7em;
  padding: 0;
  background-color: grey;
  margin-top: 8px;
  margin-left: -8px;
  margin-right: -8px;
  border-bottom: 1px solid yellow;
  margin-bottom: -15px;
}

.container img {
  float: left;
  height: 110px;
  width: 300px;
}

.table-container {
  float: right;
}

.table-design tr td {
}
</style>
