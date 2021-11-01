<template>
  <div class="container">
    <div class="elit-navigation">
      <img src="../Assets/logo-login.png" alt="" />

      <div class="dropdown">
        <button class="menu-parent">Workspace</button>
        <div class="dropdown-content">
          <a href="#">Save Workspace</a>
          <a href="#">Save Workspace to file</a>
          <a href="#">Load Workspace from file</a>
          <a href="#">Reset Workspace to Last Saved</a>
          <a href="#">Reset Workspace to Default</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="menu-parent">Session</button>
        <div class="dropdown-content">
          <a href="#">Portfolio</a>
          <a href="#">Client Stock</a>
          <a href="#">Withdraw Cash</a>
          <a href="#">Change Pin</a>
          <a href="#">Change Password</a>
          <a href="#">Trade Confirmation</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="menu-parent">Quotes</button>
        <div class="dropdown-content">
          <a href="#">Order Book</a>
          <a href="#">Order Book+</a>
          <a href="#">Favorite Stock</a>
          <a href="#">Quote Stock to Composite</a>
          <a href="#">All Stock</a>
          <a href="#">All Indices</a>
          <a href="#">All Broker</a>
          <a href="#">Stock Screener</a>
          <a href="#">Heatmap</a>
          <a href="#">Market Summary</a>
          <a href="#">Order Book Var.1</a>
          <a href="#">Order Book Var.2</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="menu-parent">Top 20</button>
        <div class="dropdown-content">
          <a href="#">Top 20 Stock</a>
          <a href="#">Top Broker</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="menu-parent">Order</button>
        <div class="dropdown-content">
          <a href="#">Buy Order</a>
          <a href="#">Sell Order</a>
          <a href="#">Ammend Order</a>
          <a href="#">Withdraw Order</a>
          <a href="#">Quick Order</a>
          <a href="#">Order List</a>
          <a href="#">Order List With Trades</a>
          <a href="#">Order Tracking</a>
          <a href="#">Order by Stock</a>
          <a href="#">Order Composite</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="menu-parent">Trade</button>
        <div class="dropdown-content">
          <a href="#">Running Trade</a>
          <a href="#">Trade list</a>
          <a href="#">Trade by Stock</a>
          <a href="#">Trades by Broker</a>
          <a href="#">Trades by Stock Historical</a>
          <a href="#">Trades by Broker Historical</a>
          <a href="#">Trades Done by Price</a>
          <a href="#">Trades History by Stock</a>
          <a href="#">Running Trade Var.1</a>
          <a href="#">Running Trade Var.2</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="menu-parent">Chart</button>
        <div class="dropdown-content">
          <a href="#">Advanced Intraday Chart</a>
          <a href="#">Advanced Historical Chart</a>
          <a href="#">Intraday Chart</a>
          <a href="#">Historical Chart</a>
          <a href="#">Market Depth Chart</a>
          <a href="#">Multi Chart</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="menu-parent">Information</button>
        <div class="dropdown-content">
          <a href="#">News</a>
          <a href="#">Company Profile</a>
          <a href="#">Income Statement</a>
          <a href="#">Corporate Action</a>
          <a href="#">Trading Resources</a>
          <a href="#">Special Notation</a>
          <a href="#">IDX Watchlist</a>
        </div>
      </div>
    </div>

    <div class="button-container">
      <button>Fullscreen mode</button>
      <button>Login pin</button>
      <button>Log out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.elit-navigation img {
  width: 20px;
  height: 20px;
  float: left;
  margin-top: 3px;
}

.container {
  box-sizing: border-box;
  margin: -8px;
  background-color: rgba(70, 69, 69, 0.945);
  display: flex;
  padding: 12px 8px 8px 8px;
  align-items: center;
  height: 40px;
  border-bottom: 2px solid rgba(229, 255, 0, 0.753);
  justify-content: space-between;
}

.dropdown {
  display: relative;
  font-size: 12px;
  display: inline-block;
  padding: 0px 5px;
  margin: 5px 0px 0px 5px;
  transition: 1s;
}

.menu-parent {
  text-decoration: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: 1s;
}

.menu-parent:hover {
  background-color: black;
  color: rgb(255, 230, 0);
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 0.5px solid grey;
  border-top: none;
  transition: 0.5s;
}

.dropdown-content a {
  color: rgb(255, 230, 0);
  padding: 5px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  transition: 0.5s;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a:hover {
  background-color: rgb(255, 230, 0);
  color: black;
}

.dropdown:hover .menu-parent {
  background-color: black;
  color: rgb(255, 230, 0);
}

.button-container button {
  margin: 0px 5px;
  background-color: rgb(255, 230, 0);
  border-radius: 1px;
  transition: 0.5s;
}

.button-container button {
  padding: 3px 5px;
  font-size: 10px;
  border-radius: 7px;
  font-family: "Montserrat", sans-serif;
}

.button-container button:hover {
  background-color: black;
  color: white;
}

.picture1 {
  widows: 100px;
  height: 100px;
}
</style>
