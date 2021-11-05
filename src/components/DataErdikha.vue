<template>
  <div class="container">
    <div class="container-saham" v-for="orderBook in orderBooks" :key="orderBook.id">
      <nav>
        <ul>
          <li><a href="">INFOBANK</a></li>
          <li><a href="">PRE-OPEN</a></li>
          <li><a href="">MARGIN</a></li>
          <li><a href="">STOK SPLIT</a></li>
        </ul>
      </nav>
      <div class="data_saham_kiri">
        {{ orderBook.kodeSaham }}<br />

        {{ orderBook.hargaTerakhir }}
      </div>
      <div class="data_saham_kanan">
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

      <div class="table-wrapper">
        <table class="header-doang">
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
        </table>
      </div>
      <div class="table-wrapper" v-for="childBooks in orderBook.orderbook" :key="childBooks.id">
        <table class="fl-table">
          <tbody>
            <tr>
              <td>{{ childBooks.bidOrder }}</td>
              <td>{{ childBooks.bidLot }}</td>
              <td>{{ childBooks.bidPrice }}</td>
              <td>{{ childBooks.offerPrice }}</td>
              <td>{{ childBooks.offerLot }}</td>
              <td>{{ childBooks.offerOrder }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrapper">
        <table class="footer-doang">
          <tbody>
            <tr>
              <td>{{ orderBook.changes }}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tbody></tbody>
        </table>
      </div>

      <div class="separator"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DataErdikha",

  data: function() {
    return {
      orderBooks: undefined,
      childBooks: undefined,
      totalOrder: undefined,
    };
  },

  mounted() {
    axios.get("http://10.1.0.146:9090/api/saham").then((response) => (this.orderBooks = response.data.data));
  },
};
</script>

<style scoped>
.container {
  width: 50%;
}

nav {
  margin-left: -20px;
  margin-bottom: 30px;
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

.container-saham {
  background-color: black;
}

.data_saham_kiri {
  text-align: left;

  font-size: 2em;
  color: white;
  float: left;
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
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  display: block;
  clear: both;
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
  table-layout: fixed;
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

.fl-table thead th:nth-child(odd) {
  color: yellow;
  background: grey;
}

.fl-table tr:nth-child(even) {
  background: rgba(128, 128, 128, 0.308);
  color: white;
}

.header-doang {
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: black;
  color: white;
  table-layout: fixed;
}

.header-doang th {
  text-align: center;
  padding: 8px;
  border-right: 2px solid white;
}

.header-doang {
  color: yellow;
  background: grey;
}

.footer-doang {
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;

  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: black;
  color: white;
  table-layout: fixed;
  border-top: 1px solid white;
}

.footer-doang td,
.footer-doang th {
  text-align: center;
  padding: 8px;
}

.footer-doang td {
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
}

.footer-doang thead th:nth-child(odd) {
  color: yellow;
  background: grey;
}

.footer-doang tr:nth-child(even) {
  background: rgba(128, 128, 128, 0.308);
  color: white;
}

.separator {
  margin-top: 1em;
}

/* Responsive */
</style>
<!-- Sisa Table -->

<!--<tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>-->
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
