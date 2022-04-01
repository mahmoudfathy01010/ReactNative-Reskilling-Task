import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { colors } from "../../utils/theme"
interface ThemeState {
    style: {
        backgroundColor: string
    },
    isLight: boolean
}
const initialThemeState: ThemeState = { style: { backgroundColor: colors.secondaryColor } , isLight :true }
const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        setTheme: (state, action) => {
            state.style = action.payload.style
            state.isLight = !state.isLight
        }
    }
})

export const { setTheme } = themeSlice.actions;
export const style = (state: RootState) => state.themeReducer.style;
export const themeReducer = themeSlice.reducer;
