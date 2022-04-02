import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../../utils/theme";
import { RootState } from "./store";

const initialThemeeState = {
    theme: {
        primary: colors.primaryColor,
        secondary: colors.secondaryColor,
        textPrimart: colors.white,
        textSecondary: colors.white70,
        accent: colors.accentColor
    }
}
const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeeState,
    reducers: {
        setTheme: (state, action) => {
            if (action.payload === 'light') {
                state.theme = {
                    primary: colors.white,
                    secondary: colors.white70,
                    textPrimart: colors.primaryColor,
                    textSecondary: colors.secondaryColor,
                    accent: colors.accentColor
                }
            }
            else {
                state.theme = {
                    primary: colors.primaryColor,
                    secondary: colors.secondaryColor,
                    textPrimart: colors.white,
                    textSecondary: colors.white70,
                    accent: colors.accentColor
                }
            }
        }
    }
})


export const { setTheme } = themeSlice.actions;
export const theme = (state: RootState) => state.themeReducer.theme;
export const themeReducer = themeSlice.reducer;
