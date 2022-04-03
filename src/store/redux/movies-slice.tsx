import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../model/movie";
interface MoviesState {
    list: Movie[],
    errorMsg: string,
    isLoading: boolean,
}
const initialMoviesState: MoviesState = { list: [], errorMsg: "", isLoading: false }
const newsSlice = createSlice({
    name: 'news',
    initialState: initialMoviesState,
    reducers: {
        getNewsMovies: (state, action) => {
            state.list = action.payload;
            state.errorMsg = "";
            state.isLoading = false;
        },
        setError: (state, action) => {
            state.errorMsg = action.payload;
            state.isLoading = false;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const { getNewsMovies, setError, setIsLoading } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
