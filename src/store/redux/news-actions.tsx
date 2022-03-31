import { AnyAction } from 'redux'
import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'
import { fetchArticles, validateStatus } from '../../utils/https'
import { getNewsArticles, setError } from './news-slice'
import { Article } from '../model/article'

export const thunkGetArticles =
    (): ThunkAction<void, RootState, unknown, AnyAction> =>
        async dispatch => {
            const getData = async (): Promise<Article[]> => {
                const response = await fetchArticles();
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