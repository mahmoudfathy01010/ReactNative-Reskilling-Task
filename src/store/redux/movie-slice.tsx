import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../model/article";
interface MovieState {
    movie: Movie,
    errorMsg: string,
    isLoading: boolean,
}
const initialMovieState: MovieState = { movie: null as any, errorMsg: "", isLoading: false }
const movieSlice = createSlice({
    name: 'movie',
    initialState: initialMovieState,
    reducers: {
        getMovie: (state, action) => {
            state.movie = action.payload;
            state.errorMsg = "";
            state.isLoading = false;
        },
        setMovieDetailsError: (state, action) => {
            state.errorMsg = action.payload;
            state.isLoading = false;
        },
        setMovieDetailsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const { getMovie, setMovieDetailsError, setMovieDetailsLoading } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
