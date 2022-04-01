import { configureStore } from "@reduxjs/toolkit"
import { sliceReducer } from "./news-slice"
import { articleReducer } from "./article-slice"
import { themeReducer } from "./theme.slice"
export const store = configureStore({
    reducer:{
        sliceReducer,
        articleReducer,
        themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch