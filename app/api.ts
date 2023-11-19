import axios from "axios";

export const baseUrl='http://localhost:3001';

export const instance=axios.create({
    baseURL:baseUrl
})