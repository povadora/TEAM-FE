import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000, // Adjust timeout as needed
});

export default axiosInstance;
