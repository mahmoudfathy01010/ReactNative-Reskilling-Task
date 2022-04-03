import { AnyAction } from 'redux'
import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'
import { fetchArticles, validateStatus } from '../../utils/https'
import { getNewsArticles, setError, setIsLoading } from './news-slice'
import { Movie } from '../model/article'

export const thunkGetArticles =
    (query: string, isRefreshing=false): ThunkAction<void, RootState, unknown, AnyAction> =>
        async dispatch => {
            const getData = async (): Promise<Movie[]> => {
                if(!isRefreshing){
                dispatch(setIsLoading(true));
                }
                const response = await fetchArticles(query);
                if (!validateStatus(response.status)) {
                    throw new Error('Sorry, Could not fetch articles data!');
                }
                else {
                    let articles: Movie[] = response.data.results;
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