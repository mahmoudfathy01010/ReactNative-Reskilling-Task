import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../model/article";
import { RootState } from "./store";
interface ArticleState {
    article: Article,
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
export const article = (state: RootState) => state.articleReducer.article;
export const articleReducer = articleSlice.reducer;
