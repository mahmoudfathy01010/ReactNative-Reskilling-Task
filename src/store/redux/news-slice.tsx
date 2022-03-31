import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../model/article";
interface NewsState{
    list:Article[]
}
const initialNewsState : NewsState = {list: []}
const newsSlice = createSlice({
    name: 'news',
    initialState: initialNewsState,
    reducers:{
        getNewsArticles: (state) =>{

        }
    }
})

export const getNewsArticles = newsSlice.actions;
export const sliceReducer = newsSlice.reducer;