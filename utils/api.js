import axios from "axios";

// Create an instance of axios with default settings
const api = axios.create({
  baseURL: "https://dummyjson.com", // Set your API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Optional: Add token before requests)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Fetch token if using authentication
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor (Handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
