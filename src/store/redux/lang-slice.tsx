import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import en from '../../assets/lang/en.json'
import de from '../../assets/lang/de.json'
import { ENGLISH } from "../../utils/lang";


const initialLangState = {
    values: {...en},
    languageCode: 1
}
const langSlice = createSlice({
    name: 'lang',
    initialState: initialLangState,
    reducers: {
        setLang: (state, action) => {
            if(action.payload == ENGLISH){
                state.values = {...en}
                state.languageCode = 1
            }
            else{
                state.values = {...de}
                state.languageCode = 2
            }
        }
    }
})


export const { setLang } = langSlice.actions;
export const langReducer = langSlice.reducer;
