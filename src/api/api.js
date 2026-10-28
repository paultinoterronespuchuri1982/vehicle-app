import axios from "axios";

// Endereço do servidor REST (json-server). Em um celular físico, "localhost"
// aponta para o próprio aparelho: use o IP da sua máquina na rede local.
// Exemplo: EXPO_PUBLIC_API_URL=http://192.168.0.10:3001 npx expo start
const BASE_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export default api;
