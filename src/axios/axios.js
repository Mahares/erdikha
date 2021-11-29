import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.1.0.92:8080/saham-demo/",
});

export default instance;
