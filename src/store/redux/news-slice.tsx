import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../model/article";
import { RootState } from "./store";
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
export const articles = (state: RootState) => state.sliceReducer.list 
export const sliceReducer = newsSlice.reducer;
