// src/api/axiosInstance.js
import axios from "axios";
import { API_BASE_URL } from "../config/env";

// Create instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // ✅ set via .env
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add token (from localStorage or Redux)
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     // Example: Encrypt payload before sending
//     // if(config.data) config.data = encryptData(config.data);

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // 🔹 Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Example: Decrypt response
//     // if(response.data) response.data = decryptData(response.data);

//     return response.data; // Always return normalized data
//   },
//   async (error) => {
//     // Handle Unauthorized (token expired)
//     if (error.response?.status === 401) {
//       // Refresh token flow or logout
//       console.error("Session expired, logging out...");
//       localStorage.removeItem("authToken");
//       window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
