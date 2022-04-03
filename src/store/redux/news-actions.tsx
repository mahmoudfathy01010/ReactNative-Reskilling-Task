import { AnyAction } from 'redux'
import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'
import { fetchArticles, fetchMovieById, validateStatus } from '../../utils/https'
import { getNewsArticles, setError, setIsLoading } from './news-slice'
import { Movie } from '../model/article'
import { getMovie, setMovieDetailsError, setMovieDetailsLoading } from './movie-slice'

export const thunkGetArticles =
    (query: string, isRefreshing = false): ThunkAction<void, RootState, unknown, AnyAction> =>
        async dispatch => {
            const getData = async (): Promise<Movie[]> => {
                if (!isRefreshing) {
                    dispatch(setIsLoading(true));
                }
                const response = await fetchArticles(query);
                if (!validateStatus(response.status)) {
                    throw new Error('Sorry, Could not fetch articles data!');
                }
                else {
                    let articles: Movie[] = response.data.results;
                    console.log("data" +response.status)
                    return articles;
                }
            }
            try {
                let articles: Movie[] = await getData();
                dispatch(getNewsArticles(articles));

            }
            catch (err) {
                console.log(err);
                dispatch(setError('Sorry, Could not fetch articles data!'));
            }

        }

export const thunkGetMovieById =
    (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
        async dispatch => {
            const getData = async (): Promise<Movie> => {
                    dispatch(setMovieDetailsLoading(true));
                const response = await fetchMovieById(id);
                if (!validateStatus(response.status)) {
                    throw new Error('Sorry, Could not fetch articles data!');
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
                dispatch(setMovieDetailsError('Sorry, Could not fetch articles data!'));
            }

        }