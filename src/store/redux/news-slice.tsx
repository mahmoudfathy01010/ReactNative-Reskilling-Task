import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../model/article";
import { RootState } from "./store";
interface NewsState {
    list: Article[],
    errorMsg: string,
    isLoading: boolean
}
const initialNewsState: NewsState = { list: [], errorMsg: "", isLoading: false }
const newsSlice = createSlice({
    name: 'news',
    initialState: initialNewsState,
    reducers: {
        getNewsArticles: (state, action) => {
            state.list = action.payload;
        },
        setError: (state, action) => {
            state.errorMsg = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const { getNewsArticles, setError, setIsLoading } = newsSlice.actions;
export const articles = (state: RootState) => state.sliceReducer.list;
export const error = (state: RootState) => state.sliceReducer.errorMsg;
export const isLoading = (state: RootState) => state.sliceReducer.isLoading;
export const sliceReducer = newsSlice.reducer;
