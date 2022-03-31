import { configureStore } from "@reduxjs/toolkit"
import { sliceReducer } from "./news-slice"
export const store = configureStore({
    reducer:{
        sliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
