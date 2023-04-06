import axios from "axios";

const api = axios.create({
    // baseURL: "https://finance-manager-nzq4.onrender.com"
    baseURL: "http://127.0.0.1:3000"

})

export default api
