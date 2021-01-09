import axios from "axios";
// import { getToken } from "../token";

const api=axios.create({
    baseURL:"http://192.168.35.179:4000",
    headers: {
        "authorization": window.localStorage.getItem("admin") || '',
        Content_type: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
});

export default api;