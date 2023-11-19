import axios from "axios";

export const baseUrl = "http://13.51.76.217:3001";

export const instance=axios.create({
    baseURL:baseUrl
})