import { createSlice } from "@reduxjs/toolkit";
import { colors, DARK, LIGHT } from "../../utils/theme";
import { RootState } from "./store";

const initialThemeeState = {
    theme: {
        primary: colors.primaryColor,
        secondary: colors.secondaryColor,
        textPrimart: colors.white,
        textSecondary: colors.white70,
        accent: colors.accentColor
    },
    mode: LIGHT
}
const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeeState,
    reducers: {
        setTheme: (state, action) => {
            if (action.payload === LIGHT) {
                state.theme = {
                    primary: colors.white,
                    secondary: colors.white70,
                    textPrimart: colors.primaryColor,
                    textSecondary: colors.secondaryColor,
                    accent: colors.accentColor
                }
                state.mode = LIGHT
            }
            else {
                state.theme = {
                    primary: colors.primaryColor,
                    secondary: colors.secondaryColor,
                    textPrimart: colors.white,
                    textSecondary: colors.white70,
                    accent: colors.accentColor
                },
                state.mode = DARK
            }
        }
    }
})


export const { setTheme } = themeSlice.actions;
export const theme = (state: RootState) => state.themeReducer.theme;
export const themeReducer = themeSlice.reducer;
