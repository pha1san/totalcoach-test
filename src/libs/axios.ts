import axios from "axios";

// Creating an axios instance with a predefined base URL
const axiosInstance = axios.create({
  baseURL: "https://run.mocky.io/v3", // Base URL for all axios requests
});

export default axiosInstance;
