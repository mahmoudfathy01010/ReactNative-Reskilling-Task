import { AnyAction } from 'redux'
import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'
import { fetchMovies, fetchMovieById, validateStatus } from '../../utils/https'
import { getNewsMovies, setError, setIsLoading } from './movies-slice'
import { Movie } from '../model/movie'
import { getMovie, setMovieDetailsError, setMovieDetailsLoading } from './movie-slice'

export const thunkGetMovies =
    (query: string, isRefreshing = false): ThunkAction<void, RootState, unknown, AnyAction> =>
        async dispatch => {
            const getData = async (): Promise<Movie[]> => {
                if (!isRefreshing) {
                    dispatch(setIsLoading(true));
                }
                const response = await fetchMovies(query);
                if (!validateStatus(response.status)) {
                    throw new Error('Sorry, Could not fetch movies data!');
                }
                else {
                    let movies: Movie[] = response.data.results;
                    console.log("data" +response.status)
                    return movies;
                }
            }
            try {
                let movies: Movie[] = await getData();
                dispatch(getNewsMovies(movies));

            }
            catch (err) {
                console.log(err);
                dispatch(setError('Sorry, Could not fetch movies data!'));
            }

        }

export const thunkGetMovieById =
    (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
        async dispatch => {
            const getData = async (): Promise<Movie> => {
                    dispatch(setMovieDetailsLoading(true));
                const response = await fetchMovieById(id);
                if (!validateStatus(response.status)) {
                    throw new Error('Sorry, Could not fetch movie details!');
                }
                else {
                    let movie: Movie = response.data;
                    return movie;
                }
            }
            try {
                let movie: Movie = await getData();
                dispatch(getMovie(movie));
            }
            catch (err) {
                console.log(err);
                dispatch(setMovieDetailsError('Sorry, Could not fetch movie details!'));
            }

        }