import axios, { Axios } from "axios"

const BASE_URL = "https://newsapi.org/v2";
const topHeadLinesApi = "/everything";
const API_KEY = "3e35d1236b194670a96df6d4b5adc033";
export const fetchArticles = async () => {
    return await axios.get(BASE_URL + topHeadLinesApi, { params: {q:"tesla" ,apiKey: API_KEY } })
}

export const validateStatus = (status: number) => {
    return status >= 200 && status < 300;
}