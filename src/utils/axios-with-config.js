import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: "https://opentdb.com",
});

export default axiosWithConfig;
