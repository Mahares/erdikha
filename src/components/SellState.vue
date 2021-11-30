<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <bs-card shadow>
          <bs-card-header class="bg-light-green accent-3 text-white">Sell</bs-card-header>
          <bs-card-body>
            <div class="button-wrapper">
              <bs-card-content>
                <label>Client: </label>
                <input type="text" />
              </bs-card-content>
              <bs-card-content>
                <label>Stock: </label>
                <input type="text" />
              </bs-card-content>
              <bs-card-content>
                <label>Price: </label>
                <input type="text" />
              </bs-card-content>
              <bs-card-content>
                <label>Lots: </label>
                <input type="text" />
              </bs-card-content>
              <bs-card-content>
                <label>Amount: </label>
                <input type="text" />
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
};
</script>

<style>
.button-wrapper label {
  width: 100px;
}
</style>
