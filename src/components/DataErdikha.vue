<template>
  <div class="container1">
    <nav>
      <ul>
        <li><a href="">INFOBANK</a></li>
        <li><a href="">PRE-OPEN</a></li>
        <li><a href="">MARGIN</a></li>
        <li><a href="">STOK SPLIT</a></li>
      </ul>
    </nav>

    <div class="data_saham_kiri" v-for="orderBook in orderBooks" :key="orderBook">
      <div class="detail_data_saham_kiri">
        <div v-if="orderBook">
          {{ orderBook.kodeSaham }}
        </div>
      </div>

      <div class="detail_data_saham_kiri" v-for="orderBook in orderBooks" :key="orderBook">
        {{ orderBook.hargaTerakhir }}
      </div>
    </div>
    <div class="data_saham_kanan" v-for="orderBook in orderBooks" :key="orderBook">
      <table>
        <tr>
          <th>Change: {{ orderBook.changes }}</th>
          <th>OPEN: {{ orderBook.priceOpen }}</th>
        </tr>

        <tr>
          <th>Change %: {{ orderBook.changePersen }}%</th>
          <th>High: {{ orderBook.priceHigh }}</th>
        </tr>

        <tr>
          <th>Close: {{ orderBook.priceClose }}</th>
          <th>Low: {{ orderBook.priceLow }}</th>
        </tr>

        <tr>
          <th>F.Sell: {{ orderBook.foreignSale }}</th>
          <th>D.Buy: {{ orderBook.domesticBuy }}</th>
        </tr>
      </table>
    </div>

    <div class="table-wrapper" v-for="orderBook in orderBooks" :key="orderBook">
      <table class="fl-table" v-for="child in orderBook.orderbook" :key="child">
        <thead>
          <tr class="heading-row">
            <th>Ord</th>
            <th>Lot</th>
            <th>Bid</th>
            <th>Offer</th>
            <th>Lot</th>
            <th>Ord</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ child.bidOrder }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.bidPrice }}</td>
            <td>{{ child.lotPrice }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.offerOrder }}</td>
          </tr>
          <tr>
            <td>{{ child.bidOrder }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.bidPrice }}</td>
            <td>{{ child.lotPrice }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.offerOrder }}</td>
          </tr>
          <tr>
            <td>{{ child.bidOrder }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.bidPrice }}</td>
            <td>{{ child.lotPrice }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.offerOrder }}</td>
          </tr>
          <tr>
            <td>{{ child.bidOrder }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.bidPrice }}</td>
            <td>{{ child.lotPrice }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.offerOrder }}</td>
          </tr>
          <tr>
            <td>{{ child.bidOrder }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.bidPrice }}</td>
            <td>{{ child.lotPrice }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.offerOrder }}</td>
          </tr>
          <tr>
            <td>{{ child.bidOrder }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.bidPrice }}</td>
            <td>{{ child.lotPrice }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.offerOrder }}</td>
          </tr>
          <tr>
            <td>{{ child.bidOrder }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.bidPrice }}</td>
            <td>{{ child.lotPrice }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.offerOrder }}</td>
          </tr>
          <tr>
            <td>{{ child.bidOrder }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.bidPrice }}</td>
            <td>{{ child.lotPrice }}</td>
            <td>{{ child.lotOffer }}</td>
            <td>{{ child.offerOrder }}</td>
          </tr>
        </tbody>

        <tbody></tbody>
      </table>
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "Table",
  props: ["id"],

  data: function() {
    return {
      orderBooks: undefined,
    };
  },

  async mounted() {
    //const response = await axios.get("http://10.1.0.232:9090/api/saham/" + this.orderBooks);
    //this.orderBooks = response.data;
    fetch("http://10.1.0.232:9090/api/saham/")
      .then((res) => res.json())
      .then((data) => (this.orderBooks = data.data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.container1 {
  background-color: black;
  width: 50%;
  height: auto;
}

nav {
  padding-left: 0;
  margin-left: 0;
}

nav ul {
  text-decoration: none;
  list-style: none;
  text-align: left;
}

nav ul li {
  display: inline-block;
  margin-right: 0.5em;
  margin-top: 1em;
}

nav ul li a {
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.5em;
  text-decoration: none;
}

.data_saham_kiri {
  text-align: left;
  position: absolute;
}

.detail_data_saham_kiri {
  font-size: 2em;
  color: white;
}

.data_saham_kanan {
  float: right;
}

.data_saham_kanan table th {
  padding-right: 5em;
  color: white;
}

.tabel_saham {
  margin-top: 8em;
}

.tabel_saham th td {
  padding-right: 2em;
  background-color: orange;
  color: yellow;
}

.tabel_saham tr td {
  color: white;
}

/* Table Styles */

.table-wrapper {
  margin-top: 130px;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  height: 200px;
  display: block;
}

.fl-table {
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: black;
  color: white;
}

.fl-table td,
.fl-table th {
  text-align: center;
  padding: 8px;
}

.fl-table td {
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
}

.fl-table thead th {
  color: yellow;
  background: grey;
}

.fl-table thead th:nth-child(odd) {
  color: yellow;
  background: grey;
}

.fl-table tr:nth-child(even) {
  background: rgba(128, 128, 128, 0.308);
  color: white;
}

/* Responsive */
</style>

<!-- @media (max-width: 767px) {
  .fl-table {
    display: block;
    width: 100%;
  }
  .table-wrapper:before {
    content: "Scroll horizontally >";
    display: block;
    text-align: right;
    font-size: 11px;
    color: white;
    padding: 0 0 10px;
  }
  .fl-table thead,
  .fl-table tbody,
  .fl-table thead th {
    display: block;
  }
  .fl-table thead th:last-child {
    border-bottom: none;
  }
  .fl-table thead {
    float: left;
  }
  .fl-table tbody {
    width: auto;
    position: relative;
    overflow-x: auto;
  }
  .fl-table td,
  .fl-table th {
    padding: 20px 0.625em 0.625em 0.625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;
  }
  .fl-table thead th {
    text-align: left;
    border-bottom: 1px solid #f7f7f9;
  }
  .fl-table tbody tr {
    display: table-cell;
  }
  .fl-table tbody tr:nth-child(odd) {
    background: none;
  }
  .fl-table tr:nth-child(even) {
    background: transparent;
  }
  .fl-table tr td:nth-child(odd) {
    background: #f8f8f8;
    border-right: 1px solid #e6e4e4;
  }
  .fl-table tr td:nth-child(even) {
    border-right: 1px solid #e6e4e4;
  }
  .fl-table tbody td {
    display: block;
    text-align: center;
  } -->

<!-- <table class="tabel_saham">
      <th>
        <td>Ord</td>
        <td>Lot</td>
        <td>Bid</td>
        <td>Offer</td>
        <td>Lot</td>
        <td>Ord</td>
        <tr>
        <td>1000</td>
        <td>1000</td>
        <td>1000</td>
        <td>1000</td>
        <td>1000</td>
        <td>1000</td>
      </tr>
      </th>
    </table> -->
