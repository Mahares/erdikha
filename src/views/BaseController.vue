<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <bs-card shadow class="bg-blue-grey darken-3">
          <bs-card-header class="bg-blue-grey darken-3">
            <div class="mb-3 col-12 col-sm text-center">
              <div class="btn-group" role="group" aria-label="Outlined Button Group">
                <bs-button color="warning" outlined @click="btnBuy">Buy</bs-button>
                <bs-button color="warning" outlined @click="btnSell">Sell</bs-button>
                <bs-button color="warning" outlined @click="btnAmmend">Ammend</bs-button>
                <bs-button color="warning" outlined @click="btnWithdraw">Withdraw</bs-button>
              </div>
            </div>
          </bs-card-header>
          <bs-card-body>
            <bs-card-content v-show="isBuy"> <buy-state></buy-state> </bs-card-content>
            <bs-card-content v-show="isSell"> <sell-state></sell-state> </bs-card-content>
            <bs-card-content v-show="isAmmend"> <ammend-state></ammend-state> </bs-card-content>
            <bs-card-content v-show="isWithdraw"> <withdraw-state></withdraw-state> </bs-card-content>
            <bs-card-content>
              <small class="text-muted"> Last updated 3 mins ago </small>
            </bs-card-content>
          </bs-card-body>
          <bs-card-footer>Card Footer</bs-card-footer>
        </bs-card>
      </div>
    </div>
  </div>
</template>

<script>
import BuyState from "../components/BuyState.vue";
import SellState from "../components/SellState.vue";
import AmmendState from "../components/AmmendState.vue";
import WithdrawState from "../components/WithdrawState.vue";
export default {
  name: "BaseController",

  data() {
    return {
      isBuy: false,
      isSell: false,
      isAmmend: false,
      isWithdraw: false,
    };
  },

  methods: {
    btnBuy() {
      this.isBuy = !this.isBuy;
    },

    btnSell() {
      this.isSell = !this.isSell;
    },

    btnAmmend() {
      this.isAmmend = !this.isAmmend;
    },

    btnWithdraw() {
      this.isWithdraw = !this.isWithdraw;
    },
  },

  components: {
    BuyState,
    SellState,
    AmmendState,
    WithdrawState,
  },
};
</script>

<style scoped></style>
