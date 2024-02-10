import axios from "axios";


export const api = axios.create({
    baseURL: "http://20.56.0.251:5000" ,
});
