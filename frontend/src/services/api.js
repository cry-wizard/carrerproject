import axios from "axios";

const API = axios.create({
  baseURL: "https://carrer-page.onrender.com/api"
});

export default API;
