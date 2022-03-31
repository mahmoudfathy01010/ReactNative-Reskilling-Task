import axios, { Axios } from "axios"

const BASE_URL = "https://newsapi.org/v2";
const topHeadLinesApi = "/top-headlines";
const API_KEY = "9023532f11354ed38c4c22521bc965ef";
export const fetchArticles = async () => {
   return await axios.get(BASE_URL + topHeadLinesApi, { params: { country: "us", category: "business", apiKey: API_KEY } })
}