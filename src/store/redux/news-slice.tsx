import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../model/article";
import { RootState } from "./store";
interface NewsState {
    list: Movie[],
    errorMsg: string,
    isLoading: boolean,
}
const initialNewsState: NewsState = { list: [], errorMsg: "", isLoading: false }
const newsSlice = createSlice({
    name: 'news',
    initialState: initialNewsState,
    reducers: {
        getNewsArticles: (state, action) => {
            state.list = action.payload;
            state.errorMsg = "";
            state.isLoading = false;
        },
        setError: (state, action) => {
            state.errorMsg = action.payload;
            state.isLoading = false;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const { getNewsArticles, setError, setIsLoading } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
