import axios from "axios";

export const API = axios.create({
  baseURL: "http://192.168.0.91:3000",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("user-token"),
  },
});
