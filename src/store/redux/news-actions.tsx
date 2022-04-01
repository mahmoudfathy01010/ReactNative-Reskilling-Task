import { AnyAction } from 'redux'
import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'
import { fetchArticles, validateStatus } from '../../utils/https'
import { getNewsArticles, setError, setIsLoading } from './news-slice'
import { Article } from '../model/article'

export const thunkGetArticles =
    (query: string): ThunkAction<void, RootState, unknown, AnyAction> =>
        async dispatch => {
            const getData = async (): Promise<Article[]> => {
                dispatch(setIsLoading(true));
                const response = await fetchArticles(query);
                if (!validateStatus(response.status)) {
                    throw new Error('Sorry, Could not fetch articles data!');
                }
                else {
                    let articles: Article[] = response.data.articles;
                    return articles;
                }
            }
            try {
                let articles: Article[] = await getData();
                dispatch(getNewsArticles(articles));

            }
            catch (err) {
                dispatch(setError('Sorry, Could not fetch articles data!'));
            }

        }