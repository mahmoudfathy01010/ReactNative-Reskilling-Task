import { configureStore } from "@reduxjs/toolkit"
import { sliceReducer } from "./news-slice"
import { articleReducer } from "./article-slice"
export const store = configureStore({
    reducer:{
        sliceReducer,
        articleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch