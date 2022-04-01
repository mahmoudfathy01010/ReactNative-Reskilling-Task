import axios, { Axios } from "axios"

const BASE_URL = "https://newsapi.org/v2";
const topHeadLinesApi = "/top-headlines";
const everythingApi = "/everything"
const API_KEY = "9824c0c3006945f999909134fa45f473";
export const fetchArticles = async (query:string) => {
    if(query.length>0){
        console.log(query + "everything")
        return await axios.get(BASE_URL + everythingApi, { params: {q:query ,apiKey: API_KEY } })
    }
    else{
        console.log(query + "top")
        return await axios.get(BASE_URL + topHeadLinesApi, { params: {country:"us" ,apiKey: API_KEY } })
    }
}

export const validateStatus = (status: number) => {
    return status >= 200 && status < 300;
}