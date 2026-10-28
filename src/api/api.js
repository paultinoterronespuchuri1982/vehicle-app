import axios from "axios";

// In Expo, only variables prefixed with EXPO_PUBLIC_ reach the app bundle.
// Put the real backend URL there (see .env.example). Never put secrets in the app.
const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || "http://localhost:3001",
  timeout: 10000,
});

export default api;
