import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const api = axios.create({
  baseURL: import.meta.env.VITE_Backend_Url,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = token ? token : `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

export const registerUser = (data) =>
  api.post("/user/register", data, { withCredentials: true });
export const depositMoney = (data) =>
  api.post("/transactions/deposit", data, {
    withCredentials: true,
  });
export const withdrawMoney = (data) =>
  api.post("/transactions/withdraw", data, { withCredentials: true });
export const transferMoney = (data) =>
  api.post("/transactions/transfer", data, { withCredentials: true });
export const fetchHistory = () =>
  api.get("/transactions/history", { withCredentials: true });
