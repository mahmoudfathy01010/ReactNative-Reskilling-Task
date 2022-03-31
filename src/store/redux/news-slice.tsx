import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../model/article";
import { RootState } from "./store";
interface NewsState {
    list: Article[],
    errorMsg: string
}
const initialNewsState: NewsState = { list: [], errorMsg: "" }
const newsSlice = createSlice({
    name: 'news',
    initialState: initialNewsState,
    reducers: {
        getNewsArticles: (state, action) => {
        },
        setError: (state, action) => {
        }
    }
})

export const { getNewsArticles } = newsSlice.actions;
export const articles = (state: RootState) => state.sliceReducer.list;
export const error = (state: RootState) => state.sliceReducer.errorMsg;
export const sliceReducer = newsSlice.reducer;
