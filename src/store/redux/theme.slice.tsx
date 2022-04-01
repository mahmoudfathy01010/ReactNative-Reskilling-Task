import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../../utils/theme";
import { RootState } from "./store";

const initialThemeeState = {
    theme: {
        dark: false,
        colors: {
            primary: colors.primaryColor,
            background: colors.white,
            card: colors.white70,
            text: colors.accentColor,
            border: 'rgb(199, 199, 204)',
            notification: colors.secondaryColor,
        },
    }
}
const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeeState,
    reducers: {
        setTheme: (state, action) => {
            if(action.payload === 'dark'){
                state.theme = {
                    dark: true,
                    colors: {
                        primary: colors.white,
                        background: colors.primaryColor,
                        card: colors.accentColor,
                        text: colors.white70,
                        border: 'rgb(199, 199, 204)',
                        notification: colors.secondaryColor,
                    },
                }
            }
            else{
                state.theme = {
                    dark: false,
                    colors: {
                        primary: colors.primaryColor,
                        background: colors.white,
                        card: colors.white70,
                        text: colors.accentColor,
                        border: 'rgb(199, 199, 204)',
                        notification: colors.secondaryColor,
                    },
                }
            }
        }
    }
})


export const { setTheme } = themeSlice.actions;
export const theme = (state: RootState) => state.themeReducer.theme;
export const themeReducer = themeSlice.reducer;
