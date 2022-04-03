import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../model/article";
import { RootState } from "./store";
interface ArticleState {
    article: Movie,
}
const initialArticleState: ArticleState = { article: null as any}
const articleSlice = createSlice({
    name: 'article',
    initialState: initialArticleState,
    reducers: {
        setArticle: (state, action) => {
            state.article = action.payload
        }
    }
})

export const { setArticle } = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
