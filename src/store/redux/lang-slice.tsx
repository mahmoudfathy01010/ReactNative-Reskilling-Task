import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import en from '../../assets/lang/en.json'

const initialLangState = {
    langCode: 'en',
    values: {...en}
}
const langSlice = createSlice({
    name: 'lang',
    initialState: initialLangState,
    reducers: {
        setLang: (state, action) => {
            
        }
    }
})


export const { setLang } = langSlice.actions;
export const langValues = (state: RootState) => state.langReducer.values;
export const langReducer = langSlice.reducer;
