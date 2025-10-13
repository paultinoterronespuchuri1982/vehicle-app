import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500", // si usas 5500
});

export default api;
