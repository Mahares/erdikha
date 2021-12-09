<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="offset-lg-3">
        <bs-card shadow>
          <bs-card-header class="bg-light-green accent-3 text-white">Sell</bs-card-header>
          <bs-card-body>
            <div class="button-wrapper">
              <bs-card-content>
                <label>{{ theClient }}: </label>
                <input type="text" />
              </bs-card-content>
              <bs-card-content>
                <label>{{ theStock }}: </label>
                <input type="text" />
              </bs-card-content>
              <bs-card-content>
                <label>{{ thePrice }}: </label>
                <input type="number" />
              </bs-card-content>
              <bs-card-content>
                <label>{{ theLots }}: </label>
                <input type="number" />
              </bs-card-content>
              <bs-card-content>
                <label>{{ theAmount }}: </label>
                <input type="number" />
              </bs-card-content>
            </div>
          </bs-card-body>
          <bs-card-footer class="text-center"><bs-button color="success">Sell</bs-button></bs-card-footer>
        </bs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SellState",

  props: {
    theClient: {
      type: String,
      default: "Client",
    },

    theStock: {
      type: String,
      default: "Stock",
    },

    thePrice: {
      type: String,
      default: "Price",
    },

    theLots: {
      type: String,
      default: "Lots",
    },

    theAmount: {
      type: String,
      default: "Amount",
    },
  },
};
</script>

<style>
.button-wrapper label {
  width: 100px;
}
</style>
