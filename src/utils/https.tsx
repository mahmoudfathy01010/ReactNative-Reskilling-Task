import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const popular = "/movie/popular";
const search = "/search/movie"
const movie = "/movie"
const API_KEY = "5dd85a7606bbd9d15e62b9cfb6fe2fa6";

export const fetchArticles = async (query: string) => {
    if (query.length > 0) {
        console.log(query + "everything")
        return await axios.get(BASE_URL + search, { params: { query: query, api_key: API_KEY } })
    }
    else {
        console.log(query + "top")
        return await axios.get(BASE_URL + popular, { params: { api_key: API_KEY } })
    }
}

export const fetchMovieById = async (id: string) => {
    return await axios.get(BASE_URL + movie + "/" + id, { params: { api_key: API_KEY }});
}

export const validateStatus = (status: number) => {
    return status >= 200 && status < 300;
}