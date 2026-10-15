import axios from "axios";
import { APP_CONFIG } from "@/constants";

export const apiClient = axios.create({
  baseURL: APP_CONFIG.API.BASE_URL,
  timeout: APP_CONFIG.API.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// JWT interceptor will be added after the login flow is complete.