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
            <bs-card-content v-show="isAmmend"> <ammend-state theOrder="Order"></ammend-state> </bs-card-content>
            <bs-card-content v-show="isWithdraw"> <withdraw-state theOrder="Order"></withdraw-state> </bs-card-content>
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
import BuyState from "../components/StateComponents/BuyState.vue";
import SellState from "../components/StateComponents/SellState.vue";
import AmmendState from "../components/StateComponents/AmmendState.vue";
import WithdrawState from "../components/StateComponents/WithdrawState.vue";
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
      this.isSell = false;
      this.isAmmend = false;
      this.isWithdraw = false;
    },

    btnSell() {
      this.isSell = !this.isSell;
      this.isBuy = false;
      this.isAmmend = false;
      this.isWithdraw = false;
    },

    btnAmmend() {
      this.isAmmend = !this.isAmmend;
      (this.isBuy = false), (this.isSell = false), (this.isWithdraw = false);
    },

    btnWithdraw() {
      this.isWithdraw = !this.isWithdraw;
      (this.isBuy = false), (this.isSell = false), (this.isAmmend = false);
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

<style lang="scss" scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
