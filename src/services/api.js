import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:3333"
})