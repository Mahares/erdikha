<template>
  <div class="big-container">
    <div class="left-container" v-for="orderBook in orderBooks" :key="orderBook.id">
      <div class="my-demo-wrapper">
        <bs-text-field placeholder="Placeholder" floating-label outlined datalist="my-list1" class="mr-1 ml-1">
          <label>Tipe Saham</label>
        </bs-text-field>
        <datalist id="my-list1">
          <option v-for="tipe in tipeSaham" :key="tipe">{{ tipe }}</option>
        </datalist>

        <bs-text-field placeholder="Placeholder" floating-label outlined datalist="my-list2">
          <label>Nama Saham</label>
        </bs-text-field>
        <datalist id="my-list2">
          <option v-for="saham in namaSaham" :key="saham">{{ saham }}</option>
        </datalist>
      </div>

      <div class="nav-wrapper">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>

      <div class="core-data-saham">
        <div class="data-saham-kiri">
          <h1>{{ orderBook.kodeSaham }}</h1>
          <h1>{{ orderBook.lastPrice }}</h1>
        </div>

        <table>
          <tr>
            Change:
            {{
              orderBook.changeValue
            }}
          </tr>
          <tr>
            Change%:
            {{
              orderBook.changePercent
            }}
          </tr>
          <tr>
            Close:
            {{
              orderBook.priceClose
            }}
          </tr>
          <tr>
            F.Sell:
            {{
              orderBook.foreignSell
            }}
          </tr>
        </table>

        <table>
          <tr>
            Open:
            {{
              orderBook.priceOpen
            }}
          </tr>
          <tr>
            High:
            {{
              orderBook.priceHigh
            }}
          </tr>
          <tr>
            Low:
            {{
              orderBook.priceLow
            }}
          </tr>
          <tr>
            D.Buy:
            {{
              orderBook.domesticBuy
            }}
          </tr>
        </table>
      </div>
    </div>

    <div class="separator"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DataSaham",

  data() {
    return {
      namaSaham: ["BBCA", "AALI", "ANTM", "BBRI"],
      tipeSaham: ["Reguler", "Tradisional", "Negosiasi"],
      orderBooks: [],
    };
  },

  async mounted() {
    const response = await axios.get("http://10.1.0.137:8080/saham-demo/saham");
    this.orderBooks = response.data.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20px auto;
  min-height: 100%;
  background-color: white;
}

.my-demo-wrapper {
  display: flex;
}

.nav-wrapper {
  margin-top: 15px;
}

.nav-wrapper ul {
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
}

.nav-wrapper ul li {
  text-decoration: none;
  list-style: none;
  margin-right: 15px;
  border: 2px solid yellow;
  background-color: #202731;
  padding: 5px;
  border-radius: 20px;
}

.core-data-saham {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.separator {
  margin-top: 1em;
}
</style>
