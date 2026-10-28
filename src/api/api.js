import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // json-server (npm run json-server)
});

export default api;
