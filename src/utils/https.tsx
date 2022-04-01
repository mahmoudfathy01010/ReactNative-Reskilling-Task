import axios, { Axios } from "axios"

const BASE_URL = "https://newsapi.org/v2";
const topHeadLinesApi = "/everything";
const API_KEY = "9023532f11354ed38c4c22521bc965ef";
export const fetchArticles = async (query:string) => {
    console.log(query);
    return await axios.get(BASE_URL + topHeadLinesApi, { params: {q:query ,apiKey: API_KEY } })
}

export const validateStatus = (status: number) => {
    return status >= 200 && status < 300;
}