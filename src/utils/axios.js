import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BACK_BASE_URL,
});

export default instance;
