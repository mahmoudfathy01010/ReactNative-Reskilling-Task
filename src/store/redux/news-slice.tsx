import { createSlice } from "@reduxjs/toolkit";
interface NewsState{
    list:[]
}
const initialNewsState : NewsState = {list: []}
const newsSlice = createSlice({
    name: 'news',
    initialState: initialNewsState,
    reducers:{

    }
})