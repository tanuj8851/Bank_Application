import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export default api;

export const registerUser = (data) => api.post("/user/register", data);
// export const logoutUser = () => api.post("/user/logout");
export const depositMoney = (data) => api.post("/transactions/deposit", data);
export const withdrawMoney = (data) => api.post("/transactions/withdraw", data);
export const transferMoney = (data) => api.post("/transactions/transfer", data);
export const fetchHistory = () => api.get("/transactions/history");
