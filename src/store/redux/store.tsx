import { configureStore } from "@reduxjs/toolkit"
import { newsReducer } from "./news-slice"
import { movieReducer } from "./movie-slice"
import { themeReducer } from "./theme.slice"
import { langReducer } from "./lang-slice"
export const store = configureStore({
    reducer:{
        newsReducer,
        movieReducer,
        themeReducer,
        langReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch