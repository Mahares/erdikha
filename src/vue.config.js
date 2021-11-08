module.exports = {
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" },
      proxy: "http://localhost:8080/saham-demo/saham",
    },
  },
};
